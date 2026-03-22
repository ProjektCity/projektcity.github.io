(function() {
    const SUPPORTED_LANGUAGES = ['en', 'de'];
    const DEFAULT_LANGUAGE = 'en';

    const LANGUAGE_INFO = {
        en: { name: 'English', flag: 'us' },
        de: { name: 'Deutsch', flag: 'de' }
    };

    const FLAG_SVGS = {
        us: '<svg class="flexible-language-svg" height="30" viewBox="0 0 640 480"><path fill="#bd3d44" d="M0 0h640v480H0"></path><path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"></path><path fill="#192f5d" d="M0 0h364.8v258.5H0"></path><marker id="us-a" markerHeight="30" markerWidth="30"><path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"></path></marker><path fill="none" marker-mid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"></path></svg>',
        de: '<svg class="flexible-language-svg" height="30" viewBox="0 0 640 480"><path fill="#000000" d="M0 0h640v160H0z"/><path fill="#d00000" d="M0 160h640v160H0z"/><path fill="#ffce00" d="M0 320h640v160H0z"/></svg>'
    };

    function interpolate(str, vars) {
        return str.replace(/\$\{(\w+)\}/g, (_, key) =>
            vars.hasOwnProperty(key) ? vars[key] : `\${${key}}`
        );
    }

    const isI18nEnabled = window.i18nConfig && 
                          window.i18nConfig.pageStringsPath && 
                          window.i18nConfig.pageStringsPath !== 'unset';

    if (!isI18nEnabled) {
        window.i18n = {
            getCurrentLanguage: () => DEFAULT_LANGUAGE,
            getAvailableLanguages: () => SUPPORTED_LANGUAGES,
            getLanguageInfo: (lang) => LANGUAGE_INFO[lang] || LANGUAGE_INFO[DEFAULT_LANGUAGE],
            getFlagSVG: (countryCode) => FLAG_SVGS[countryCode] || FLAG_SVGS['us'],
            get: (key, fallback = '', vars = {}) => fallback,
            changeLanguage: async () => {},
            translatePage: () => {},
        };
        return;
    }

    let currentLanguage = DEFAULT_LANGUAGE;
    let translations = {};

    function getLanguageFromStorage() {
        return localStorage.getItem('preferred-language') || navigator.language.split('-')[0] || DEFAULT_LANGUAGE;
    }

    function saveLanguageToStorage(lang) {
        localStorage.setItem('preferred-language', lang);
    }

    function normalizeLanguage(lang) {
        return SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
    }

    async function loadLanguageFiles(lang) {
        const pagePath = window.i18nConfig.pageStringsPath;
        const globalHeaderPath = '/assets/strings/global/header/';
        const globalFooterPath = '/assets/strings/global/footer/';
        const globalCbPath = '/assets/strings/global/cb/';

        const urls = [
            `${pagePath}${lang}.json`,
            `${globalHeaderPath}${lang}.json`,
            `${globalFooterPath}${lang}.json`,
            `${globalCbPath}${lang}.json`
        ];

        try {
            const responses = await Promise.all(urls.map(url => fetch(url).then(res => {
                if (!res.ok) throw new Error(`Failed to load ${url}`);
                return res.json();
            })));

            return Object.assign({}, ...responses);
        } catch (error) {
            console.error('Error loading language files:', error);
            return {};
        }
    }

    function translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!translations[key]) return;
            const varsAttr = el.getAttribute('data-i18n-vars');
            const vars = varsAttr ? JSON.parse(varsAttr) : {};
            el.innerHTML = Object.keys(vars).length ? interpolate(translations[key], vars) : translations[key];
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (translations[key]) el.alt = translations[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[key]) el.placeholder = translations[key];
        });
    }

    window.i18n = {
        getCurrentLanguage: () => currentLanguage,
        getAvailableLanguages: () => SUPPORTED_LANGUAGES,
        getLanguageInfo: (lang) => LANGUAGE_INFO[lang] || LANGUAGE_INFO[DEFAULT_LANGUAGE],
        getFlagSVG: (countryCode) => FLAG_SVGS[countryCode] || FLAG_SVGS['us'],
        get: (key, fallback = '', vars = {}) => {
            const str = translations[key] || fallback;
            return Object.keys(vars).length ? interpolate(str, vars) : str;
        },
        changeLanguage: async function(lang) {
            const newLang = normalizeLanguage(lang);
            if (newLang === currentLanguage) return;
            const newTranslations = await loadLanguageFiles(newLang);
            translations = newTranslations;
            currentLanguage = newLang;
            saveLanguageToStorage(newLang);
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: newLang } }));
            translatePage();
        },
        translatePage: translatePage,
        init: async function() {
            const storedLang = getLanguageFromStorage();
            const initialLang = normalizeLanguage(storedLang);
            translations = await loadLanguageFiles(initialLang);
            currentLanguage = initialLang;
            saveLanguageToStorage(initialLang);
            translatePage();
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: initialLang } }));
        }
    };

    window.i18n.init();
})();