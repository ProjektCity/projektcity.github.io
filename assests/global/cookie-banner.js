document.addEventListener("DOMContentLoaded", function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    
    function getStoredConsent(category) {
        return localStorage.getItem(category) === "true" ? "granted" : "denied";
    }

    gtag('consent', 'default', {
        'ad_storage': getStoredConsent('marketingAndAdvertisementCookies'),
        'ad_user_data': getStoredConsent('marketingAndAdvertisementCookies'),
        'ad_personalization': getStoredConsent('marketingAndAdvertisementCookies'),
        'analytics_storage': getStoredConsent('statisticAndAnalyticsCookies'),
        'functionality_storage': 'granted',
        'personalization_storage': getStoredConsent('preferencesAndPersonalizationCookies'),
        'security_storage': getStoredConsent('unclassifiedCookies')
    });

    gtag('consent', 'default', {
        'ad_storage': getStoredConsent('MBmarketingAndAdvertisementCookies'),
        'ad_user_data': getStoredConsent('MBmarketingAndAdvertisementCookies'),
        'ad_personalization': getStoredConsent('MBmarketingAndAdvertisementCookies'),
        'analytics_storage': getStoredConsent('MBstatisticAndAnalyticsCookies'),
        'functionality_storage': 'granted',
        'personalization_storage': getStoredConsent('MBpreferencesAndPersonalizationCookies'),
        'security_storage': getStoredConsent('MBunclassifiedCookies')
    });
    
    if (localStorage.getItem('cookiesAccepted')) {
        document.getElementById("cookie-banner").style.display = "none";
        document.querySelector(".mb-cookie-banner").style.display = "none";
        document.getElementById("mb-cookie-selector").style.display = "none";
        console.log("User already accepted cookies. Cookie banner removed.");
    } else {
        console.log("NO COOKIES!");
    }

    function updateCheckboxesFromStorage() {
        const categories = [
            "statisticAndAnalyticsCookies",
            "preferencesAndPersonalizationCookies",
            "marketingAndAdvertisementCookies",
            "unclassifiedCookies",
            "MBstatisticAndAnalyticsCookies",
            "MBpreferencesAndPersonalizationCookies",
            "MBmarketingAndAdvertisementCookies",
            "MBunclassifiedCookies"
        ];
        categories.forEach(category => {
            const storedValue = localStorage.getItem(category);
            if (storedValue === "true") {
                document.getElementById(category).checked = true;
            } else {
                document.getElementById(category).checked = false;
            }
        });
    }
    
    setInterval(() => {
        const categories = [
            "statisticAndAnalyticsCookies",
            "preferencesAndPersonalizationCookies",
            "marketingAndAdvertisementCookies",
            "unclassifiedCookies",
            "MBstatisticAndAnalyticsCookies",
            "MBpreferencesAndPersonalizationCookies",
            "MBmarketingAndAdvertisementCookies",
            "MBunclassifiedCookies"
        ];
        categories.forEach(category => {
            const checkbox = document.getElementById(category);
            if (checkbox) {
                localStorage.setItem(category, checkbox.checked);
            }
        });
    }, 1000);

    updateCheckboxesFromStorage();
});


// Set device type
function getUserDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent)) {
       return "mobile";
    } else {
        return "desktop";
    }
}

document.querySelector(".cb-close-btn").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = 'none';
    document.getElementById("cookie-banner").style.display = "none";
    gtag('consent', 'update', {
        'functionality_storage': 'granted',
    });
    console.log("New user did not accept cookies. Only granted functional cookies!");
});

function acceptCookies() {
    document.querySelector('.cookie-banner').style.display = 'none';
    document.querySelector('.cookie-banner').style.display = "none";
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
    // Desktop Checkboxes
    document.getElementById("statisticAndAnalyticsCookies").checked = "true";
    document.getElementById("preferencesAndPersonalizationCookies").checked = "true";
    document.getElementById("marketingAndAdvertisementCookies").checked = "true";
    document.getElementById("unclassifiedCookies").checked = "true";
    // Mobile Checkboxes
    document.getElementById("MBstatisticAndAnalyticsCookies").checked = "true";
    document.getElementById("MBpreferencesAndPersonalizationCookies").checked = "true";
    document.getElementById("MBmarketingAndAdvertisementCookies").checked = "true";
    document.getElementById("MBunclassifiedCookies").checked = "true";
    // Enable Scroll
    document.documentElement.style.overflowY = "scroll";
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
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
});

document.getElementById("cookieSaveChanges").addEventListener("click", function() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.getElementById("cookie-banner").style.display = "none";
});

document.getElementById("acceptCookiesAndCloseBanner").addEventListener("click", function() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.getElementById("cookie-banner").style.display = "none";
    acceptCookies();
});

// Cookie selector/chooser
document.getElementById("statisticAndAnalyticsCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("statisticAndAnalyticsCookies");
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
    var checkbox = document.getElementById("preferencesAndPersonalizationCookies");
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
    document.documentElement.style.overflowY = "hidden";
    document.getElementById("mb-cookie-selector").style.display = "block";
    document.querySelector(".cookie-selector-background").style.display = "block";
});

document.getElementById("MBcookieSaveChanges").addEventListener("click", function() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("mb-cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.querySelector(".mb-cookie-banner").style.display = "none";
});

function MBacceptCookiesAndCloseBanner() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("mb-cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.querySelector(".mb-cookie-banner").style.display = "none";
    acceptCookies();
};

document.getElementById("mbCookieCloser").addEventListener("click", function() {
    document.getElementById("mb-cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";
});

document.getElementById("MBstatisticAndAnalyticsCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("MBstatisticAndAnalyticsCookies");
    
    gtag('consent', 'update', {
        'analytics_storage': checkbox.checked ? 'granted' : 'denied'
    });

    console.log("'analytics_storage' " + (checkbox.checked ? "granted" : "denied") + "!");

    checkbox.checked = checkbox.checked; // Erzwingt UI-Update
});

document.getElementById("MBpreferencesAndPersonalizationCookies").addEventListener("change", function() {
    var checkbox = document.getElementById("MBpreferencesAndPersonalizationCookies");
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

// Cookie Changer
document.getElementById("CookieChanger").addEventListener("click", function() {
    const deviceType = getUserDeviceType();

    if (deviceType === "mobile") {
        document.documentElement.style.overflowY = "hidden";
        document.querySelector(".cookie-selector-background").style.display = "block";
        document.getElementById("mb-cookie-selector").style.display = "block";
        document.getElementById("cookie-banner").style.display = "none";
    } else {
        document.documentElement.style.overflowY = "hidden";
        document.querySelector(".cookie-selector-background").style.display = "block";
        document.getElementById("cookie-selector").style.display = "block";
        document.getElementById("mb-cookie-banner").style.display = "none";
    }
});