document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        var language = localStorage.getItem('language');

        if (language === "de_DE") {
            console.log("[LANG] set-internal-langue=de_DE");
            document.getElementById("german-de_DE").style.display = "block";
            document.getElementById("english-en_US").style.display = "none";
            updateToGerman();
        }
        if (language === "en_US") {
            console.log("[LANG] set-internal-langue=en_US");
            document.getElementById("english-en_US").style.display = "block";
            document.getElementById("german-de_DE").style.display = "none";
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
    document.getElementById("dt-dwnld-page-th-category").innerText = 'Kategorie';
    document.getElementById("dt-download-uploaded").innerText = 'Hochgeladen';
    document.getElementById("dt-download-size").innerText = 'Größe';
    document.getElementById("dt-download-version").innerText = 'Version';
    document.getElementById("dt-download-filename").innerText = 'Dateigröße';
    document.querySelector(".dt-dwnld-changelog").innerHTML = `<div class="dt-dwnld-cl-header"><h3 style="font-weight: 400; text-decoration: underline;">ChangeLog</h3></div><div class="dt-dwnld-cl-version"><h4 style="text-decoration: underline;">Update V5.0</h4></div><div class="dt-dwnld-cl-changelog"><p>Änderungen:</p><ul class="dt-dwnld-cl-ul"><li>[FLUGHAFEN] Treppe für einsteigende Passagiere hinzugefügt</li><li>[FLUGHAFEN] Ticket-Checker hinzugefügt</li><li>[FLUGHAFEN] Duty-Free-Shops hinzugefügt</li><li>[FLUGHAFEN] Fast Food Restaurant hinzugefügt</li><li>[FLUGHAFEN] Security Station hinzugefügt</li><li>[FLUGHAFEN] Shops hinzugefügt</li><li>[FLUGHAFEN] Ticket Automat hinzugefügt</li><li>[FLUGHAFEN] Boden im großen Flugzeug befestigt</li><li>[FLUGHAFEN] Weiterentwickelt</li><li>[FLUGHAFEN] Boden im Flughafen aktualisiert</li><li>[FLUGHAFEN] Licht Commands aktualisiert</li><li>[FLUGHAFEN] Route zum Aiport festgelegt (Kurven) und Buslinie hinzugefügt</li><li>[FLUGHAFEN] Terraforming am Flughafen und auf der Straße → Keine Luft mehr unter dem Flughafen</li><li>[STADT] Großer Baum in der Mitte befestigt (Weizen, Setzlinge und Seerosenblätter können nicht zerstört werden)</li><li>[STADT] Neue Autos auf der Autobahn und Reparatur alter Autos</li><li>[STADT] Hügel mit Tunnel komplett neu gestaltet/li><li>[STADT] Automatisch gespawnte Dörfer entfernt</li><li>[STADT] Perlenshop entfernt</li><li>[STADT] Plizei Station entfernt</li><li>[STADT] Restaurant gebaut</li><li>[STADT] Strommasten aktualisiert</li><li>[STADT] Parkhaus und Feuerwache entfernt</li><li>[STADT] Straßenschilder aktualisiert</li><li>[MAIN] Autobahn fortgesetzt und fertiggestellt (Autos kommen bald)</li><li>[MAIN] Kurve auf der Autobahn aktualisiert</li><li>[MAIN] Autobahn finished</li><li>[MAIN] Es wurden neue Wälder hinzugefügt</li><li>[MAIN] Obsidian auf der Straße repariert</li><li>[MAIN] Präfix geändert zu: =====[PC]=====</li><li>[MAIN] Restaurant fertiggestellt</li><li>[MAIN] Neue U-Bahn-Station hinzugefügt und alte Station erweitert</li><li>[MAIN] Redstone-Lampe im Tunnel repariert</li><li>[MAIN] Schilder repariert (unbeschriftete Schilder ersetzt, setblock-Schildbefehle entfernt)</li><li>[MAIN] Straßen repariert (neue Kurven, alle verbundenen Straßen gleich breit gemacht, Mittelspur auf der Autobahn repariert, neue Straßen hinzugefügt)</li><li>[MAIN] Die ganze Karte ist jetzt ohne Fullbright spielbar!</li></ul><div class="placeholder w1000 h20"></div><p>Die nächsten Updates enthalten folgende Änderungen:</p><ul class="dt-dwnld-cl-ul"><li>[V5.0.1] Generelle Verbesserung der Map</li><li>[V5.1] Fliegende Flugzeuge und erweiterter Flughafen</li><li>[V5.2] City Update (Bau aller Häuser, Hinzufügen von Redstone und Power System, und vieles mehr)</li><li>[V5.3] 1.21 Update (Umstellung aller Befehle auf 1.21, Hinzufügen von Leben in der Welt mit Menschen und mehr, Verwendung der neuen Blöcke und Redstone Features)</li></ul><div class="placeholder w1000 h20"></div><a style="font-weight: 400;">WIR WÜNSCHEN EUCH ALLEN EIN FROHES NEUES JAHR!</a></div><div class="placeholder w1150 h30"></div>`;
    document.querySelector(".dt-download-footer-information").innerHTML = `<p>Dieser Link führt dich zu einer Website außerhalb von Projekt City und zu einer externen Website! Projekt City ist nicht verantwortlich für den Datenschutz/die Sicherheit (von Käufen) auf dieser Website</p><p>Projekt City, das Projekt City-Logo und seine Inhalte, Bilder, Videos, Dateien und der Name sind Marken von Projekt City Ltd.</p><p>Diese Datei(en) sind Eigentum von Projekt City Ltd. und dürfen gemäß unserer „Use our World“-Richtlinie nicht weiterverbreitet werden!</p>`;
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
    document.getElementById("dt-dwnld-page-th-category").innerText = 'Category';
    document.getElementById("dt-download-uploaded").innerText = 'Uploaded';
    document.getElementById("dt-download-size").innerText = 'Size';
    document.getElementById("dt-download-version").innerText = 'Version';
    document.getElementById("dt-download-filename").innerText = 'Dateiname';
    document.querySelector(".dt-dwnld-changelog").innerHTML = `<div class="dt-dwnld-changelog"><div class="dt-dwnld-cl-header"><h3 style="font-weight: 400; text-decoration: underline;">ChangeLog</h3></div><div class="dt-dwnld-cl-version"><h4 style="text-decoration: underline;">Update V5.0</h4></div><div class="dt-dwnld-cl-changelog"><p>Changes:</p><ul class="dt-dwnld-cl-ul"><li>[AIRPORT] Added boarding passenger stairs</li><li>[AIRPORT] Added ticket checker</li><li>[AIRPORT] Added duty free shops</li><li>[AIRPORT] Added fast food restaurant</li><li>[AIRPORT] Added security station</li><li>[AIRPORT] Added shops</li><li>[AIRPORT] Added ticket automat</li><li>[AIRPORT] Floor on big plane fixed</li><li>[AIRPORT] Continued developement</li><li>[AIRPORT] Fixed floor on airport</li><li>[AIRPORT] Fixed lightning commands</li><li>[AIRPORT] Route to Aiport fixed (curves) and bus route added</li><li>[AIRPORT] Terraforming at airport and street → No more air under the airport</li><li>[CITY] Big tree in center fixed (wheat, saplings and lily pads can not be destroyed)</li><li>[CITY] Cars added to the highway and old cars fixed</li><li>[CITY] Hill with tunnel completely redone</li><li>[CITY] Natural spawned villages removed</li><li>[CITY] Pearlshop removed</li><li>[CITY] Police station removed</li><li>[CITY] Restaurant built</li><li>[CITY] Power poles fixed</li><li>[CITY] Parking station and fire departement removed</li><li>[CITY] Street signs updated</li><li>[MAIN] Highway continued and finished (cars coming soon)</li><li>[MAIN] Highway curve fixed</li><li>[MAIN] Highway finished</li><li>[MAIN] New forrests have been added</li><li>[MAIN] Obsidian on street fixed</li><li>[MAIN] Prefix changed to: =====[PC]=====</li><li>[MAIN] Restaurant finished</li><li>[MAIN] New Subway Station added and old station expanded</li><li>[MAIN] Redstone Lamp in tunnel fixed</li><li>[MAIN] Signs fixed (unwritten signs replaced, remove setblock sign commands)</li><li>[MAIN] Streets fixed (renewed curves, made every connected street the same width, fixed highway middle lane, added new streets)</li><li>[MAIN] The whole map is now playable without fullbright!</li></ul><div class="placeholder w1000 h20"></div><p>The next update will include:</p><ul class="dt-dwnld-cl-ul"><li>[V5.0.1] General improvement of the map</li><li>[V5.1] Flying planes and Airport</li><li>[V5.2] City Update (Building all houses, adding Redstone and power System, and much more)</li><li>[V5.3] 1.21 Update (changing all commands to 1.21, adding life to the world with humans and more, using the new blocks and Redstone Features)</li></ul><div class="placeholder w1000 h20"></div><a style="font-weight: 400;">WE WISH YOU A HAPPY NEW YEAR!</a></div><div class="placeholder w1150 h30"></div></div>`;
    document.querySelector(".dt-download-footer-information").innerHTML = `<p>This link is taking you to a website outside of Projekt City and to an external site! Projekt City is not responsible for the privacy/security (of purchases) on this site</p><p>Projekt City, the Projekt City logo and its contents, images, videos, file(s) and name are trademarks of Projekt City Ltd.!</p><p>These file(s) are the property of Projekt City Ltd. and may not be redistributed in accordance with our "Use our World" policy!</p>`;
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