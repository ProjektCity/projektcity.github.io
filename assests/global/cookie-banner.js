/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 2.2.2
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('%cStop!', 'color: red; font-size: 30px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers only and may contain sensitive links and information. If someone has told you to copy-paste something here to unlock a feature, share certain information or hack an account, this is fraud and your data is at risk!', 'color: red; font-size: 12.5px;');
    console.log("set-internal-langue=en_US")
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
        document.getElementById("MBstatisticAndAnalyticsCookies").checked = true;
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
        });
        console.log("set-cookies=analytics_storage_granted");
    }
    if (preferencesAndPersonalizationCookies == "granted") {
        document.getElementById("preferencesAndPersonalizationCookies").checked = true;
        document.getElementById("MBpreferencesAndPersonalizationCookies").checked = true;
        gtag('consent', 'update', {
            'personalization_storage': 'granted',
        });
        console.log("set-cookies=personalization_storage_granted");
    }
    if (displayThirdPartyContent == "granted") {
        document.getElementById("displayThirdPartyContent").checked = true;
        document.getElementById("MBdisplayThirdPartyContent").checked = true;
        console.log("set-cookies=displayThirdPartyContent_granted");
    }
    if (marketingAndAdvertisementCookies == "granted") {
        document.getElementById("marketingAndAdvertisementCookies").checked = true;
        document.getElementById("MBmarketingAndAdvertisementCookies").checked = true;
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
        document.getElementById("MBunclassifiedCookies").checked = true;
        gtag('consent', 'update', {
            'security_storage': 'granted'
        });
        console.log("set-cookies=security_storage_granted");
    }

    // If Cookies have already been accepted, remove the banner
    if (localStorage.getItem('cookiesAccepted')) {
        document.getElementById("cookie-banner").style.display = "none";
        document.getElementById("mb-cookie-selector").style.display = "none";
        console.log("set-cookies=cookiesAccepted_true, display_desktop_cookie_banner=false");
        document.documentElement.style.overflowY = "scroll";
    }
    else {
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
        document.getElementById("MBstatisticAndAnalyticsCookies").checked = false;
        document.getElementById("MBpreferencesAndPersonalizationCookies").checked = false;
        document.getElementById("MBdisplayThirdPartyContent").checked = false;
        document.getElementById("MBmarketingAndAdvertisementCookies").checked = false;
        document.getElementById("MBunclassifiedCookies").checked = false;
    }
});

// Defining the function to accept all cookies
function acceptAllCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    gtag('consent', 'default', {
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
    // Checking mobile checkboxes
    document.getElementById("MBstatisticAndAnalyticsCookies").checked = true;
    document.getElementById("MBpreferencesAndPersonalizationCookies").checked = true;
    document.getElementById("MBdisplayThirdPartyContent").checked = true;
    document.getElementById("MBmarketingAndAdvertisementCookies").checked = true;
    document.getElementById("MBunclassifiedCookies").checked = true;
    // Hiding the background
    document.querySelector(".cookie-banner-dark-background").style.display = "none";
    document.querySelector(".cookie-banner-background").style.display = "none";
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
        document.getElementById("cookie-banner").style.display = "none";
        document.getElementById("mb-cookie-selector").style.display = "none";
        console.log("set-cookies=cookiesAccepted_true, display_mobile_cookie_selector=false, display_mobile_cookie_banner=false. Set the values 'ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage', 'security_storage' to 'granted'.");
        document.querySelector(".mb-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="300" height="169" frameborder="0" allowfullscreen></iframe>`;
    } else {
        // Hiding the cookie selector
        document.getElementById("cookie-selector").style.display = "none";
        document.getElementById("cookie-banner").style.display = "none";
        console.log("set-cookies=cookiesAccepted_true, display_desktop_cookie_selector=false, display_desktop_cookie_banner=false. Set the values 'ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage', 'security_storage' to 'granted'.");;
    }
    // Enable third party content
    document.querySelector(".dt-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="711" height="400" frameborder="0" allowfullscreen></iframe>`;
}

// Defining the function to hide cookie selector
function hideCookieSelector() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
        document.querySelector(".cookie-banner-dark-background").style.display = "none";
        document.querySelector(".cookie-banner-background").style.display = "none";
        document.getElementById("mb-cookie-selector").style.display = "none";
        console.log("display_mobile_cookie_selector=false");
    } else {
        document.querySelector(".cookie-banner-dark-background").style.display = "none";
        document.querySelector(".cookie-banner-background").style.display = "none";
        document.getElementById("cookie-selector").style.display = "none";
        document.getElementById("cookie-banner").style.display = "none";
        console.log("display_desktop_cookie_selector=false");;
    }
}

// Cookie Selector options
    // Open Cookie Changer Menu in Footer
    document.getElementById("CookieChanger").addEventListener("click", function() {
        document.documentElement.style.overflowY = "hidden";
        document.querySelector(".cookie-banner-dark-background").style.display = "block";
        document.querySelector(".cookie-banner-background").style.display = "block";
        if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
            document.getElementById("mb-cookie-selector").style.display = "block";
            document.getElementById("cookie-banner").style.display = "none";
            console.log("display_mobile_cookie_selector=true");
        } else {
            document.getElementById("cookie-selector").style.display = "block";
            document.getElementById("mb-cookie-selector").style.display = "none";
            document.getElementById("cookie-banner").style.display = "none";
            console.log("display_desktop_cookie_selector=true");
        }
    });

    // Cookie Selector: Close Button
    document.querySelector(".cookie-bottom-close-button").addEventListener("click", function() {
        hideCookieSelector();
    });

    document.getElementById("mbCookieCloser").addEventListener("click", function() {
        hideCookieSelector();
    });

    // Cookie Selector: Save changes
    document.getElementById("cookieSaveChanges").addEventListener("click", function() {
        hideCookieSelector();
    });

    document.getElementById("MBcookieSaveChanges").addEventListener("click", function() {
        hideCookieSelector();
    });

    // Cookie Selector: Accept all cookies
    document.getElementById("acceptCookiesAndCloseBanner").addEventListener("click", function() {
        acceptAllCookies();
    });

    document.getElementById("MBcookieAcceptAll").addEventListener("click", function() {
        acceptAllCookies();
    });

    // Accept all Cookies in Cookie Banner
    document.getElementById("acceptCookies").addEventListener("click", function() {
        acceptAllCookies();
    });

    // Manage Cookies in Cookie Banner
    document.getElementById("cookieManager").addEventListener("click", function() {
        document.documentElement.style.overflowY = "hidden"
        if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
            document.getElementById("mb-cookie-selector").style.display = "block";
            
        } else {
            document.getElementById("cookie-selector").style.display = "block";
            document.getElementById("mb-cookie-selector").style.display = "none";
            document.getElementById("cookie-banner").style.display = "none";
            console.log("display_desktop_cookie_selector=true");
        }
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


document.getElementById("MBstatisticAndAnalyticsCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("MBstatisticAndAnalyticsCookies");
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

document.getElementById("MBpreferencesAndPersonalizationCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("MBpreferencesAndPersonalizationCookies");
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

document.getElementById("MBdisplayThirdPartyContent").addEventListener("change", function() {
    const checkbox = document.getElementById("MBdisplayThirdPartyContent");
    if (checkbox.checked) {
        localStorage.setItem('displayThirdPartyContent', 'granted');
        console.log("Display third party content: Checked");
        document.querySelector(".mb-videocontainer").innerHTML = `<iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="300" height="169" frameborder="0" allowfullscreen></iframe>`;
    } else {
        localStorage.setItem('displayThirdPartyContent', 'denied');
        console.log("Display third party content: Unchecked");
        document.querySelector(".mb-videocontainer").innerHTML = `<div class="cookie-preferences-information-container"><a style="font-size: 10px">Your cookie preferences do not allow YouTube videos or third-party content. To watch the video, change your cookie preferences.</a></div>`;
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

document.getElementById("MBmarketingAndAdvertisementCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("MBmarketingAndAdvertisementCookies");
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

document.getElementById("MBunclassifiedCookies").addEventListener("change", function() {
    const checkbox = document.getElementById("MBunclassifiedCookies");
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
