document.addEventListener("DOMContentLoaded", function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'denied'
    });
    
    if (localStorage.getItem('cookiesAccepted')) {
        document.getElementById("cookie-banner").style.display = "none";
        document.getElementById("cookie-banner").remove();
        document.querySelector(".mb-cookie-banner").style.display = "none";
        document.getElementById("mb-cookie-selector").style.display = "none";
        console.log("User already accepted cookies. Cookie banner removed.");
    } else {
        console.log("NO COOKIES!")
    };
});

document.querySelector(".cb-close-btn").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = 'none';
    document.getElementById("cookie-banner").remove();
    gtag('consent', 'update', {
        'functionality_storage': 'granted',
    });
    console.log("New user did not accept cookies. Only granted functional cookies!")
});

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
    document.getElementById("neccessarryCookies").checked = true;
    document.getElementById("statisticAndAnalyticsCookies").checked = true;
    document.getElementById("preferencesAndPersonalizationCookies").checked = true;
    document.getElementById("marketingAndAdvertisementCookies").checked = true;
    document.getElementById("unclassifiedCookies").checked = true;
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
    document.getElementById("cookie-selector").style.display = "none";;
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("cookie-banner").remove();
});

document.getElementById("acceptCookiesAndCloseBanner").addEventListener("click", function() {
    document.getElementById("cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("cookie-banner").remove();
    acceptCookies();
});

// Cookie selector/chooser
document.getElementById("statisticAndAnalyticsCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("statisticAndAnalyticsCookies")
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
});

document.getElementById("preferencesAndPersonalizationCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("preferencesAndPersonalizationCookies")
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
});

document.getElementById("marketingAndAdvertisementCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("marketingAndAdvertisementCookies");
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
});

document.getElementById("unclassifiedCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("unclassifiedCookies");
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
});

// Mobile Cookie Banner
document.getElementById("mbCookieOpener").addEventListener("click", function() {
    document.getElementById("mb-cookie-selector").style.display = "block";
    document.querySelector(".cookie-selector-background").style.display = "block";
    document.documentElement.style.overflowY = "hidden";
});

document.getElementById("MBcookieSaveChanges").addEventListener("click", function() {
    document.getElementById("mb-cookie-selector").style.display = "none";;
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
    document.querySelector(".mb-cookie-banner").remove();
});

document.getElementById("MBacceptCookiesAndCloseBanner").addEventListener("click", function() {
    document.getElementById("mb-cookie-selector").style.display = "none";;
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
    document.querySelector(".mb-cookie-banner").remove();
    acceptCookies();
});

document.getElementById("mbCookieCloser").addEventListener("click", function() {
    document.getElementById("mb-cookie-selector").style.display = "none";;
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
})

document.getElementById("MBstatisticAndAnalyticsCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("MBstatisticAndAnalyticsCookies")
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
});

document.getElementById("MBpreferencesAndPersonalizationCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("MBpreferencesAndPersonalizationCookies")
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
});

document.getElementById("MBmarketingAndAdvertisementCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("MBmarketingAndAdvertisementCookies");
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
});

document.getElementById("MBunclassifiedCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("MBunclassifiedCookies");
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
});