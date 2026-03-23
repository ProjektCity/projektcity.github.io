document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    const unclassifiedCookiesCount = 0;

    const COOKIE_BANNER_HTML = `
        <div class="cookie-banner-dark-background" id="cookie-banner-dark-bg" style="display: none;"></div>
        <div class="cookie-banner-background" id="cookie-banner-bg" style="display: none;"></div>
        <div class="cookie-banner" id="cookie-banner" style="display: none;">
            <div class="cb-inner">
                <div class="cb-top-elements">
                    <div class="cb-header-text">
                        <p data-i18n="cb_allow_title">Allow the use of cookies by Projekt City from Google and its partners in this browser?</p>
                    </div>
                    <div class="cookie-hr"></div>
                    <div class="cb-maincontent">
                        <div>
                            <p data-i18n="cb_intro">Projekt City and its (sub)pages and services use cookies and similar technologies to</p>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
                                            <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_provide_operate">provide and operate its websites and services</p>
                                </div>
                            </div>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
                                            <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_recognize_failures">recognize failures and problems and take measures against spam, fraud and abuse</p>
                                </div>
                            </div>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
                                            <path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_protect_site">protect its site and its visitors by certain legal requirements</p>
                                </div>
                            </div>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
                                            <path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_improve_expand">improve and expand its site and services to provide users with a consistently better experience</p>
                                </div>
                            </div>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
                                            <path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_collect_data">collect data on target group interactions and website statistics</p>
                                </div>
                            </div>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
                                            <path d="M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 23-5.5 42T220-202q5 2 10 2h10Zm230-160L360-470l358-358q11-11 27.5-11.5T774-828l54 54q12 12 12 28t-12 28L470-360Zm-190 80Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_save_preferences">save the preferences you made while using the site</p>
                                </div>
                            </div>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30" fill="#fff">
                                            <path d="m17.5 17.5-2.498.993L17.5 19.5l1 2.5 1-2.5 2.5-1.007-2.5-.993-1-2.514-1 2.514Zm1-15.5-1 2.5-2.498 1.007L17.5 6.5l1 2.514 1-2.514 2.5-.993L19.5 4.5l-1-2.5ZM7.714 9.714 10 4l2.286 5.714L18 12l-5.714 2.286L10 20l-2.286-5.714L2 12Zm.77.77L4.693 12l3.79 1.516L10 17.307l1.516-3.79L15.307 12l-3.79-1.516L10 6.693l-1.516 3.79Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_enhance_experience">enhance your online experience with personalized, relevant advertising</p>
                                </div>
                            </div>
                            <div class="cb-main-flex">
                                <div class="cb-main-flex-left">
                                    <div class="cb-main-flex-l-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
                                            <path d="M485-440h163q26 0 44-18t18-44q0-26-18-44.5T648-565h-2q-5-32-29-53.5T560-640q-26 0-47 13.5T481-590q-30 2-50.5 23.5T410-515q0 30 21.5 52.5T485-440ZM120-120q-33 0-56.5-23.5T40-200v-520h80v520h680v80H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h200l80 80h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Zm0-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p data-i18n="cb_show_embedded">show you embedded videos, widgets, images or other third-party content</p>
                                </div>
                            </div>
                            <p data-i18n="cb_two_types">Projekt City distinguishes between the following two types of cookies:</p>
                            <ul>
                                <li data-i18n="cb_required_cookies">Required cookies: These cookies are essential for the basic functionality of the website.</li>
                                <li data-i18n="cb_optional_cookies">Optional cookies: These cookies are not essential and are deactivated by default.</li>
                            </ul>
                            <p><span data-i18n="cb_more_info">You can decide which optional cookies Projekt City may use. You can find out more in our</span> <a class="linkout" href="https://projektcity.github.io/legal/privacy" target="_blank" data-i18n="cb_privacy_link">privacy policy.</a></p>
                            <p style="font-weight: 400;" data-i18n="cb_other_agreements">Other agreements, conditions, guidelines, policies and terms</p>
                            <p data-i18n="cb_other_agreements_text">The use of our services is also subject to other specific conditions. By using our Services, you agree to be bound by these agreements, conditions, guidelines, policies and terms and you warrant to us that you will comply with them. If you do not comply with these, you may have to reckon with consequences.</p>
                        </div>
                    </div>
                </div>
                <div class="cb-footer">
                    <div class="cb-footer-inner">
                        <div class="cb-footer-filled-btn" id="acceptCookies">
                            <div class="cb-footer-filled-btn-inner">
                                <p data-i18n="cb_accept_all">Accept all cookies</p>
                            </div>
                        </div>
                        <div class="cb-footer-btn" id="cookieManager">
                            <div class="cb-footer-btn-inner">
                                <p data-i18n="cb_manage_options">Manage options</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const COOKIE_SELECTOR_HTML = `
        <div class="cookie-selector" id="cookie-selector" style="display: none;">
            <div class="cookie-container">
                <div class="cookie-chooser-head-items">
                    <div class="cookie-chooser-top-bar">
                        <div class="cookie-chooser-head-btn" id="cookieSelectorBack">
                            <svg id="cookieSelectorBackIcon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="#fff">
                                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                            </svg>
                            <svg id="cookieSelectorCloseIcon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="#fff" style="display:none;">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </div>
                        <div class="cookie-chooser-header">
                            <p id="cookieChooserHeader" style="font-weight: 400; font-size: 22px;" data-i18n="cb_selector_title_consent">Projekt City requires your consent!</p>
                        </div>
                    </div>
                    <div class="cookie-hr"></div>
                    <div class="cookie-chooser-maincontent">
                        <div class="cookie-chooser-actions">
                            <div class="cookie-chooser-action">
                                <div class="cookie-chooser-left">
                                    <div class="cookie-chooser-header">
                                        <p data-i18n="cb_necessary_header"></p>
                                    </div>
                                    <div class="cookie-chooser-description">
                                        <p data-i18n="cb_necessary_text1"></p>
                                        <p data-i18n="cb_necessary_text2"></p>
                                    </div>
                                </div>
                                <div class="cookie-chooser-switcher">
                                    <input class="cookie-checkbox" id="neccessarryCookies" type="checkbox" checked disabled>
                                </div>
                            </div>
                            <div class="cookie-hr"></div>
                            
                            <div class="cookie-chooser-action">
                                <div class="cookie-chooser-left">
                                    <div class="cookie-chooser-header">
                                        <p data-i18n="cb_statistics_header"></p>
                                    </div>
                                    <div class="cookie-chooser-description">
                                        <p data-i18n="cb_statistics_text">.</p>
                                    </div>
                                </div>
                                <div class="cookie-chooser-switcher">
                                    <input class="cookie-checkbox" id="statisticAndAnalyticsCookies" type="checkbox">
                                </div>
                            </div>
                            <div class="cookie-hr"></div>
                            <div class="cookie-chooser-action">
                                <div class="cookie-chooser-left">
                                    <div class="cookie-chooser-header">
                                        <p data-i18n="cb_preferences_header"></p>
                                    </div>
                                    <div class="cookie-chooser-description">
                                        <p data-i18n="cb_preferences_text"></p>
                                    </div>
                                </div>
                                <div class="cookie-chooser-switcher">
                                    <input class="cookie-checkbox" id="preferencesAndPersonalizationCookies" type="checkbox">
                                </div>
                            </div>
                            <div class="cookie-hr"></div>
                            
                            <div class="cookie-chooser-action">
                                <div class="cookie-chooser-left">
                                    <div class="cookie-chooser-header">
                                        <p data-i18n="cb_thirdparty_header"></p>
                                    </div>
                                    <div class="cookie-chooser-description">
                                        <p data-i18n="cb_thirdparty_text">.</p>
                                    </div>
                                </div>
                                <div class="cookie-chooser-switcher">
                                    <input class="cookie-checkbox" id="displayThirdPartyContent" type="checkbox">
                                </div>
                            </div>
                            <div class="cookie-hr"></div>
                            
                            <div class="cookie-chooser-action">
                                <div class="cookie-chooser-left">
                                    <div class="cookie-chooser-header">
                                        <p data-i18n="cb_marketing_header"></p>
                                    </div>
                                    <div class="cookie-chooser-description">
                                        <p data-i18n="cb_marketing_text"></p>
                                    </div>
                                </div>
                                <div class="cookie-chooser-switcher">
                                    <input class="cookie-checkbox" id="marketingAndAdvertisementCookies" type="checkbox">
                                </div>
                            </div>
                            <div class="cookie-hr"></div>
                            <div class="cookie-chooser-action">
                                <div class="cookie-chooser-left">
                                    <div class="cookie-chooser-header">
                                        <p data-i18n="cb_unclassified_header"></p>
                                    </div>
                                    <div class="cookie-chooser-description">
                                        <p data-i18n="cb_unclassified_text"></p>
                                        <p data-i18n="cb_unclassified_info" data-i18n-vars='{"unclassifiedCookiesCount": 0}'></p>
                                    </div>
                                </div>
                                <div class="cookie-chooser-switcher">
                                    <input class="cookie-checkbox" id="unclassifiedCookies" type="checkbox">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cookie-chooser-bottom">
                    <div class="cookie-chooser-bottom-inner">
                        <div class="cb-footer">
                            <div class="cb-footer-inner">
                                <div class="cb-footer-btn" id="cookieSaveChanges">
                                    <div class="cb-footer-btn-inner">
                                        <p data-i18n="cb_save_close">Save and Close</p>
                                    </div>
                                </div>
                                <div class="cb-footer-filled-btn" id="acceptCookiesAndCloseBanner">
                                    <div class="cb-footer-filled-btn-inner">
                                        <p data-i18n="cb_accept_all">Accept all cookies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    class CookieBanner {
        constructor() {
            this.init();
        }

        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        }

        setup() {
            setTimeout(() => {
                this.initializeGTMConsent();
                this.injectHTML();
                this.loadPreferences();
                this.checkCookieAcceptance();
                this.setupEventListeners();

                if (window.i18n && typeof window.i18n.translatePage === 'function') {
                    window.i18n.translatePage();
                }

                document.addEventListener('languageChanged', () => {
                    console.log('[LANG] languageChanged event received');
                    if (window.i18n && typeof window.i18n.translatePage === 'function') {
                        window.i18n.translatePage();
                        console.log('[LANG] translatePage called');
                    } else {
                        console.log('[LANG] i18n not available');
                    }
                });

                console.log('[COOKIES] Cookie Banner initialized');
            }, 10);
        }

        initializeGTMConsent() {
            if (typeof gtag === 'function') {
                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied',
                    'functionality_storage': 'granted',
                    'personalization_storage': 'denied',
                    'security_storage': 'granted'
                });
            }
        }

        injectHTML() {
            const container = document.createElement('div');
            container.innerHTML = COOKIE_BANNER_HTML + COOKIE_SELECTOR_HTML;
            document.body.appendChild(container);
        }

        loadPreferences() {
            const preferences = {
                statisticAndAnalyticsCookies: localStorage.getItem('statisticAndAnalyticsCookies'),
                preferencesAndPersonalizationCookies: localStorage.getItem('preferencesAndPersonalizationCookies'),
                displayThirdPartyContent: localStorage.getItem('displayThirdPartyContent'),
                marketingAndAdvertisementCookies: localStorage.getItem('marketingAndAdvertisementCookies'),
                unclassifiedCookies: localStorage.getItem('unclassifiedCookies')
            };

            Object.keys(preferences).forEach(key => {
                const element = document.getElementById(key);
                if (element && preferences[key] === 'granted') {
                    element.checked = true;
                    this.updateGTMConsent(key, 'granted');
                    console.log(`[COOKIES] set-cookies=${key}_granted`);
                }
            });
        }

        checkCookieAcceptance() {
            if (localStorage.getItem('cookiesAccepted')) {
                this.hideBanner();
                console.log('[COOKIES] cookiesAccepted=true');
            } else {
                this.showBanner();
                console.log('[COOKIES] cookiesAccepted=false');
            }
        }

        showBanner() {
            const banner = document.getElementById('cookie-banner');
            const darkBg = document.getElementById('cookie-banner-dark-bg');
            const bg = document.getElementById('cookie-banner-bg');

            if (banner) {
                banner.style.display = 'block';
                darkBg.style.display = 'block';
                bg.style.display = 'block';
                document.documentElement.style.overflowY = 'hidden';

                localStorage.setItem('language', 'en_US');
            }
        }

        hideBanner() {
            const banner = document.getElementById('cookie-banner');
            const darkBg = document.getElementById('cookie-banner-dark-bg');
            const bg = document.getElementById('cookie-banner-bg');

            if (banner) {
                banner.style.display = 'none';
                darkBg.style.display = 'none';
                bg.style.display = 'none';
                document.documentElement.style.overflowY = 'unset';

                setTimeout(() => {
                    banner.remove();
                }, 1111);
            }
        }

        showSelector(fromChanger = false) {
            const selector = document.getElementById('cookie-selector');
            const darkBg = document.getElementById('cookie-banner-dark-bg');
            const bg = document.getElementById('cookie-banner-bg');
            const banner = document.getElementById('cookie-banner');

            if (selector) {
                selector.style.display = 'block';
                darkBg.style.display = 'block';
                bg.style.display = 'block';
                if (banner) banner.style.display = 'none';
                document.documentElement.style.overflowY = 'hidden';

                if (fromChanger) {
                    selector.classList.remove('cb-fade-out');
                    darkBg.classList.remove('cb-bg-fade-out');
                    bg.classList.remove('cb-bg-fade-out');
                    selector.classList.add('cb-fade-in');
                }

                const backBtn = document.getElementById('cookieSelectorBack');
                if (backBtn) {
                    if (localStorage.getItem('cookiesAccepted')) {
                        backBtn.style.order = '2';
                        backBtn.style.marginLeft = 'auto';
                        document.getElementById('cookieSelectorBackIcon').style.display = 'none';
                        document.getElementById('cookieSelectorCloseIcon').style.display = '';
                    } else {
                        backBtn.style.order = '';
                        backBtn.style.marginLeft = '';
                        document.getElementById('cookieSelectorBackIcon').style.display = '';
                        document.getElementById('cookieSelectorCloseIcon').style.display = 'none';
                    }
                }

                console.log('[COOKIES] display_cookie_selector=true');
            }
        }

        hideSelector(fromChanger = false) {
            const selector = document.getElementById('cookie-selector');
            const darkBg = document.getElementById('cookie-banner-dark-bg');
            const bg = document.getElementById('cookie-banner-bg');

            if (selector) {
                if (fromChanger) {
                    selector.classList.remove('cb-fade-in');
                    selector.classList.add('cb-fade-out');
                    darkBg.classList.add('cb-bg-fade-out');
                    bg.classList.add('cb-bg-fade-out');

                    setTimeout(() => {
                        selector.style.display = 'none';
                        darkBg.style.display = 'none';
                        bg.style.display = 'none';
                        selector.classList.remove('cb-fade-out');
                        darkBg.classList.remove('cb-bg-fade-out');
                        bg.classList.remove('cb-bg-fade-out');
                        document.documentElement.style.overflowY = 'unset';
                    }, 250);
                } else {
                    selector.style.display = 'none';
                    darkBg.style.display = 'none';
                    bg.style.display = 'none';
                    document.documentElement.style.overflowY = 'unset';
                }

                console.log('[COOKIES] display_cookie_selector=false');
            }
        }

        acceptAllCookies() {
            localStorage.setItem('cookiesAccepted', 'true');
            localStorage.setItem('language', 'en_US');

            const cookieTypes = [
                'statisticAndAnalyticsCookies',
                'preferencesAndPersonalizationCookies',
                'displayThirdPartyContent',
                'marketingAndAdvertisementCookies',
                'unclassifiedCookies'
            ];

            cookieTypes.forEach(type => {
                localStorage.setItem(type, 'granted');
                const element = document.getElementById(type);
                if (element) element.checked = true;
            });

            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'analytics_storage': 'granted',
                    'functionality_storage': 'granted',
                    'personalization_storage': 'granted',
                    'security_storage': 'granted'
                });
            }

            this.hideBanner();
            this.hideSelector();

            console.log('[COOKIES] All cookies accepted');
        }

        updateGTMConsent(cookieType, value) {
            if (typeof gtag !== 'function') return;

            const consentMap = {
                'statisticAndAnalyticsCookies': {
                    'analytics_storage': value
                },
                'preferencesAndPersonalizationCookies': {
                    'personalization_storage': value
                },
                'marketingAndAdvertisementCookies': {
                    'ad_storage': value,
                    'ad_user_data': value,
                    'ad_personalization': value
                },
                'unclassifiedCookies': {

                }
            };

            if (consentMap[cookieType]) {
                gtag('consent', 'update', consentMap[cookieType]);
            }
        }

        setupEventListeners() {
            const acceptBtn = document.getElementById('acceptCookies');
            if (acceptBtn) {
                acceptBtn.addEventListener('click', () => {
                    this.acceptAllCookies();
                    location.reload();
                });
            }

            const manageBtn = document.getElementById('cookieManager');
            if (manageBtn) {
                manageBtn.addEventListener('click', () => this.showSelector());
            }

            const acceptSelectorBtn = document.getElementById('acceptCookiesAndCloseBanner');
            if (acceptSelectorBtn) {
                acceptSelectorBtn.addEventListener('click', () => {
                    this.acceptAllCookies();
                    if (!localStorage.getItem('cookiesAccepted')) {
                        location.reload();
                    }
                });
            }

            const saveBtn = document.getElementById('cookieSaveChanges');
            if (saveBtn) {
                saveBtn.addEventListener('click', () => {
                    localStorage.setItem('cookiesAccepted', 'true');
                    this.hideSelector(this._fromChanger);
                    this._fromChanger = false;
                    location.reload();
                });
            }

            document.addEventListener('click', (e) => {
                const trigger = e.target.closest('.change-settings');
                
                if (trigger) {
                    e.preventDefault();
                    this._fromChanger = true;
                    this.showSelector(true);
                    console.log('[COOKIES] Selector via class .change-settings opened');
                }
            });

            const backBtn = document.getElementById('cookieSelectorBack');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    if (localStorage.getItem('cookiesAccepted')) {
                        this.hideSelector(this._fromChanger);
                        this._fromChanger = false;
                    } else {
                        const selector = document.getElementById('cookie-selector');
                        const banner = document.getElementById('cookie-banner');
                        if (selector) selector.style.display = 'none';
                        if (banner) banner.style.display = 'block';
                    }
                });
            }

            this.setupCheckboxListeners();

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    const selector = document.getElementById('cookie-selector');
                    if (selector && selector.style.display !== 'none') {
                        this.hideSelector(this._fromChanger);
                        this._fromChanger = false;
                    }
                }
            });
        }

        setupCheckboxListeners() {
            const checkboxes = [
                'statisticAndAnalyticsCookies',
                'preferencesAndPersonalizationCookies',
                'displayThirdPartyContent',
                'marketingAndAdvertisementCookies',
                'unclassifiedCookies'
            ];

            checkboxes.forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox) {
                    checkbox.addEventListener('change', () => {
                        const value = checkbox.checked ? 'granted' : 'denied';
                        localStorage.setItem(id, value);
                        this.updateGTMConsent(id, value);
                        console.log(`[COOKIES] ${id}: ${value}`);
                    });
                }
            });
        }
    }

    new CookieBanner();

    window.ProjektCityCookieBanner = CookieBanner;
});