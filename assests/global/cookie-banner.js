document.querySelector(".cb-close-btn").addEventListener("click", function() {
    document.querySelector('.cookie-banner').style.display = 'none';
    document.querySelector('.cookie-banner').remove();
    console.log("New user did not accept cookies!")
});

document.addEventListener("DOMContentLoaded", function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied',
        'security_storage': 'denied'
    });
});

if (localStorage.getItem('cookiesAccepted')) {
    document.querySelector('.cookie-banner').remove();
    console.log("User already accepted cookies. Cookie banner removed.");
}

function acceptCookies() {
    document.querySelector('.cookie-banner').style.display = 'none';
    document.querySelector('.cookie-banner').remove();
    localStorage.setItem('cookiesAccepted', 'true');
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted',
        'security_storage': 'granted'
    });
    console.log("User accepted all cookies: set the values 'ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage' and 'security_storage' to granted!")
}

function openCookieMenu() {
    document.getElementById("cookie-selector").style.display = "block";
    document.querySelector(".cookie-selector-background").style.display = "block";
    document.documentElement.style.overflowY = "hidden";
}

// Banner Options
document.getElementById("acceptCookies").addEventListener("click", function() {
    acceptCookies();
});

document.getElementById("cookieManager").addEventListener("click", function() {
    openCookieMenu();
});

// Menu Options
document.querySelector(".cookie-bottom-close-button").addEventListener("click", function() {
    document.getElementById("cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
});

document.getElementById("cookieSaveChanges").addEventListener("click", function() {
    document.getElementById("cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("cookie-banner").remove();
});

document.getElementById("acceptCookiesAndCloseBanner").addEventListener("click", function() {
    document.getElementById("cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
    acceptCookies()
    document.getElementById("cookie-banner").remove();
});

// ------------------------------------------------------

// Cookie selector/chooser

// UI
window.onload = function() {
    document.getElementById("statisticAndAnalyticsCookies").addEventListener('change', statisticAndAnalyticsCookies);
    document.getElementById("preferencesAndPersonalizationCookies").addEventListener('change', preferencesAndPersonalizationCookies);
    document.getElementById("marketingAndAdvertisementCookies").addEventListener('change', marketingAndAdvertisementCookies);
    document.getElementById("unclassifiedCookies").addEventListener('change', unclassifiedCookies);

    statisticAndAnalyticsCookies({target: document.getElementById("statisticAndAnalyticsCookies")});
    preferencesAndPersonalizationCookies({target: document.getElementById("preferencesAndPersonalizationCookies")});
    marketingAndAdvertisementCookies({target: document.getElementById("marketingAndAdvertisementCookies")});
    unclassifiedCookies({target: document.getElementById("unclassifiedCookies")});
}

function statisticAndAnalyticsCookies(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
        console.log("'analytics_storage' granted!");
    } else {
        gtag('consent', 'update', {
            'analytics_storage': 'denied'
        });
        console.log("'analytics_storage' denied!");
    }
}

function preferencesAndPersonalizationCookies(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        gtag('consent', 'update', {
            'personalization_storage': 'granted'
        });
        console.log("'analytics_storage' and 'personalization_storage' granted!");
    } else {
        gtag('consent', 'update', {
            'personalization_storage': 'denied'
        });
        console.log("'analytics_storage' and 'personalization_storage' denied!");
    }
}

function marketingAndAdvertisementCookies(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
        });
        console.log("'ad_storage', 'ad_user_data' and 'ad_personalization' granted!");
    } else {
        gtag('consent', 'update', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
        });
        console.log("'ad_storage', 'ad_user_data' and 'ad_personalization' denied!");
    }
}

function unclassifiedCookies(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        gtag('consent', 'update', { 
            'security_storage': 'granted',
        });
        console.log("'security_storage' granted!");
    } else {
        gtag('consent', 'update', { 
            'security_storage': 'denied',
        });
        console.log("'security_storage' denied!");
    }
}