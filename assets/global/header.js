document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    const i18nEnabled = window.i18nConfig && 
                        window.i18nConfig.pageStringsPath && 
                        window.i18nConfig.pageStringsPath !== 'unset';

    function renderHeader() {
        const currentLang = window.i18n ? window.i18n.getCurrentLanguage() : 'en';
        const langInfo = window.i18n ? window.i18n.getLanguageInfo(currentLang) : { name: 'English', flag: 'us' };
        
        let languageHtml = '';
        if (i18nEnabled) {
            languageHtml = `
                <div class="header-box-item language-switcher" id="languageSwitcher">
                    <div id="language">
                        <div class="language-flag">
                            ${window.i18n.getFlagSVG(langInfo.flag)}
                        </div>
                        <div class="language-name">
                            <p>${langInfo.name}</p>
                        </div>
                    </div>
                    <div class="language-dropdown" id="languageDropdown" style="display: none;">
                        ${renderLanguageOptions()}
                    </div>
                </div>
            `;
        } else {
            languageHtml = `
                <div class="header-box-item" style="flex-direction: column;">
                    <div class="language-flag">
                        ${window.i18n ? window.i18n.getFlagSVG('us') : '<svg class="flexible-language-svg" height="30" viewBox="0 0 640 480"><path fill="#bd3d44" d="M0 0h640v480H0"></path><path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"></path><path fill="#192f5d" d="M0 0h364.8v258.5H0"></path><marker id="us-a" markerHeight="30" markerWidth="30"><path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"></path></marker><path fill="none" marker-mid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"></path></svg>'}
                    </div>
                    <div class="language-name">
                        <p>English</p>
                    </div>
                </div>
            `;
        }

        header.innerHTML = `
            <div class="header-inner">
                <div class="header-box" data-linkout="/"><div class="flex-container"><div class="header-logo"></div><div class="text-carousel-container"><div id="carousel"><div class="text-carousel-item" data-i18n="header_carousel_text">Projekt City • by SuffixHD & itsmarian • unique Minecraft project • new update out now • </div><div class="text-carousel-item" data-i18n="header_carousel_text">Projekt City • by SuffixHD & itsmarian • unique Minecraft project • new update out now • </div></div></div></div></div>
                <div class="header-box" style="width: 50%;"><div class="header-menu"><div class="header-item"><a href="/" data-i18n="nav_home">Home</a></div><div class="header-item"><a href="/download/v5-0">V5.0</a></div><div class="header-item"><a href="/download" data-i18n="nav_download">Download</a></div><div class="header-item"><a href="http://discord.com/invite/HeRwHB2QQk" target="_blank" data-i18n="nav_discord">Discord</a></div></div></div>
                <div class="header-box flex-container gap--1rem justify-content--end">
                    <div class="header-box-item" data-linkout="https://www.curseforge.com/minecraft/worlds/projekt-city" data-target="_blank"><svg width="50" height="50" viewBox="0 0 24 24" fill="var(--fill-white)"><path d="M17.9287 8.83231C17.9287 8.83231 22.7227 8.05676 23.4798 5.79482H16.1359V4H0L1.98776 6.36634V8.79085C1.98776 8.79085 7.00333 8.52328 8.94344 10.0326C11.5991 12.558 5.95654 15.9716 5.95654 15.9716L4.98897 19.2564C6.50201 17.7784 9.38571 15.8663 14.6728 15.9585C12.6608 16.6108 10.6377 17.6298 9.0627 19.2564H19.7507L18.7442 15.9716C18.7442 15.9716 10.9978 11.2855 17.9287 8.83261V8.83231Z"></path></svg></div>
                    <div class="theme-switch" id="themeSwitch">
                        <div class="icon-container">
                            <div class="sun">
                                <div class="sun-center"></div>
                                <div class="sun-ray"></div>
                                <div class="sun-ray"></div>
                                <div class="sun-ray"></div>
                                <div class="sun-ray"></div>
                                <div class="sun-ray"></div>
                                <div class="sun-ray"></div>
                                <div class="sun-ray"></div>
                                <div class="sun-ray"></div>
                            </div>
                            <div class="moon">
                                <div class="moon-shape">
                                    <div class="moon-crater"></div>
                                    <div class="moon-crater"></div>
                                    <div class="moon-crater"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-box-item" id="multiHeaderElement" style="margin-left: 10px;">
                    ${languageHtml}
                    <div class="header-nav-menu menu-toggle" id="mobile-menu"><div class="menu-icon"><div class="line line-1"></div><div class="line line-2"></div><div class="line line-3"></div></div></div>
                </div>
            </div>
        `;
        
        if (window.i18n && i18nEnabled) {
            window.i18n.translatePage();
        }
        
        initializeHeaderComponents(i18nEnabled);
    }

    function renderLanguageOptions() {
        if (!window.i18n) return '';
        const availableLanguages = window.i18n.getAvailableLanguages();
        const currentLang = window.i18n.getCurrentLanguage();
        return availableLanguages.map(lang => {
            const info = window.i18n.getLanguageInfo(lang);
            const isActive = lang === currentLang ? 'active' : '';
            return `
                <div class="language-option ${isActive}" data-lang="${lang}">
                    <div class="language-flag-small">
                        ${window.i18n.getFlagSVG(info.flag)}
                    </div>
                    <span>${info.name}</span>
                </div>
            `;
        }).join('');
    }

    function initializeHeaderComponents(i18nEnabled) {
        const carousel = document.getElementById('carousel');
        const menuToggle = document.getElementById('mobile-menu');
        const menu = document.querySelector('.header-menu');
        const menuIcon = document.querySelector('.menu-icon');
        let overlay = document.querySelector('.menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('menu-overlay');
            document.body.appendChild(overlay);
        }
        
        if (carousel) {
            carousel.addEventListener('animationend', function(event) {
                if (event.animationName === 'initialWidth') {
                    carousel.classList.add('animating');
                }
            });
        }

        const themeSwitch = document.getElementById('themeSwitch');
        const root = document.documentElement;
        const currentTheme = localStorage.getItem('theme') || 'dark';
        root.className = currentTheme;

        themeSwitch.addEventListener('click', () => {
            const newTheme = root.classList.contains('dark') ? 'light' : 'dark';
            root.className = newTheme;
            localStorage.setItem('theme', newTheme);
        });

        themeSwitch.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                themeSwitch.click();
            }
        });

        themeSwitch.setAttribute('role', 'button');
        themeSwitch.setAttribute('aria-label', window.i18n ? window.i18n.get('theme_toggle_label') : 'Toggle theme');
        themeSwitch.setAttribute('tabindex', '0');

        if (i18nEnabled) {
            const languageSwitcher = document.getElementById('languageSwitcher');
            const languageDropdown = document.getElementById('languageDropdown');

            if (languageSwitcher && languageDropdown) {
                languageSwitcher.addEventListener('click', function(e) {
                    e.stopPropagation();
                    languageDropdown.style.display = languageDropdown.style.display === 'none' ? 'block' : 'none';
                });

                document.querySelectorAll('.language-option').forEach(option => {
                    option.addEventListener('click', async function(e) {
                        e.stopPropagation();
                        const lang = this.getAttribute('data-lang');
                        if (window.i18n && lang) {
                            await window.i18n.changeLanguage(lang);
                            languageDropdown.style.display = 'none';
                        }
                    });
                });

                document.addEventListener('click', function() {
                    languageDropdown.style.display = 'none';
                });
            }
        }

        function closeMenu() {
            menu.classList.remove('open');
            menuIcon.classList.remove('active');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        if (menuToggle && menu && menuIcon) {
            menuToggle.addEventListener('click', function() {
                const isOpen = menu.classList.toggle('open');
                menuIcon.classList.toggle('active');
                overlay.classList.toggle('open', isOpen);
                document.body.style.overflow = isOpen ? 'hidden' : '';
            });

            overlay.addEventListener('click', closeMenu);
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') closeMenu();
            });
        }
    }

    document.addEventListener('languageChanged', function() {
        renderHeader();
    });

    renderHeader();
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (!header) return;
    header.classList.toggle('scrolling', window.scrollY > 10);
});