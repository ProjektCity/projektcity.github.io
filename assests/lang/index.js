/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 1.5
*/

document.addEventListener('DOMContentLoaded', function() {
    var language = localStorage.getItem('language');

    if (language === "de_DE") {
        console.log("set-internal-langue=de_DE");
        document.getElementById("german-de_DE").style.display = "block";
        document.getElementById("mb-german-de_DE").style.display = "block";
        document.getElementById("english-en_US").style.display = "none";
        document.getElementById("mb-english-en_US").style.display = "none";
        updateToGerman();
    }
    if (language === "en_US") {
        console.log("set-internal-langue=en_US");
        document.getElementById("english-en_US").style.display = "block";
        document.getElementById("mb-english-en_US").style.display = "block";
        document.getElementById("german-de_DE").style.display = "none";
        document.getElementById("mb-german-de_DE").style.display = "none";
    }
});

document.getElementById("english-en_US").addEventListener("click", function() {
    localStorage.setItem('language', 'de_DE');
    document.getElementById("german-de_DE").style.display = "block";
    document.getElementById("english-en_US").style.display = "none";
    console.log("set-internal-langue=de_DE");
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
    console.log("set-internal-langue=de_DE");
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
    console.log("set-internal-langue=en_US");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "English (US), please wait."</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").classList.add("fade-out-animation");
        setTimeout(() => {
            document.getElementById("ui-text-overay").style.display = "none";
            document.getElementById("ui-text-overay").classList.remove("fade-out-animation");
            document.getElementById("ui-content").innerHTML = ``
            location.reload();
        }, 500);
    }, 3000);
});

document.getElementById("mb-german-de_DE").addEventListener("click", function() {
    localStorage.setItem('language', 'en_US');
    document.getElementById("mb-english-en_US").style.display = "block";
    document.getElementById("mb-german-de_DE").style.display = "none";
    console.log("set-internal-langue=en_US");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "English (US), please wait."</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").classList.add("fade-out-animation");
        setTimeout(() => {
            document.getElementById("ui-text-overay").style.display = "none";
            document.getElementById("ui-text-overay").classList.remove("fade-out-animation");
            document.getElementById("ui-content").innerHTML = ``
            location.reload();
        }, 500);
    }, 3000);
});

function updateToGerman() {
    const footerContent = document.querySelector(".dt-footer-content .dt-gf-div-lines");
    const divLines = Array.from(footerContent.querySelectorAll(".dt-gf-div-line"));
    // Change the texts
    document.querySelector(".dt-update-information-notifier-text").innerHTML = `<a>Wir haben Änderungen an unserer Datenschutzrichtlinie, unserer Endbenutzer-Lizenzvereinbarung, unseren Nutzungsbedingungen und unserer Richtlinie zur Nutzung unserer Welt vorgenommen. Diese Änderungen werden am 6. April 2025 in Kraft treten. Bitte informieren Sie sich entsprechend und lesen Sie sich die Änderungen durch, da sie die Nutzung unserer Dienste und Ihrer Daten erklären und sich darauf auswirken könnten, wie Sie unsere Dienste in Zukunft nutzen werden.</a>`;
    document.querySelector(".dt-des-content").innerHTML = `<p>Projekt City ist ein einzigartiges und umfangreiches Minecraft-Projekt, das ohne finanzielle Mittel auskommt und für jedermann kostenlos zu spielen ist. Unser Ziel ist es, eine leicht begehbare Minecraft-Welt für jedermann zu entwickeln, wobei wir viel Wert auf Details und fehlerfreie Arbeit legen. In „Projekt City“ bauen wir eine große Karte mit einer Stadt, einem Flughafen, einem Hotel und vielem mehr mit viel Liebe zum Detail und Präzision. Wir verbessern das Gameplay durch komplizierte Redstone-Kreationen und Befehle.</p><p>Die Karte Projekt City erstreckt sich über eine Breite von 1.164 Metern und eine Länge von 1.833 Metern, was einer Gesamtfläche von 2.133.612 Quadratmetern* entspricht - ein sehr großes Minecraft-Projekt! Unsere derzeitigen Bemühungen konzentrieren sich auf die Entwicklung des Flughafens und des Hotels, die einen großen Teil der Karte einnehmen.</p><p>Alle Versionen nach 4.1 sind auf Englisch und werden es auch bis zur Fertigstellung des Projekts bleiben, da das Hinzufügen weiterer Sprachen ein großes Unterfangen ist. Wir planen, nach Abschluss des Projekts weitere Sprachen wie Deutsch, Französisch und Italienisch einzuführen, um die Zugänglichkeit für mehr Spieler zu verbessern.</p><p>Um detaillierte Informationen bereitzustellen, haben wir eine Website eingerichtet, auf der die Spieler wichtige Details finden und Fragen stellen können. Wir bemühen uns, Anfragen von Spielern schnell und professionell zu bearbeiten, um eine fehlerfreie Welt zu schaffen. Wir ermutigen euch, alle Bugs oder Fehler auf unserem Discord-Server oder im Forum zu melden. Wir sind bestrebt, unsere Professionalität und Fähigkeiten in den Bereichen Gebäude, Redstone und Befehle zu verbessern, um noch professioneller, genauer und besser zu werden!</p><br><p>Vielen Dank für eure Unterstützung,<p>SuffixHD & itsmarian</p>`;
    document.querySelector(".dt-map-content").innerHTML = `<p class="dt-map-content-text">Eine lange Autobahn mit Autos, die zum Flughafen, in die Stadt und zu anderen Orten in der Region führt</p><p class="dt-map-content-arrow">↓</p><p class="dt-map-content-text">Die Autobahn führt zu vielen Orten, wie dem Flughafen, dem Hotel und der Stadt auf der Landkarte, die schnell und einfach erreicht werden können!</p><br><p class="dt-map-content-text">Eine große Stadt mit vielen Häusern, einem riesigen Hotel, in dem sich große Redstone-Konstruktionen, eine Luxussuite, ein öffentliches Schwimmbad, ein Restaurant und andere Aktivitäten befinden</p><p class="dt-map-content-arrow">↓</p><p class="dt-map-content-text">Das Hotel verfügt über eine große Lobby mit Angestellten, ein funktionierendes Keycard-System, ein Restaurant, viele interaktive Lichter, große Zimmer, einen großen öffentlichen Pool und vieles mehr!</p><br><p class="dt-map-content-text">Das Hotel verfügt über eine große Lobby mit Angestellten, ein funktionierendes Keycard-System, ein Restaurant, viele interaktive Lichter, große Zimmer, einen großen öffentlichen Pool und vieles mehr!</p><p class="dt-map-content-arrow">↓</p><p class="dt-map-content-text">Unsere Häuser, der Flughafen, das Hotel, die Stadt, die Autobahn, der Tunnel und die Autos arbeiten mit vielen komplizierten Redstone-Schaltungen und verfügen über einen interaktiven Chat, der dem Spieler ein noch besseres Erlebnis verschaffen und einige Prozesse beschleunigen soll!</p><br><p class="dt-map-content-text">Ein großer Flughafen mit Flugzeugen, Gates, Check-in-Stationen, lokalen Essensbereichen, Duty-Free-Shops, NPCs, Warteräumen, einer Minenwagen-Station und vielem mehr</p><p class="dt-map-content-arrow">↓</p><p class="dt-map-content-text">Der Flughafen verfügt über vier Check-in-Stationen und zahlreiche Geschäfte, in denen Sie Lebensmittel, Snacks, Getränke usw. kaufen können, während Sie auf Ihren Flug warten.</p><p class="dt-map-content-arrow">↓</p><p class="dt-map-content-text">Sie können Ihr Ticket, das Sie am Eingang kaufen können, benutzen, um Ihren Flug zu nehmen.</p><br><p class="dt-map-content-text">Verschiedene Hügel/Berge mit Bäumen, Straßen und einem langen Tunnel, die auf die Natur und die Umwelt Rücksicht nehmen, um das Klima nicht zu schädigen, die Umwelt zu schützen und Luftverschmutzung zu vermeiden.</p><p class="dt-map-content-arrow">↓</p><p class="dt-map-content-text">Große und riesige Wälder mit schönen, detaillierten Bäumen, die auf Hügeln und Bergen positioniert sind, um eine schöne Natur zu gewährleisten.</p>`;
    document.getElementById("image-header").innerHTML = `<h1>Bilder</h1>`
    document.querySelector(".dt-image-slider").innerHTML = `<iframe frameborder="0" height="500" src="assests/iframes/image-slider-de.html" width="100%"></iframe>`;
    document.querySelector(".mb-image-slider").innerHTML = `<iframe frameborder="0" playsinline playsInline height="175" src="assests/iframes/image-slider-mobile-de.html" width="100%"></iframe>`;
    document.getElementById("installwithpython").innerHTML = `<div class="placeholder w350 h20"></div><div class="header1"><h1>Mit Python installieren</h1></div><div class="placeholder w350 h20"></div><div class="dt-downloadwith-container"><a>Du kannst Projekt City ganz einfach automatisch und 100% sicher mit Python installieren (unterstützt bis jetzt nur Windows):</a><div class="placeholder w350 h20"></div><div class="dt-downloadwith-line"><div class="dt-downloadwith-left"><a>#1</a></div><div class="dt-downloadwith-right"><a>Installiere Python für dein Betriebssystem:&nbsp;</a><a class="linkout" href="https://www.python.org/downloads?utm_src=projektcity_mainpage_downloadwith-container&utm_medium=projektcity" target="_blank">https://www.python.org/downloads/</a></div></div><div class="dt-downloadwith-line"><div class="dt-downloadwith-left"><a>#2</a></div><div class="dt-downloadwith-right"><a>Öffne die Eingabeaufforderung und gib folgenden Code ein:</a><br><code>pip install requests</code><br><code>pip install tqdm</code></div></div><div class="dt-downloadwith-line"><div class="dt-downloadwith-left"><a>#3</a></div><div class="dt-downloadwith-right"><a>Lade den&nbsp;</a><a class="linkout" href="assests/files/Python-installer-for-Projekt-City.py" target="_blank">Python Installer für Projekt City</a><a>&nbsp;herunter</a></div></div><div class="dt-downloadwith-line"><div class="dt-downloadwith-left"><a>#4</a></div><div class="dt-downloadwith-right"><a>Öffne deinen Dateiexplorer und führe die Datei aus.</a></div></div><div class="dt-downloadwith-line"><div class="dt-downloadwith-left"><a>#5</a></div><div class="dt-downloadwith-right"><a>Akzeptiere die Bedinungen [Y], wähle die Version, die du herunterladen möchtest aus und drücke [ENTER]</a><br><a>Jetzt lädt das Script die Datei von den CurseForge Servern herunter, extrahiert diese und bewegt sie in deinen Minecraft Ordner.</a><br><a>Wenn der Prozess beendet ist wird eine Erfolgsnachricht angezeigt.</a></div></div><div class="placeholder w350 h20"></div></div>`;
    document.getElementById("faq").innerHTML = `<div class="header1"><h1>Häufig gestellte Fragen</h1></div><div class="placeholder w350 h20"></div><div class="dt-faq-container"><div class="dt-box" onclick="toggleContent('content1', 'triangle1')"><a>Darf ich Projekt City auf einem öffentlichen Server verwenden</a><div class="dt-triangle rotated" id="triangle1"></div></div><div class="dt-content" id="content1"><a>Ja, du darfst unsere Welt auf Servern nutzen, aber du musst auf unser Projekt aufmerksam machen und uns darüber informieren.</a><br><a>Weitere Informationen darüber, wie du unsere Welt nutzen darfst, findest du in unserer&nbsp;</a><a class="linkout" href="https://bit.ly/ProjektCityUseOurWorld?utm_src=projektcity_helpcenter_faq_information_link_linkout&utm_medium=projektcity&return_url=https%3A%2F%2Fprojektcity.github.io%2Fhelpcenter%2Ffaq">Use Our World Policy</a></div><div class="dt-box" onclick="toggleContent('content2', 'triangle2')"><a>Kostet es Geld, die Welt zu spielen?&nbsp;&nbsp;&nbsp;</a><div class="dt-triangle rotated" id="triangle2"></div></div><div class="dt-content" id="content2"><a>Nein, Projekt City ist völlig kostenlos spielbar. Um die Welt spielen zu können, musst du Minecraft vor dem Spielen besitzen/gekauft haben.</a><br></div><div class="dt-box" onclick="toggleContent('content3', 'triangle3')"><a>Ich habe einen Fehler gefunden, was soll ich jetzt machen?</a><div class="dt-triangle rotated" id="triangle3"></div></div><div class="dt-content" id="content3"><a>Zunächst einmal vielen Dank, dass du diesen Fehler gefunden hast. Das Formular zum Melden von Fehlern findest du unter der folgenden Adresse:&nbsp;</a><a class="linkout" href="https://forms.office.com/r/3W4NYS3yaN?utm_src=projektcity_mainpage_faq_information_link_linkout&utm_medium=projektcity&return_url=https%3A%2F%2Fprojektcity.github.io%2Fhelpcenter%2Ffaq" target="_blank">https://forms.office.com/r/3W4NYS3yaN</a><br><a>Öffne den Link, fülle das Formular so genau wie möglich aus und wir werden uns um den Fehler kümmern.</a><br><a>Wenn wir weitere Informationen benötigen, werden wir uns mit dir in Verbindung setzen.</a></div><div class="dt-box" onclick="toggleContent('content4', 'triangle4')"><a>Auf welchen Plattformen findet man&nbsp;Projekt&nbsp;City&nbsp;auch?</a><div class="dt-triangle rotated" id="triangle4"></div></div><div class="dt-content" id="content4"><a>Du kannsst Projekt City auf Instagram, Threads, TikTok und YouTube finden. Und weitere Plattformen werden folgen! Unsere Social-Media-Kanäle findest du unter&nbsp;</a><a class="linkout" href="https://bit.ly/ProjektCityLinktree?utm_src=projektcity_helpcenter_faq_information_link_linkout&utm_medium=projektcity&return_url=https%3A%2F%2Fprojektcity.github.io%2Fhelpcenter%2Ffaq" target="_blank">https://bit.ly/ProjektCityLinktree</a></div><div class="dt-box" onclick="toggleContent('content5', 'triangle5')"><a>Wann wird es ein neues Update für Projekt City geben?</a><div class="dt-triangle rotated" id="triangle5"></div></div><div class="dt-content" id="content5"><a>Unser größtes Update V5.0 ist jetzt verfügbar und wartet darauf, von dir heruntergeladen zu werden!</a><br><a>Du kannst es unter&nbsp;</a><a class="linkout" href="https://www.curseforge.com/minecraft/worlds/projekt-city/files/6043384?utm_src=projektcity_mainpage_faq_information_link_linkout&utm_medium=projektcity&return_url=https%3A%2F%2Fprojektcity.github.io" target="_blank">https://www.curseforge.com/minecraft/worlds/projekt-city/files/6043384</a><a>&nbsp;herunterladen</a></div></div><div class="placeholder w350 h20"></div><div style="font-size: 29px; text-align: center;"><a>Du hast immernoch Fragen?&nbsp;</a><a class="linkout" href="https://bit.ly/ProjektCityHelpcenter?utm_src=projektcity_mainpage_faq_information_link_footer_still-have-questions_linkout&utm_medium=projektcity&return_url=https%3A%2F%2Fprojektcity.github.io" target="_blank">Besuche unser Hilfezentrum!</a></div><div class="placeholder w350 h20"></div>`;
    document.querySelector(".dt-special-information").innerHTML = `<p>Einige Texte wurden mit Hilfe künstlicher Intelligenz erweitert, geprüft, verbessert und verändert. Wichtige Informationen sollten auf ihre Richtigkeit überprüft werden!</p><p>Anbieter, Bilder, Markennamen, Warenzeichen, Produkte, Dienstleistungen und deren Logos sind das Eigentum der jeweiligen Inhaber. Projekt City ist (unter Umständen) nicht mit diesen Anbietern verbunden und ist nicht für deren Inhalte verantwortlich!</p><div class="placeholder w350 h10"></div><p>*Gesamtfläche berechnet aus Breite x Höhe. Die tatsächliche Größe kann variieren (aufgrund von Änderungen). 1 Block = 1 Meter</p><p>Diese Website enthält Links zu anderen Websites und Ressourcen von Drittanbietern, die lediglich der Übersichtlichkeit halber eingefügt wurden. Projekt City hat keine Kontrolle über den Inhalt dieser Websites oder Ressourcen und übernimmt keine Verantwortung für sie oder für Verluste oder Schäden, die aus ihrer Nutzung entstehen können (siehe §3.10 / §3.10.11 in unserer Datenschutzrichtlinie für weitere Informationen)!</p><p>Projekt City, das Projekt City-Logo und seine Inhalte, Bilder, Videos, Dateien und der Name sind Marken von Projekt City Ltd.</p><p>BILDER, DIE NUR ZU ILLUSTRATIONSZWECKEN SIMULIERT WERDEN! Enthält nicht zum Spiel gehörendes Bildmaterial! Das tatsächliche Spielerlebnis/Spielverlauf kann abweichen!</p><p>Bilder simuliert und Sequenzen gekürzt / Einige optionale Elemente müssen möglicherweise gekauft werden!</p><p>Deutsch ist gerade in der Übersetzungs- und Beta-Phase. Einige Texte spiegeln möglicherweise nicht die Originalen Englischen Texte wider und wurden abgeändert/verändert. Eine vollständige Übersetzung folgt zeitnah.</p>`;
    // Footer
    if (divLines.length < 3) return;
    const [firstLine, secondLine, thirdLine] = divLines;
    firstLine.innerHTML = `<a class="nodecoration" href="https://forms.office.com/r/d4XTwwAq90?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=applyasbuilder" target="_blank">Als Builder bewerben</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/Lfg3QhAD8r?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=suggestimprovement" target="_blank">Verbesserung vorschlagen</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/sMmaBj26Tf?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=ratewebsiteversions" target="_blank">Website Versionen bewerten</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://forms.office.com/r/n1mqLir7cK?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=ratedesignandtext" target="_blank">Design & Texte bewerten</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="https://bit.ly/ProjektCityLinktree?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=socials" target="_blank">Socials</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" id="shareButton" style="cursor: pointer;">Teilen</a>`;
    secondLine.innerHTML = `<a class="nodecoration" href="/legal/accessibility-statement?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=accessibilitystatement" target="_blank">Erklärung zur Barrierefreiheit</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/application-guidelines?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=applicationguidelines" target="_blank">Bewerbungs Richtlinien</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/advertisement-terms?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=advertisementterms" target="_blank">Werbebedingungen</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/eula?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=eula" target="_blank">EULA</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/github-privacy?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=githubprivacypolicy" target="_blank">GitHub-Datenschutzerklärung</a><br><a class="nodecoration" href="/legal/imprint?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=imprint" target="_blank">Impressum</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/privacy?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=privacypolicy" target="_blank">Datenschutzerklärung</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/terms?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=termsofuse" target="_blank">Nutzungsbedingungen</a><a>&nbsp;•&nbsp;</a><a class="nodecoration" href="/legal/use-our-world?utm_src=projektcity_footer&utm_medium=projektcity&utm_content=useourworld" target="_blank">Use-Our-World Richtlinie</a>`;
    thirdLine.style.display = "block";
    document.querySelector(".dt-gf-div-copy").innerHTML = `<a>&copy; 2025 Projekt City Ltd. | Alle Rechte vorbehalten!</a><br><div style="font-size: 20px;"><a>Mit ❤️ gemacht in&nbsp;</a><a style="color: #000000;">DEUT</a><a style="color: #DD0000;">SCH</a><a style="color: #FFCE00;">LAND</a></div>`;               
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
}