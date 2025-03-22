/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 2.6
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log("[BUILD INFO] Release Channel: stable, Build Number: #570, Update date: 03/22/2025")
    // Setting basic Google Tag Manager consent
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied',
        'security_storage': 'denied'
    });

    // Getting values from cache
    var statisticAndAnalyticsCookies = localStorage.getItem('statisticAndAnalyticsCookies');
    var preferencesAndPersonalizationCookies = localStorage.getItem('preferencesAndPersonalizationCookies');
    var displayThirdPartyContent = localStorage.getItem('displayThirdPartyContent');
    var marketingAndAdvertisementCookies = localStorage.getItem('marketingAndAdvertisementCookies');
    var unclassifiedCookies = localStorage.getItem('unclassifiedCookies');
    
    // Setting the values in the cookie selector
    if (statisticAndAnalyticsCookies == "granted") {
        document.getElementById("statisticAndAnalyticsCookies").checked = true;
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
        });
        console.log("set-cookies=analytics_storage_granted");
    }
    if (preferencesAndPersonalizationCookies == "granted") {
        document.getElementById("preferencesAndPersonalizationCookies").checked = true;
        gtag('consent', 'update', {
            'personalization_storage': 'granted',
        });
        console.log("set-cookies=personalization_storage_granted");
    }
    if (displayThirdPartyContent == "granted") {
        document.getElementById("displayThirdPartyContent").checked = true;
        console.log("set-cookies=displayThirdPartyContent_granted");
    }
    if (marketingAndAdvertisementCookies == "granted") {
        document.getElementById("marketingAndAdvertisementCookies").checked = true;
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
        });
        console.log("set-cookies=ad_storage_granted");
        console.log("set-cookies=ad_user_data_granted");
        console.log("set-cookies=ad_personalization_granted");
    }
    if (unclassifiedCookies == "granted") {
        document.getElementById("unclassifiedCookies").checked = true;
        gtag('consent', 'update', {
            'security_storage': 'granted'
        });
        console.log("set-cookies=security_storage_granted");
    }

    // If Cookies have already been accepted, remove the banner
    if (localStorage.getItem('cookiesAccepted')) {
        document.getElementById("cookie-banner").style.display = "none";
        console.log("set-cookies=cookiesAccepted_true, display_desktop_cookie_banner=false");
        document.documentElement.style.overflowY = "scroll";
    }
    else {
        localStorage.setItem('language', 'en_US');
        console.log("loaded-cookies=cookiesAccepted_false, display_desktop_cookie_banner=true");
        document.documentElement.style.overflowY = "hidden";
        document.querySelector(".cookie-banner-dark-background").style.display = "block";
        document.querySelector(".cookie-banner-background").style.display = "block";
        document.getElementById("cookie-banner").style.display = "block";
        document.getElementById("statisticAndAnalyticsCookies").checked = false;
        document.getElementById("preferencesAndPersonalizationCookies").checked = false;
        document.getElementById("displayThirdPartyContent").checked = false;
        document.getElementById("marketingAndAdvertisementCookies").checked = false;
        document.getElementById("unclassifiedCookies").checked = false;
        document.getElementById("english-en_US").style.display = "block";
    }
});

// Defining the function to accept all cookies
function acceptAllCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('language', 'en_US');
    document.documentElement.style.overflowY = "scroll";
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted',
        'security_storage': 'granted'
    });
    // Setting the values in cache
    localStorage.setItem('statisticAndAnalyticsCookies', 'granted');
    localStorage.setItem('preferencesAndPersonalizationCookies', 'granted');
    localStorage.setItem('displayThirdPartyContent', 'granted');
    localStorage.setItem('marketingAndAdvertisementCookies', 'granted');
    localStorage.setItem('unclassifiedCookies', 'granted');
    // Checking checkboxes
    document.getElementById("statisticAndAnalyticsCookies").checked = true;
    document.getElementById("preferencesAndPersonalizationCookies").checked = true;
    document.getElementById("displayThirdPartyContent").checked = true;
    document.getElementById("marketingAndAdvertisementCookies").checked = true;
    document.getElementById("unclassifiedCookies").checked = true;
    // Hiding the background
    document.querySelector(".cookie-banner-dark-background").style.display = "none";
    document.querySelector(".cookie-banner-background").style.display = "none";
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
        // Hiding the cookie selector
        document.getElementById("cookie-banner").style.display = "none";
        console.log("set-cookies=cookiesAccepted_true, display_mobile_cookie_selector=false, display_mobile_cookie_banner=false. Set the values 'ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage', 'security_storage' to 'granted'.");
    } else {
        // Hiding the cookie selector
        document.getElementById("cookie-selector").style.display = "none";
        document.getElementById("cookie-banner").style.display = "none";
        console.log("set-cookies=cookiesAccepted_true, display_desktop_cookie_selector=false, display_desktop_cookie_banner=false. Set the values 'ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage', 'security_storage' to 'granted'.");;
    }
}

// Defining the function to hide cookie selector
function hideCookieSelector() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    document.querySelector(".cookie-banner-dark-background").style.display = "none";
    document.querySelector(".cookie-banner-background").style.display = "none";
    document.getElementById("cookie-selector").style.display = "none";
    document.getElementById("cookie-banner").style.display = "none";
    console.log("display_cookie_selector=false");;
}

// Cookie Selector options
    // Open Cookie Changer Menu in Footer
    document.getElementById("CookieChanger").addEventListener("click", function() {
        document.documentElement.style.overflowY = "hidden";
        document.querySelector(".cookie-banner-dark-background").style.display = "block";
        document.querySelector(".cookie-banner-background").style.display = "block";
        document.getElementById("cookie-selector").style.display = "block";
        document.getElementById("cookie-banner").style.display = "none";
        console.log("display_cookie_selector=true");
    });

    // Cookie Selector: Save changes
    document.getElementById("cookieSaveChanges").addEventListener("click", function() {
        hideCookieSelector();
    });

    // Cookie Selector: Accept all cookies
    document.getElementById("acceptCookiesAndCloseBanner").addEventListener("click", function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.documentElement.style.overflowY = "scroll";
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'granted',
            'security_storage': 'granted'
        });
        // Setting the values in cache
        localStorage.setItem('statisticAndAnalyticsCookies', 'granted');
        localStorage.setItem('preferencesAndPersonalizationCookies', 'granted');
        localStorage.setItem('displayThirdPartyContent', 'granted');
        localStorage.setItem('marketingAndAdvertisementCookies', 'granted');
        localStorage.setItem('unclassifiedCookies', 'granted');
        // Checking checkboxes
        document.getElementById("statisticAndAnalyticsCookies").checked = true;
        document.getElementById("preferencesAndPersonalizationCookies").checked = true;
        document.getElementById("displayThirdPartyContent").checked = true;
        document.getElementById("marketingAndAdvertisementCookies").checked = true;
        document.getElementById("unclassifiedCookies").checked = true;
        // Hiding the background
        document.querySelector(".cookie-banner-dark-background").style.display = "none";
        document.querySelector(".cookie-banner-background").style.display = "none";
        // Hiding the cookie selector
        document.getElementById("cookie-selector").style.display = "none";
        document.getElementById("cookie-banner").style.display = "none";
        console.log("set-cookies=cookiesAccepted_true, display_desktop_cookie_selector=false, display_desktop_cookie_banner=false. Set the values 'ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage', 'security_storage' to 'granted'.");;
        location.reload();
    });

    // Accept all Cookies in Cookie Banner
    document.getElementById("acceptCookies").addEventListener("click", function() {
        acceptAllCookies();
        location.reload();
    });

    // Manage Cookies in Cookie Banner
    document.getElementById("cookieManager").addEventListener("click", function() {
        document.documentElement.style.overflowY = "hidden";
        document.querySelector(".cookie-banner-dark-background").style.display = "block";
        document.querySelector(".cookie-banner-background").style.display = "block";
        document.getElementById("cookie-selector").style.display = "block";
        document.getElementById("cookie-banner").style.display = "none";
        console.log("display_cookie_selector=true");
    });

// Checkbox actions
document.getElementById("statisticAndAnalyticsCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("statisticAndAnalyticsCookies");
    if (checkbox.checked) {
        localStorage.setItem('statisticAndAnalyticsCookies', 'granted');
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
        });
        console.log("Statistic and analytics cookies: Checked");
    } else {
        localStorage.setItem('statisticAndAnalyticsCookies', 'denied');
        gtag('consent', 'update', {
            'analytics_storage': 'denied',
        });
        console.log("Statistic and analytics cookies: Unchecked");
    }
});

// Preferences and Personalization Cookies
document.getElementById("preferencesAndPersonalizationCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("preferencesAndPersonalizationCookies");
    if (checkbox.checked) {
        localStorage.setItem('preferencesAndPersonalizationCookies', 'granted');
        gtag('consent', 'update', {
            'personalization_storage': 'granted',
        });
        console.log("Preferences and personalization cookies: Checked");
    } else {
        localStorage.setItem('preferencesAndPersonalizationCookies', 'denied');
        gtag('consent', 'update', {
            'personalization_storage': 'denied',
        });
        console.log("Preferences and personalization cookies: Unchecked");
    }
});

// Display Third Party Content
document.getElementById("displayThirdPartyContent").addEventListener("change", function() {
    const checkbox = document.getElementById("displayThirdPartyContent");
    if (checkbox.checked) {
        localStorage.setItem('displayThirdPartyContent', 'granted');
        console.log("Display third party content: Checked");
    } else {
        localStorage.setItem('displayThirdPartyContent', 'denied');
        console.log("Display third party content: Unchecked");
    }
});

// Marketing and Advertisement Cookies
document.getElementById("marketingAndAdvertisementCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("marketingAndAdvertisementCookies");
    if (checkbox.checked) {
        localStorage.setItem('marketingAndAdvertisementCookies', 'granted');
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
        });
        console.log("Marketing and advertisement cookies: Checked");
    } else {
        localStorage.setItem('marketingAndAdvertisementCookies', 'denied');
        gtag('consent', 'update', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
        });
        console.log("Marketing and advertisement cookies: Unchecked");
    }
});

// Unclassified Cookies
document.getElementById("unclassifiedCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("unclassifiedCookies");
    if (checkbox.checked) {
        localStorage.setItem('unclassifiedCookies', 'granted');
        gtag('consent', 'update', {
            'security_storage': 'granted'
        });
        console.log("Unclassified cookies: Checked");
    } else {
        localStorage.setItem('unclassifiedCookies', 'denied');
        gtag('consent', 'update', {
            'security_storage': 'denied'
        });
        console.log("Unclassified cookies: Unchecked");
    }
});