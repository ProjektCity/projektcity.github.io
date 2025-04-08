document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        var language = localStorage.getItem('language');

        if (language === "de_DE") {
            console.log("[LANG] set-internal-langue=de_DE");
            document.getElementById("german-de_DE").style.display = "block";
            document.getElementById("mb-german-de_DE").style.display = "block";
            document.getElementById("english-en_US").style.display = "none";
            document.getElementById("mb-english-en_US").style.display = "none";
            updateToGerman();
        }
        if (language === "en_US") {
            console.log("[LANG] set-internal-langue=en_US");
            document.getElementById("english-en_US").style.display = "block";
            document.getElementById("mb-english-en_US").style.display = "block";
            document.getElementById("german-de_DE").style.display = "none";
            document.getElementById("mb-german-de_DE").style.display = "none";
        }
    }, 10);
});

document.getElementById("english-en_US").addEventListener("click", function() {
    localStorage.setItem('language', 'de_DE');
    document.getElementById("german-de_DE").style.display = "block";
    document.getElementById("english-en_US").style.display = "none";
    console.log("[LANG] set-internal-langue=de_DE");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "German (DE)"</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").classList.add("fade-out-animation");
        setTimeout(() => {
            document.getElementById("ui-text-overay").style.display = "none";
            document.getElementById("ui-text-overay").classList.remove("fade-out-animation");
            document.getElementById("ui-content").innerHTML = ``
        }, 500);
    }, 3000);
    updateToGerman();
});

document.getElementById("mb-english-en_US").addEventListener("click", function() {
    localStorage.setItem('language', 'de_DE');
    document.getElementById("mb-english-en_US").style.display = "none";
    document.getElementById("mb-german-de_DE").style.display = "block";
    console.log("[LANG] set-internal-langue=de_DE");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "German (DE)"</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").classList.add("fade-out-animation");
        setTimeout(() => {
            document.getElementById("ui-text-overay").style.display = "none";
            document.getElementById("ui-text-overay").classList.remove("fade-out-animation");
            document.getElementById("ui-content").innerHTML = ``
        }, 500);
    }, 3000);
    updateToGerman();
});
    
document.getElementById("german-de_DE").addEventListener("click", function() {
    localStorage.setItem('language', 'en_US');
    document.getElementById("english-en_US").style.display = "block";
    document.getElementById("german-de_DE").style.display = "none";
    console.log("[LANG] set-internal-langue=en_US");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "English (US)"</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").classList.add("fade-out-animation");
        setTimeout(() => {
            document.getElementById("ui-text-overay").style.display = "none";
            document.getElementById("ui-text-overay").classList.remove("fade-out-animation");
            document.getElementById("ui-content").innerHTML = ``
        }, 500);
    }, 3000);
    updateToEnglish();
});

document.getElementById("mb-german-de_DE").addEventListener("click", function() {
    localStorage.setItem('language', 'en_US');
    document.getElementById("mb-english-en_US").style.display = "block";
    document.getElementById("mb-german-de_DE").style.display = "none";
    console.log("[LANG] set-internal-langue=en_US");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "English (US), please wait."</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").classList.add("fade-out-animation");
        setTimeout(() => {
            document.getElementById("ui-text-overay").style.display = "none";
            document.getElementById("ui-text-overay").classList.remove("fade-out-animation");
            document.getElementById("ui-content").innerHTML = ``
        }, 500);
    }, 3000);
    updateToEnglish();
});

function updateToGerman() {
    const footerContent = document.querySelector(".dt-footer-content .dt-gf-div-lines");
    const divLines = Array.from(footerContent.querySelectorAll(".dt-gf-div-line"));
    // Change the texts
    document.querySelector(".dt-download-project-information-text-bottom").innerHTML = `<a>von itsmarian</a>`;
    document.getElementById("download-type").innerText = `Typ`;
    document.getElementById("download-date").innerText = `Release-Datum`;
    document.getElementById("download-size").innerText = `Größe`;
    document.getElementById("mb-download-type").innerText = `Typ`;
    document.getElementById("mb-download-size").innerText = `Größe`;
    document.getElementById("release-date-v=5.0").innerText = `1. Januar 2025`;
    document.getElementById("size-v=5.0").innerText = `28,1 MB`;
    document.getElementById("mb-size-v=5.0").innerText = `28,1 MB`;
    document.getElementById("redirect-v5-0").title = "V5.0 herunterladen";
    document.getElementById("mb-redirect-v5-0").title = "V5.0 herunterladen";
    document.getElementById("release-date-v=4.2").innerText = `1. November 2024`;
    document.getElementById("size-v=4.2").innerText = `15,7 MB`;
    document.getElementById("mb-size-v=4.2").innerText = `15,7 MB`;
    document.getElementById("redirect-v4-2").title = "V4.2 herunterladen";
    document.getElementById("mb-redirect-v4-2").title = "V4.2 herunterladen";
    document.getElementById("release-date-v=4.1").innerText = `19. März 2024`;
    document.getElementById("size-v=4.1").innerText = `14,0 MB`;
    document.getElementById("mb-size-v=4.1").innerText = `14,0 MB`;
    document.getElementById("redirect-v4-1").title = "V4.1 herunterladen";
    document.getElementById("mb-redirect-v4-1").title = "V4.1 herunterladen";
    document.getElementById("release-date-v=4.0").innerText = `5. Februar 2024`;
    document.getElementById("size-v=4.0").innerText = `12,9 MB`;
    document.getElementById("mb-size-v=4.0").innerText = `12,9 MB`;
    document.getElementById("redirect-v4-0").title = "V4.0 herunterladen";
    document.getElementById("mb-redirect-v4-0").title = "V4.0 herunterladen";
    document.getElementById("release-date-v=3.0").innerText = `10. Januar 2024`;
    document.getElementById("size-v=3.0").innerText = `11,3 MB`;
    document.getElementById("mb-size-v=3.0").innerText = `11,3 MB`;
    document.getElementById("redirect-v3-0").title = "V3.0 herunterladen";
    document.getElementById("mb-redirect-v3-0").title = "V3.0 herunterladen";
    document.getElementById("release-date-v=2.0").innerText = `31. Dezember 2023`;
    document.getElementById("size-v=2.0").innerText = `20,7 MB`;
    document.getElementById("mb-size-v=2.0").innerText = `20,7 MB`;
    document.getElementById("redirect-v2-0").title = "V2.0 herunterladen";
    document.getElementById("mb-redirect-v2-0").title = "V2.0 herunterladen";
    document.getElementById("release-date-v=1.1").innerText = `28. Dezember 2023`;
    document.getElementById("size-v=1.1").innerText = `12,4 MB`;
    document.getElementById("mb-size-v=1.1").innerText = `12,4 MB`;
    document.getElementById("redirect-v1-1").title = "V1.1 herunterladen";
    document.getElementById("mb-redirect-v1-1").title = "V1.1 herunterladen";
    document.getElementById("release-date-v=1.0").innerText = `28. Dezember 2023`;
    document.getElementById("size-v=1.0").innerText = `12,1 MB`;
    document.getElementById("mb-size-v=1.0").innerText = `12,1 MB`;
    document.getElementById("redirect-v1-0").title = "V1.0 herunterladen";
    document.getElementById("mb-redirect-v1-0").title = "V1.0 herunterladen";
    document.querySelector(".dt-tooltiptext").innerText = `Du hast das Ende dieser Seite erreicht!`;
    // Footer
    if (divLines.length < 3) return;
    const [firstLine, secondLine, thirdLine] = divLines;
    firstLine.innerHTML = `<a class="nodecoration" href="https://forms.office.com/r/d4XTwwAq90?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=applyasbuilder" target="_blank">Als Builder bewerben</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/Lfg3QhAD8r?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=suggestimprovement" target="_blank">Verbesserung vorschlagen</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/sMmaBj26Tf?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=ratewebsiteversions" target="_blank">Website Versionen bewerten</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/n1mqLir7cK?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=ratedesignandtext" target="_blank">Design & Texte bewerten</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://bit.ly/ProjektCityLinktree?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=socials" target="_blank">Socials</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" id="shareButton" style="cursor: pointer;">Teilen</a>`;
    secondLine.innerHTML = `<a class="nodecoration" href="/legal/accessibility-statement?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=accessibilitystatement" target="_blank">Erklärung zur Barrierefreiheit</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/application-guidelines?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=applicationguidelines" target="_blank">Bewerbungs Richtlinien</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/advertisement-terms?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=advertisementterms" target="_blank">Werbebedingungen</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/eula?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=eula" target="_blank">EULA</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/github-privacy?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=githubprivacypolicy" target="_blank">GitHub-Datenschutzerklärung</a><br><a class="nodecoration" href="/legal/imprint?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=imprint" target="_blank">Impressum</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/privacy?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=privacypolicy" target="_blank">Datenschutzerklärung</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/terms?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=termsofuse" target="_blank">Nutzungsbedingungen</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/use-our-world?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=useourworld" target="_blank">Use-Our-World Richtlinie</a>`;
    thirdLine.style.display = "block";
    document.getElementById("CookieChanger").innerText = `Cookie Präferenzen ändern`;
    document.getElementById("SendComplaint").innerText = `Beschwerde einreichen`;
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
        document.querySelector(".dt-gf-div-copy").innerHTML = `<a>&copy; 2025 Projekt City Ltd.</a><br><a>Alle Rechte vorbehalten!</a><br><div style="font-size: 20px;"><a>Mit ❤️ gemacht in&nbsp;</a><a style="color: #000000;">DEUT</a><a style="color: #DD0000;">SCH</a><a style="color: #FFCE00;">LAND</a></div>`;               
    } else {
        document.querySelector(".dt-gf-div-copy").innerHTML = `<a>&copy; 2025 Projekt City Ltd. | Alle Rechte vorbehalten!</a><br><div style="font-size: 20px;"><a>Mit ❤️ gemacht in&nbsp;</a><a style="color: #000000;">DEUT</a><a style="color: #DD0000;">SCH</a><a style="color: #FFCE00;">LAND</a></div>`;               
    }
    // Cookie Banner
    document.getElementById("cookieChooserHeader").innerHTML = `Projekt City benötigt deine Einverständis`;
    document.getElementById("neccessarryCookiesHeader").innerText = `Notwendige Cookies`;
    document.getElementById("neccessarryCookiesText").innerHTML = `<a>Cookies sind kleine Textdateien, die an den Browser, den Desktop-Client oder das Gerät des Nutzers gesendet werden, wenn dieser die Website besucht. Sie werden vom Gerät automatisch bereitgestellt, wenn die Seite erneut besucht wird. Cookies werden meist von Websites verwendet, um die Nutzererfahrung zu verbessern, die Leistung der Website zu steigern und - falls aktiviert - personalisierte Inhalte anzuzeigen.</a><br><a>Das Gesetz besagt, dass Unternehmen notwendige Cookies automatisch und ohne Zustimmung des Nutzers auf den Geräten speichern dürfen, wenn sie für den Betrieb der Website erforderlich sind.</a><br><a>Für alle anderen Arten von Cookies, wie z. B. Analyse und Statistik, Einstellungen und Personalisierung, Marketing, Werbung und alle anderen Cookies, ist die Zustimmung des Nutzers erforderlich.</a><br><a>Du kannst dein Cookie-Einstellungen jederzeit ändern. Gehe dazu zum Ende einer unserer Seiten, klicke auf „Cookie-Einstellungen ändern“ und wählen deine bevorzugten Einstellungen.</a>`;
    document.getElementById("statisticAndAnalyticsHeader").innerText = `Statistik- und Analyse-Cookies`;
    document.getElementById("statisticAndAnalyticsText").innerHTML = `<a>Statistik- und Analyse-Cookies, auch bekannt als „Performance-Cookies“, helfen der Website zu verfolgen, wie die Nutzer mit der Website interagieren, welcher Link von ihnen angeklickt wird, wie lange sie sie besuchen, welche Seiten besonders beliebt sind und von welchen Seiten die Nutzer kommen. Diese Informationen werden anonym gesammelt und können nicht zurückverfolgt werden. Sie helfen uns, unsere Website und die Nutzer und ihr Verhalten besser zu verstehen, um ein besseres Erlebnis zu bieten.</a>`;
    document.getElementById("preferencesAndPersonalizationHeader").innerText = `Präferenzen und Personalisierung`;
    document.getElementById("preferencesAndPersonalizationText").innerHTML = `<a>Präferenz-Cookies sind Cookies, die es der Website ermöglichen, sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben, wie z. B. Sprach- und Regionalpräferenzen oder Ihren Benutzernamen und Ihr Passwort, so dass sie beim nächsten Aufruf der Seite automatisch abgerufen werden können, was zu einer insgesamt besseren Leistung der Website führt.</a>`;
    document.getElementById("ThirdPartyHeader").innerText = `Drittanbieter Inhalte`;
    document.getElementById("ThirdPartyText").innerHTML = `<a>Drittanbieter Inhalte umfassen eingebettete Videos, Widgets, Bilder oder andere Arten von Inhalten Dritter. Wenn diese Funktion aktiviert ist, wird eine Verbindung zu anderen Servern hergestellt und externe Inhalte werden geladen. Einige Inhalte werden möglicherweise nicht von Projekt City erstellt oder verwaltet. Diese Funktion ist standardmäßig deaktiviert, um Ihre Privatsphäre zu schützen.</a>`;
    document.getElementById("marketingAndAdvertisementHeader").innerText = `Marketing und Werbung`;
    document.getElementById("marketingAndAdvertisementText").innerHTML = `<a>Marketing-Cookies werden von uns und unseren Drittanbietern hauptsächlich zu Werbezwecken verwendet. Wenn diese Funktion aktiviert ist, werden Ihre Online-Aktivitäten nachverfolgt, um dir personalisierte, relevante, aussagekräftige und angemessene Werbung zu liefern und zu verhindern, dass du dieselbe Werbung mehrfach siehst. Auf diese Weise können wir feststellen, wie effizient Werbekampagnen sind, sowohl für unsere eigenen Dienste als auch für andere Websites. Alle Daten werden anonymisiert an die Werbepartner weitergegeben und sind nicht nachverfolgbar.</a>`;
    document.getElementById("unclassifiedHeader").innerText = `Nicht klassifizierte Cookies`;
    document.getElementById("unclassifiedText").innerHTML = `<a>Nicht klassifizierte Cookies sind Cookies, die keiner bestimmten Kategorie oder Klasse zugeordnet werden können, entweder weil sie zu irrelevant sind oder sich nicht lohnen, sie zu klassifizieren. Dennoch arbeiten wir daran, alle Cookies so gut wie möglich zu klassifizieren.</a>`;
    document.getElementById("cookieSaveChanges").innerHTML = `<div class="cb-footer-btn-inner"><a>Speichern und Schließen</a></div>`;
    document.getElementById("acceptCookiesAndCloseBanner").innerHTML = `<div class="cb-footer-filled-btn-inner"><a>Akzeptiere alle Cookies</a></div>`;
}

function updateToEnglish() {
    const footerContent = document.querySelector(".dt-footer-content .dt-gf-div-lines");
    const divLines = Array.from(footerContent.querySelectorAll(".dt-gf-div-line"));
    // Change the texts
    document.querySelector(".dt-download-project-information-text-bottom").innerHTML = `<a>by itsmarian</a>`;
    document.getElementById("download-type").innerText = `Type`;
    document.getElementById("download-date").innerText = `Date`;
    document.getElementById("download-size").innerText = `Size`;
    document.getElementById("mb-download-type").innerText = `Type`;
    document.getElementById("mb-download-size").innerText = `Size`;
    document.getElementById("release-date-v=5.0").innerText = `Jaunary 1, 2025`;
    document.getElementById("size-v=5.0").innerText = `28.1 MB`;
    document.getElementById("mb-size-v=5.0").innerText = `28.1 MB`;
    document.getElementById("redirect-v5-0").title = "Download V5.0";
    document.getElementById("mb-redirect-v5-0").title = "Download V5.0";
    document.getElementById("release-date-v=4.2").innerText = `November 1, 2024`;
    document.getElementById("size-v=4.2").innerText = `15.7 MB`;
    document.getElementById("mb-size-v=4.2").innerText = `15.7 MB`;
    document.getElementById("redirect-v4-2").title = "Download V4.2";
    document.getElementById("mb-redirect-v4-2").title = "Download V4.2";
    document.getElementById("release-date-v=4.1").innerText = `March 19, 2024`;
    document.getElementById("size-v=4.1").innerText = `14.0 MB`;
    document.getElementById("mb-size-v=4.1").innerText = `14.0 MB`;
    document.getElementById("redirect-v4-1").title = "Download V4.1";
    document.getElementById("mb-redirect-v4-1").title = "Download V4.1";
    document.getElementById("release-date-v=4.0").innerText = `February 5, 2024`;
    document.getElementById("size-v=4.0").innerText = `12.9 MB`;
    document.getElementById("mb-size-v=4.0").innerText = `12.9 MB`;
    document.getElementById("redirect-v4-0").title = "Download V4.0";
    document.getElementById("mb-redirect-v4-0").title = "Download V4.0";
    document.getElementById("release-date-v=3.0").innerText = `Jaunary 10, 2024`;
    document.getElementById("size-v=3.0").innerText = `11.3 MB`;
    document.getElementById("mb-size-v=3.0").innerText = `11.3 MB`;
    document.getElementById("redirect-v3-0").title = "Download V3.0";
    document.getElementById("mb-redirect-v3-0").title = "Download V3.0";
    document.getElementById("release-date-v=2.0").innerText = `December 31, 2023`;
    document.getElementById("size-v=2.0").innerText = `20.7 MB`;
    document.getElementById("mb-size-v=2.0").innerText = `20.7 MB`;
    document.getElementById("redirect-v2-0").title = "Download V2.0";
    document.getElementById("mb-redirect-v2-0").title = "Download V2.0";
    document.getElementById("release-date-v=1.1").innerText = `December 28, 2023`;
    document.getElementById("size-v=1.1").innerText = `12.4 MB`;
    document.getElementById("mb-size-v=1.1").innerText = `12.4 MB`;
    document.getElementById("redirect-v1-1").title = "Download V1.1";
    document.getElementById("mb-redirect-v1-1").title = "Download V1.1";
    document.getElementById("release-date-v=1.0").innerText = `December 28, 2023`;
    document.getElementById("size-v=1.0").innerText = `12.1 MB`;
    document.getElementById("mb-size-v=1.0").innerText = `12.1 MB`;
    document.getElementById("redirect-v1-0").title = "Download V1.0";
    document.getElementById("mb-redirect-v1-0").title = "Download V1.0";
    document.querySelector(".dt-tooltiptext").innerText = `You reached the end of this site!`;
    // Footer
    if (divLines.length < 3) return;
    const [firstLine, secondLine, thirdLine] = divLines;
    firstLine.innerHTML = `<a class="nodecoration" href="https://forms.office.com/r/d4XTwwAq90?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=applyasbuilder" target="_blank">Apply as builder</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/Lfg3QhAD8r?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=suggestimprovement" target="_blank">Suggest improvement</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/sMmaBj26Tf?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=ratewebsiteversions" target="_blank">Rate website versions</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/n1mqLir7cK?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=ratedesignandtext" target="_blank">Rate design & text</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://bit.ly/ProjektCityLinktree?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=socials" target="_blank">Socials</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" id="shareButton" style="cursor: pointer;">Share</a>`;
    secondLine.innerHTML = `<a class="nodecoration" href="/legal/accessibility-statement?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=accessibilitystatement" target="_blank">Accessibility statement</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/application-guidelines?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=applicationguidelines" target="_blank">Application Guidelines</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/advertisement-terms?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=advertisementterms" target="_blank">Advertisement Terms</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/eula?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=eula" target="_blank">EULA</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/github-privacy?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=githubprivacypolicy" target="_blank">GitHub Privacy Policy</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/imprint?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=imprint" target="_blank">Imprint</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/privacy?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=privacypolicy" target="_blank">Privacy Policy</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/terms?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=termsofuse" target="_blank">Terms of use</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/use-our-world?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=useourworld" target="_blank">Use Our World</a>`;
    thirdLine.style.display = "block";
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
        document.querySelector(".dt-gf-div-copy").innerHTML = `<a>&copy; 2025 Projekt City Ltd.</a><br><a>All rights reserved!!</a><br><div style="font-size: 20px;"><a>Made with ❤️ in&nbsp;</a><a style="color: rgb(0, 0, 0); --darkreader-inline-color: var(--darkreader-text-000000, #e8e6e3);" data-darkreader-inline-color="">GE</a><a style="color: rgb(221, 0, 0); --darkreader-inline-color: var(--darkreader-text-dd0000, #ff3131);" data-darkreader-inline-color="">RMA</a><a style="color: rgb(255, 206, 0); --darkreader-inline-color: var(--darkreader-text-ffce00, #ffd31a);" data-darkreader-inline-color="">NY</a></div>`;               
    } else {
        document.querySelector(".dt-gf-div-copy").innerHTML = `<a>&copy; © 2025 Projekt City Ltd. | All rights reserved!</a><br><div style="font-size: 20px;"><a>Made with ❤️ in&nbsp;</a><a style="color: rgb(0, 0, 0); --darkreader-inline-color: var(--darkreader-text-000000, #e8e6e3);" data-darkreader-inline-color="">GE</a><a style="color: rgb(221, 0, 0); --darkreader-inline-color: var(--darkreader-text-dd0000, #ff3131);" data-darkreader-inline-color="">RMA</a><a style="color: rgb(255, 206, 0); --darkreader-inline-color: var(--darkreader-text-ffce00, #ffd31a);" data-darkreader-inline-color="">NY</a></div>`;               
    }
    document.getElementById("cookieChooserHeader").innerHTML = `Projekt City benötigt deine Einverständis`;
    document.getElementById("neccessarryCookiesHeader").innerText = `Notwendige Cookies`;
    document.getElementById("neccessarryCookiesText").innerHTML = `<a>Cookies sind kleine Textdateien, die an den Browser, den Desktop-Client oder das Gerät des Nutzers gesendet werden, wenn dieser die Website besucht. Sie werden vom Gerät automatisch bereitgestellt, wenn die Seite erneut besucht wird. Cookies werden meist von Websites verwendet, um die Nutzererfahrung zu verbessern, die Leistung der Website zu steigern und - falls aktiviert - personalisierte Inhalte anzuzeigen.</a><br><a>Das Gesetz besagt, dass Unternehmen notwendige Cookies automatisch und ohne Zustimmung des Nutzers auf den Geräten speichern dürfen, wenn sie für den Betrieb der Website erforderlich sind.</a><br><a>Für alle anderen Arten von Cookies, wie z. B. Analyse und Statistik, Einstellungen und Personalisierung, Marketing, Werbung und alle anderen Cookies, ist die Zustimmung des Nutzers erforderlich.</a><br><a>Du kannst dein Cookie-Einstellungen jederzeit ändern. Gehe dazu zum Ende einer unserer Seiten, klicke auf „Cookie-Einstellungen ändern“ und wählen deine bevorzugten Einstellungen.</a>`;
    document.getElementById("statisticAndAnalyticsHeader").innerText = `Statistik- und Analyse-Cookies`;
    document.getElementById("statisticAndAnalyticsText").innerHTML = `<a>Statistik- und Analyse-Cookies, auch bekannt als „Performance-Cookies“, helfen der Website zu verfolgen, wie die Nutzer mit der Website interagieren, welcher Link von ihnen angeklickt wird, wie lange sie sie besuchen, welche Seiten besonders beliebt sind und von welchen Seiten die Nutzer kommen. Diese Informationen werden anonym gesammelt und können nicht zurückverfolgt werden. Sie helfen uns, unsere Website und die Nutzer und ihr Verhalten besser zu verstehen, um ein besseres Erlebnis zu bieten.</a>`;
    document.getElementById("preferencesAndPersonalizationHeader").innerText = `Präferenzen und Personalisierung`;
    document.getElementById("preferencesAndPersonalizationText").innerHTML = `<a>Präferenz-Cookies sind Cookies, die es der Website ermöglichen, sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben, wie z. B. Sprach- und Regionalpräferenzen oder Ihren Benutzernamen und Ihr Passwort, so dass sie beim nächsten Aufruf der Seite automatisch abgerufen werden können, was zu einer insgesamt besseren Leistung der Website führt.</a>`;
    document.getElementById("ThirdPartyHeader").innerText = `Drittanbieter Inhalte`;
    document.getElementById("ThirdPartyText").innerHTML = `<a>Drittanbieter Inhalte umfassen eingebettete Videos, Widgets, Bilder oder andere Arten von Inhalten Dritter. Wenn diese Funktion aktiviert ist, wird eine Verbindung zu anderen Servern hergestellt und externe Inhalte werden geladen. Einige Inhalte werden möglicherweise nicht von Projekt City erstellt oder verwaltet. Diese Funktion ist standardmäßig deaktiviert, um Ihre Privatsphäre zu schützen.</a>`;
    document.getElementById("marketingAndAdvertisementHeader").innerText = `Marketing und Werbung`;
    document.getElementById("marketingAndAdvertisementText").innerHTML = `<a>Marketing-Cookies werden von uns und unseren Drittanbietern hauptsächlich zu Werbezwecken verwendet. Wenn diese Funktion aktiviert ist, werden Ihre Online-Aktivitäten nachverfolgt, um dir personalisierte, relevante, aussagekräftige und angemessene Werbung zu liefern und zu verhindern, dass du dieselbe Werbung mehrfach siehst. Auf diese Weise können wir feststellen, wie effizient Werbekampagnen sind, sowohl für unsere eigenen Dienste als auch für andere Websites. Alle Daten werden anonymisiert an die Werbepartner weitergegeben und sind nicht nachverfolgbar.</a>`;
    document.getElementById("unclassifiedHeader").innerText = `Nicht klassifizierte Cookies`;
    document.getElementById("unclassifiedText").innerHTML = `<a>Nicht klassifizierte Cookies sind Cookies, die keiner bestimmten Kategorie oder Klasse zugeordnet werden können, entweder weil sie zu irrelevant sind oder sich nicht lohnen, sie zu klassifizieren. Dennoch arbeiten wir daran, alle Cookies so gut wie möglich zu klassifizieren.</a>`;
    document.getElementById("cookieSaveChanges").innerHTML = `<div class="cb-footer-btn-inner"><a>Save and close</a></div>`;
    document.getElementById("acceptCookiesAndCloseBanner").innerHTML = `<div class="cb-footer-filled-btn-inner"><a>Accept all cookies</a></div>`;
    document.getElementById("CookieChanger").innerHTML = `Change cookie preferences`;
    document.getElementById("SendComplaint").innerHTML = `Send a complaint`;
}