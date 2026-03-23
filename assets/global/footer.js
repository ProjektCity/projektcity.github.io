document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const branding = 'Projekt City Ltd.'
    const footer = document.querySelector('footer');

    function renderFooter() {
        footer.innerHTML = `
            <p data-i18n="footer_translation_notice" class="small">Translations are currently in development and will be finished by 1/7/2026. Please do not report any spelling errors or other grammatical errors in the meantime!</p>
            <p>
                <a data-linkout="https://forms.office.com/r/d4XTwwAq90" data-target="_blank" data-i18n="footer_apply_builder">Apply as Builder</a> • 
                <a data-linkout="https://forms.projekcity.com/suggest-improvement" data-target="_blank" data-i18n="footer_suggest_improvement">Suggest Improvement</a> • 
                <a data-linkout="https://bit.ly/ProjektCityLinktree" data-target="_blank" data-i18n="footer_socials">Socials</a> • 
                <a id="shareButton" data-i18n="footer_share">Share</a> • 
                <a data-linkout="https://translate.projektcity.com/" data-target="_blank" data-i18n="footer_translate">Translate</a>
            </p>
            <p>
                <a data-linkout="/legal/accessibility-statement" data-target="_blank" data-i18n="footer_accessibility">Accessibility statement</a> • 
                <a data-linkout="/legal/advertisement-terms" data-target="_blank" data-i18n="footer_ad_terms">Advertisement Terms</a> • 
                <a data-linkout="/legal/application-guidelines" data-target="_blank" data-i18n="footer_app_guidelines">Application Guidelines</a> • 
                <a data-linkout="/legal/eula" data-target="_blank" data-i18n="footer_eula">EULA</a> • 
                <a data-linkout="/legal/github-privacy" data-target="_blank" data-i18n="footer_github_privacy">GitHub Privacy Policy</a> • 
                <a data-linkout="/legal/legal-notice" data-target="_blank" data-i18n="footer_imprint">Legal Notice</a> • 
                <a data-linkout="/legal/privacy" data-target="_blank" data-i18n="footer_privacy">Privacy Policy</a> • 
                <a data-linkout="/legal/terms" data-target="_blank" data-i18n="footer_terms">Terms of use</a> • 
                <a data-linkout="/legal/use-our-world" data-target="_blank" data-i18n="footer_use_world">Use Our World</a>
            </p>
            <p><a class="change-settings" data-i18n="footer_cookie_preferences">Change Cookie Preferences</a></p>
            <div>
                <p>© ${year} ${branding} | <span data-i18n="footer_copyright">All rights reserved!</span></p>
                <p><p class="f-colored"><span data-i18n="footer_made_with_love">Made with ❤️ in</span>&nbsp;<a style="color: #000000;">GE</a><a style="color: #DD0000;">RMA</a><a style="color: #FFCE00;">NY</a></p>
            </div>
        `;

        if (window.i18n) {
            window.i18n.translatePage();
        }

        const shareButton = document.getElementById('shareButton');
        if (shareButton) {
            shareButton.addEventListener('click', async () => {
                const title = window.i18n ? window.i18n.get('share_title') : 'Projekt City - by SuffixHD & itsmarian';
                const text = window.i18n ? window.i18n.get('share_text') : 'Check Projekt City and play it for FREE today.';
                const notSupported = window.i18n ? window.i18n.get('share_not_supported') : 'Sharing is not supported in this browser.';

                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: title,
                            text: text,
                            url: 'https://projektcity.com/',
                        });
                    } catch (error) {
                        console.error('Error sharing:', error);
                    }
                } else {
                    alert(notSupported);
                }
            });
        }
    }

    document.addEventListener('languageChanged', function() {
        renderFooter();
    });

    renderFooter();
});