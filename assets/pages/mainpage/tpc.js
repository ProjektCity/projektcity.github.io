document.addEventListener("DOMContentLoaded", function() {
    
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent)) {
        document.querySelector(".mb-trailer-container").style.display = "flex";
    } else {
        document.querySelector(".dt-trailer-container").style.display = "flex";
    }

    const language = localStorage.getItem('language');
    const displayThirdPartyContent = localStorage.getItem("displayThirdPartyContent");
    if (displayThirdPartyContent === "granted") {
        document.querySelector(".dt-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="711" height="400" frameborder="0" allowfullscreen></iframe>`;
        document.querySelector(".mb-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="300" height="169" frameborder="0" playsinline playsInline allowfullscreen></iframe>`;
    } else {
        if (language === "de_DE") {
            document.querySelector(".dt-videocontainer").innerHTML = `<div class="cookie-preferences-information-container"><h4>Dieses Video kann nicht abgespielt werden</h4><a>Deine Cookie-Einstellungen erlauben es nicht, YouTube-Videos abzuspielen oder Links und Inhalte Dritter zu laden. Um das Video anzusehen, ändere deine Cookie-Einstellungen oder&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">schaue das Video in einem separaten Tab</a><a>.</a></div>`;
            document.querySelector(".mb-videocontainer").innerHTML = `<div class="mb-cookie-preferences-information-container"><a>Deine Cookie-Einstellungen erlauben es nicht, YouTube-Videos abzuspielen oder Links und Inhalte Dritter zu laden. Um das Video anzusehen, ändere deine Cookie-Einstellungen oder&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">schaue das Video in einem separaten Tab</a><a>.</a></div>`;
        } if (language === "en_US") {
            document.querySelector(".dt-videocontainer").innerHTML = `<div class="cookie-preferences-information-container"><h4>This video can not be displayed</h4><a>Your cookie preferences do not allow YouTube videos to be played or third-party links and content to be loaded. To watch the video, change your cookie preferences or&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">watch the video in a separate tab</a><a>.</a></div>`;
            document.querySelector(".mb-videocontainer").innerHTML = `<div class="mb-cookie-preferences-information-container"><a>Your cookie preferences do not allow YouTube videos to be played or third-party links and content to be loaded. To watch the video, change your cookie preferences or&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">watch the video in a separate tab</a><a>.</a></div>`;
        }
    }
});

if (localStorage.getItem("displayThirdPartyContent") == "granted") {
    document.querySelector(".mb-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="300" height="169" frameborder="0" playsinline playsInline allowfullscreen></iframe>`;
    document.querySelector(".dt-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="711" height="400" frameborder="0" allowfullscreen></iframe>`;
}

document.getElementById("displayThirdPartyContent").addEventListener("click", function() {
    const checkbox = document.getElementById("displayThirdPartyContent");
    const language = localStorage.getItem('language');
    if (checkbox.checked) {
        document.querySelector(".mb-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="300" height="169" frameborder="0" playsinline playsInline allowfullscreen></iframe>`;
        document.querySelector(".dt-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="711" height="400" frameborder="0" allowfullscreen></iframe>`;
    } else {
        if (language === "de_DE") {
            document.querySelector(".dt-videocontainer").innerHTML = `<div class="cookie-preferences-information-container"><h4>Dieses Video kann nicht abgespielt werden</h4><a>Deine Cookie-Einstellungen erlauben es nicht, YouTube-Videos abzuspielen oder Links und Inhalte Dritter zu laden. Um das Video anzusehen, ändere deine Cookie-Einstellungen oder&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">schaue das Video in einem separaten Tab</a><a>.</a></div>`;
            document.querySelector(".mb-videocontainer").innerHTML = `<div class="mb-cookie-preferences-information-container"><a>Deine Cookie-Einstellungen erlauben es nicht, YouTube-Videos abzuspielen oder Links und Inhalte Dritter zu laden. Um das Video anzusehen, ändere deine Cookie-Einstellungen oder&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">schaue das Video in einem separaten Tab</a><a>.</a></div>`;
        } if (language === "en_US") {
            document.querySelector(".dt-videocontainer").innerHTML = `<div class="cookie-preferences-information-container"><h4>This video can not be displayed</h4><a>Your cookie preferences do not allow YouTube videos to be played or third-party links and content to be loaded. To watch the video, change your cookie preferences or&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">watch the video in a separate tab</a><a>.</a></div>`;
            document.querySelector(".mb-videocontainer").innerHTML = `<div class="mb-cookie-preferences-information-container"><a>Your cookie preferences do not allow YouTube videos to be played or third-party links and content to be loaded. To watch the video, change your cookie preferences or&nbsp;</a><a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">watch the video in a separate tab</a><a>.</a></div>`;
        }
    }
});