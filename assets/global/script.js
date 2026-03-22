document.addEventListener('DOMContentLoaded', function () {
    let pendingUrl = null;
    let pendingTarget = '_self';

    let popupTranslations = {};
    let popupTranslationsPromise = null;

    const POPUP_STRINGS_PATH = 'https://projektcity.com/assets/strings/global/popup/';

    function getCurrentLanguage() {
        return (window.i18n && typeof window.i18n.getCurrentLanguage === 'function')
            ? window.i18n.getCurrentLanguage()
            : 'en';
    }

    function loadPopupTranslations(lang) {
        const promise = fetch(`${POPUP_STRINGS_PATH}${lang}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load popup translations for ${lang}`);
                }
                return response.json();
            })
            .then(data => {
                popupTranslations = data;
                return data;
            })
            .catch(error => {
                console.error('Error loading popup translations:', error);
                popupTranslations = {};
                return {};
            });
        popupTranslationsPromise = promise;
        return promise;
    }

    loadPopupTranslations(getCurrentLanguage());

    document.addEventListener('languageChanged', function (e) {
        const newLang = e.detail.language;
        loadPopupTranslations(newLang);
    });

    function getPopupTranslation(key, fallback) {
        return popupTranslations[key] || fallback;
    }

    function ensurePopupTranslations() {
        return popupTranslationsPromise || Promise.resolve(popupTranslations);
    }

    function createPopup(url) {
        const overlay = document.createElement('div');
        overlay.id = 'linkout-overlay';
        overlay.className = 'linkout-overlay';

        const popup = document.createElement('div');
        popup.id = 'linkout-popup';
        popup.className = 'linkout-popup';

        const header = document.createElement('div');
        header.className = 'linkout-popup-header';
        header.innerHTML = `
            <span class="linkout-popup-icon">⚠</span>
            <h3 class="linkout-popup-title">${getPopupTranslation('linkout_title', 'You are about to leave Projekt City')}</h3>
        `;

        const message = document.createElement('p');
        message.className = 'linkout-popup-text';
        message.textContent = getPopupTranslation(
            'linkout_message',
            'You are about to leave Projekt City and visit an external website that is not operated or verified by Projekt City. Projekt City is not responsible for the content, privacy practices, or safety of this site.'
        );

        const urlDiv = document.createElement('div');
        urlDiv.className = 'linkout-popup-url';
        urlDiv.textContent = url;

        const actions = document.createElement('div');
        actions.className = 'linkout-popup-actions';

        const continueBtn = document.createElement('button');
        continueBtn.className = 'linkout-btn-continue';
        continueBtn.textContent = getPopupTranslation('linkout_continue', 'Continue');

        const backBtn = document.createElement('button');
        backBtn.className = 'linkout-btn-back';
        backBtn.textContent = getPopupTranslation('linkout_back', 'Go Back');

        actions.appendChild(continueBtn);
        actions.appendChild(backBtn);

        popup.appendChild(header);
        popup.appendChild(message);
        popup.appendChild(urlDiv);
        popup.appendChild(actions);
        overlay.appendChild(popup);

        return overlay;
    }

    function openPopup(url, target) {
        const existing = document.getElementById('linkout-overlay');
        if (existing) existing.remove();

        pendingUrl = url;
        pendingTarget = target;

        ensurePopupTranslations().then(() => {
            const overlay = createPopup(url);
            document.body.appendChild(overlay);

            setTimeout(() => {
                overlay.classList.add('open');
            }, 100);

            const continueBtn = overlay.querySelector('.linkout-btn-continue');
            const backBtn = overlay.querySelector('.linkout-btn-back');

            function closePopup() {
                if (overlay && overlay.parentNode) {
                    overlay.remove();
                }
                pendingUrl = null;
                pendingTarget = '_self';
            }

            continueBtn.addEventListener('click', function () {
                if (pendingUrl) window.open(pendingUrl, pendingTarget);
                closePopup();
            });

            backBtn.addEventListener('click', closePopup);

            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) closePopup();
            });
        });
    }

    document.addEventListener('click', function (event) {
        const link = event.target.closest('[data-linkout]');
        if (!link) return;

        const url = link.getAttribute('data-linkout');
        const target = link.getAttribute('data-target') || '_self';
        const type = link.getAttribute('data-type');

        event.preventDefault();

        if (type === 'external') {
            openPopup(url, target);
        } else {
            window.open(url, target);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const popup = document.getElementById('linkout-overlay');
            if (popup) popup.remove();
        }
    });

    setTimeout(() => {
        console.log('%cWARNING!', 'color: red; font-size: 30px; font-weight: bold;');
        console.log(
            '%cThis is a browser feature intended for developers and debuggers only and may contain sensitive links and information about you, your data and private information, account/s, device, browser and current session. \nScammers have been known to encourage people to copy and/or paste information or run commands on the command line to hack accounts or access sensitive data. If you do not know what you are doing, do not proceed and close the debug menu! \nThe information that is/will be visible above and below this text is only for the development and improvement of the site and helps to find and fix bugs and other problems in JavaScript faster. \nFor more information about this message and what you can do if you have been taken in by a scam, please visit the following address: https://helpcenter.projektcity.com/debug-menu',
            'color: red; font-size: 12.5px;'
        );
    }, 240);
});

(function() {
    const PRIMARY_SELECTOR = 'section > p, section > a, section > h1, section > h2, section > h3, section > h4, section > div, section > img, section > div > div, section > table > tbody > tr, section > table > thead > tr, section > ul > li';
    const CHILD_TAGS = ['A', 'IMG', 'H1', 'H2', 'H3', 'H4', 'P', 'DIV'];

    const ANIMATION_STEP = 0.05;
    let animationCounter = 0;

    function applyAnimation(el, delay) {
        if (!el || el.classList.contains('animate-floatin')) return;
        el.classList.add('animate-floatin');
        el.style.animationDelay = delay + 's';

        const onAnimationEnd = function(e) {
            if (e.animationName === 'floatIn') {
                el.classList.remove('animate-floatin');
                el.style.animationDelay = '';
                el.removeEventListener('animationend', onAnimationEnd);
            }
        };
        el.addEventListener('animationend', onAnimationEnd);
    }

    function processPrimaryElement(primary, delay) {
        applyAnimation(primary, delay);
        const descendants = primary.querySelectorAll(CHILD_TAGS.join(','));
        descendants.forEach(desc => applyAnimation(desc, delay));
    }

    function getPrimaryElementsSorted() {
        const all = Array.from(document.querySelectorAll(PRIMARY_SELECTOR));
        const directoryPrimaries = [];
        const otherPrimaries = [];
        all.forEach(el => {
        if (el.closest('section#directory')) {
            directoryPrimaries.push(el);
        } else {
            otherPrimaries.push(el);
        }
        });
        return directoryPrimaries.concat(otherPrimaries);
    }

    function initAnimation() {
        const sortedPrimaries = getPrimaryElementsSorted();
        let delay = 0;
        sortedPrimaries.forEach(primary => {
        processPrimaryElement(primary, delay);
        delay += ANIMATION_STEP;
        });
        animationCounter = sortedPrimaries.length;

        const observer = new MutationObserver(mutations => {
        const newPrimaries = [];
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                if (node.matches && node.matches(PRIMARY_SELECTOR)) {
                newPrimaries.push(node);
                }
                const inside = node.querySelectorAll ? node.querySelectorAll(PRIMARY_SELECTOR) : [];
                inside.forEach(el => newPrimaries.push(el));
            });
            }
        });
        if (newPrimaries.length) {
            let delay = animationCounter * ANIMATION_STEP;
            newPrimaries.forEach(primary => {
            processPrimaryElement(primary, delay);
            delay += ANIMATION_STEP;
            });
            animationCounter += newPrimaries.length;
        }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimation);
    } else {
        initAnimation();
    }
})();