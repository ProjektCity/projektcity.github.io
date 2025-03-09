/*!
 * ©️ 2025 Projekt City Ltd. | All rights reserved
 * 
 * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
 * Legal basis: This code is intended for use solely on the sites of Projekt City
 * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
 * For more information, please contact us at: projektcityofficial@gmail.com
 * 
 * Script version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
    window.dataLayer = window.dataLayer || [];
    const gtag = (...args) => dataLayer.push(args);
  
    const COOKIE_CATEGORIES = [
      "statisticAndAnalyticsCookies",
      "preferencesAndPersonalizationCookies",
      "marketingAndAdvertisementCookies",
      "unclassifiedCookies",
      "MBstatisticAndAnalyticsCookies",
      "MBpreferencesAndPersonalizationCookies",
      "MBmarketingAndAdvertisementCookies",
      "MBunclassifiedCookies"
    ];
  
    // Standard-Consent for Desktop
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'denied'
    });
  
    // Standard-Consent for Mobile
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'functionality_storage': 'granted',
      'personalization_storage': 'denied',
      'security_storage': 'denied'
    });
  
    // If Cookies have already been accepted, remove the banner
    if (localStorage.getItem('cookiesAccepted')) {
      document.getElementById("cookie-banner").style.display = "none";
      document.querySelector(".mb-cookie-banner").style.display = "none";
      document.getElementById("mb-cookie-selector").style.display = "none";
      console.log("User already accepted cookies. Cookie banner removed.");
    } else {
        console.log("User has not accepted cookies yet. Cookie banner displayed.");
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
  
    // Update the checkboxes based on the stored values
    const updateCheckboxesFromStorage = () => {
      COOKIE_CATEGORIES.forEach(category => {
        const checkbox = document.getElementById(category);
        if (checkbox) {
          checkbox.checked = localStorage.getItem(category) === "true";
        }
      });
    };
  
    // Update the checkboxes every second
    setInterval(() => {
      COOKIE_CATEGORIES.forEach(category => {
        const checkbox = document.getElementById(category);
        if (checkbox) {
          localStorage.setItem(category, checkbox.checked);
        } else {
          console.error(`Checkbox with id ${category} not found!`);
        }
      });
    }, 1000);
  
    // Loading/Removing third-party content based on the user's cookie preferences
    function getThirdPartyContent() {
      const allowContent = localStorage.getItem('displayThirdPartyContent') === 'true';
      const dtCheckbox = document.getElementById("displayThirdPartyContent");
      const mbCheckbox = document.getElementById("MBdisplayThirdPartyContent");
  
      if (allowContent) {
        if (dtCheckbox) dtCheckbox.checked = true;
        if (mbCheckbox) mbCheckbox.checked = true;
        console.log("Third party content will be displayed!");
        document.querySelector(".dt-videocontainer").innerHTML = `
          <iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="711" height="400" frameborder="0" allowfullscreen></iframe>`;
        document.querySelector(".mb-videocontainer").innerHTML = `
          <iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="300" height="169" frameborder="0" allowfullscreen></iframe>`;
      } else {
        if (dtCheckbox) dtCheckbox.checked = false;
        if (mbCheckbox) mbCheckbox.checked = false;
        console.log("Third party content will not be displayed!");
        document.querySelector(".dt-videocontainer").innerHTML = `
          <div class="cookie-preferences-information-container">
            <h4>This video cannot be displayed</h4>
            <a>Your cookie preferences do not allow YouTube videos to be played or third-party content to be loaded. To watch the video, change your cookie preferences or</a>
            <a class="linkout" href="https://youtu.be/bB5IUyPRXO8" target="_blank">watch the video in a separate tab</a>
            <a>.</a>
          </div>`;
        document.querySelector(".mb-videocontainer").innerHTML = `
          <div class="cookie-preferences-information-container">
            <a style="font-size: 10px">Your cookie preferences do not allow YouTube videos or third-party content. To watch the video, change your cookie preferences.</a>
            <a>.</a>
          </div>`;
      }
    }

    updateCheckboxesFromStorage();
    getThirdPartyContent();
  
    // Get the user's device type
    function getUserDeviceType() {
      const ua = navigator.userAgent.toLowerCase();
      return /mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(ua)
        ? "mobile"
        : "desktop";
    }
  
    // Close cookie selector
    const closeBannerBtn = document.querySelector(".cb-close-btn");
    if (closeBannerBtn) {
      closeBannerBtn.addEventListener("click", () => {
        document.getElementById("cookie-banner").style.display = "none";
        gtag('consent', 'update', { 'functionality_storage': 'granted' });
        console.log("New user did not accept cookies. Only granted functional cookies!");
      });
    }
  
    // Accept all cookies
    function acceptCookies() {
      document.querySelectorAll('.cookie-banner').forEach(el => el.style.display = 'none');
      localStorage.setItem('cookiesAccepted', 'true');
      localStorage.setItem('displayThirdPartyContent', 'true');
      getThirdPartyContent();
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted',
        'security_storage': 'granted'
      });
      // Set checkboxes for desktop and mobile
      [
        "statisticAndAnalyticsCookies", "preferencesAndPersonalizationCookies", "displayThirdPartyContent",
        "marketingAndAdvertisementCookies", "unclassifiedCookies",
        "MBstatisticAndAnalyticsCookies", "MBpreferencesAndPersonalizationCookies",
        "MBdisplayThirdPartyContent", "MBmarketingAndAdvertisementCookies", "MBunclassifiedCookies"
      ].forEach(id => {
        const cb = document.getElementById(id);
        if (cb) cb.checked = true;
      });
      document.documentElement.style.overflowY = "scroll";
      console.log("User accepted all cookies: all consents set to granted!");
    }
  
    // Open Cookie Selector
    function openCookieMenu() {
      document.getElementById("cookie-selector").style.display = "block";
      document.querySelector(".cookie-selector-background").style.display = "block";
      document.documentElement.style.overflowY = "hidden";
    }
  
    // Banner-Buttons
    const acceptCookiesBtn = document.getElementById("acceptCookies");
    if (acceptCookiesBtn) acceptCookiesBtn.addEventListener("click", acceptCookies);
  
    const cookieManagerBtn = document.getElementById("cookieManager");
    if (cookieManagerBtn) cookieManagerBtn.addEventListener("click", openCookieMenu);
  
    // Menu options to close/save changes
    const cookieBottomCloseBtn = document.querySelector(".cookie-bottom-close-button");
    if (cookieBottomCloseBtn) {
      cookieBottomCloseBtn.addEventListener("click", () => {
        document.documentElement.style.overflowY = "scroll";
        document.getElementById("cookie-selector").style.display = "none";
        document.querySelector(".cookie-selector-background").style.display = "none";
      });
    }
  
    document.getElementById("cookieSaveChanges").addEventListener("click", () => {
      localStorage.setItem('cookiesAccepted', 'true');
      document.documentElement.style.overflowY = "scroll";
      document.getElementById("cookie-selector").style.display = "none";
      document.querySelector(".cookie-selector-background").style.display = "none";
      document.getElementById("cookie-banner").style.display = "none";
    });
  
    document.getElementById("acceptCookiesAndCloseBanner").addEventListener("click", () => {
      localStorage.setItem('cookiesAccepted', 'true');
      document.documentElement.style.overflowY = "scroll";
      document.getElementById("cookie-selector").style.display = "none";
      document.querySelector(".cookie-selector-background").style.display = "none";
      document.getElementById("cookie-banner").style.display = "none";
      acceptCookies();
    });
  
    // Desktop – cookie choices
    document.getElementById("statisticAndAnalyticsCookies").addEventListener("change", function() {
      const cb = this;
      gtag('consent', 'update', { 'analytics_storage': cb.checked ? 'granted' : 'denied' });
      console.log(`'analytics_storage' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    document.getElementById("preferencesAndPersonalizationCookies").addEventListener("change", function() {
      const cb = this;
      gtag('consent', 'update', { 'personalization_storage': cb.checked ? 'granted' : 'denied' });
      console.log(`'personalization_storage' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    // Desktop – third party content switch
    document.getElementById("displayThirdPartyContent").addEventListener("change", function() {
      const cb = this;
      localStorage.setItem('displayThirdPartyContent', cb.checked);
      console.log(`Third party content will ${cb.checked ? "be displayed" : "not be displayed"}!`);
      if (cb.checked) {
        document.querySelector(".dt-videocontainer").innerHTML = `
          <iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="711" height="400" frameborder="0" allowfullscreen></iframe>`;
      } else {
        document.querySelector(".dt-videocontainer").innerHTML = `
          <div class="cookie-preferences-information-container">
            <h4>This video cannot be displayed</h4>
            <a>Your cookie preferences do not allow YouTube videos or third-party content. To watch the video, change your cookie preferences.</a>
          </div>`;
      }
    });
  
    // Mobile – third party content switch
    document.getElementById("MBdisplayThirdPartyContent").addEventListener("change", function() {
      const cb = this;
      localStorage.setItem('MBdisplayThirdPartyContent', cb.checked);
      console.log(`Third party content will ${cb.checked ? "be displayed" : "not be displayed"}!`);
      if (cb.checked) {
        document.querySelector(".mb-videocontainer").innerHTML = `
          <iframe src="https://www.youtube.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080" width="300" height="169" frameborder="0" allowfullscreen></iframe>`;
      } else {
        document.querySelector(".mb-videocontainer").innerHTML = `
          <div class="cookie-preferences-information-container">
            <a style="font-size: 10px">Your cookie preferences do not allow YouTube videos or third-party content. To watch the video, change your cookie preferences.</a>
          </div>`;
      }
    });
  
    // Desktop – Marketing and Advertisement switch
    document.getElementById("marketingAndAdvertisementCookies").addEventListener("change", function() {
      const cb = this;
      const status = cb.checked ? 'granted' : 'denied';
      gtag('consent', 'update', {
        'ad_storage': status,
        'ad_user_data': status,
        'ad_personalization': status
      });
      console.log(`${cb.checked ? "Enabled" : "Disabled"} 'ad_storage', 'ad_user_data' and 'ad_personalization'!`);
    });
  
    // Desktop – Unclassified Cookies switch
    document.getElementById("unclassifiedCookies").addEventListener("change", function() {
      const cb = this;
      gtag('consent', 'update', { 'security_storage': cb.checked ? 'granted' : 'denied' });
      console.log(`'security_storage' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    // Mobile – Open Cookie Selector
    document.getElementById("mbCookieOpener").addEventListener("click", () => {
      document.documentElement.style.overflowY = "hidden";
      document.getElementById("mb-cookie-selector").style.display = "block";
      document.querySelector(".cookie-selector-background").style.display = "block";
    });
  
    document.getElementById("MBcookieSaveChanges").addEventListener("click", () => {
      localStorage.setItem('cookiesAccepted', 'true');
      document.documentElement.style.overflowY = "scroll";
      document.getElementById("mb-cookie-selector").style.display = "none";
      document.querySelector(".cookie-selector-background").style.display = "none";
      document.querySelector(".mb-cookie-banner").style.display = "none";
    });
  
    document.getElementById("mbCookieCloser").addEventListener("click", () => {
      document.getElementById("mb-cookie-selector").style.display = "none";
      document.querySelector(".cookie-selector-background").style.display = "none";
      document.documentElement.style.overflowY = "scroll";
    });
  
    // Mobile – Change cookie preferences
    document.getElementById("MBstatisticAndAnalyticsCookies").addEventListener("change", function() {
      const cb = this;
      gtag('consent', 'update', { 'analytics_storage': cb.checked ? 'granted' : 'denied' });
      console.log(`'analytics_storage' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    document.getElementById("MBpreferencesAndPersonalizationCookies").addEventListener("change", function() {
      const cb = this;
      gtag('consent', 'update', { 'personalization_storage': cb.checked ? 'granted' : 'denied' });
      console.log(`'personalization_storage' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    document.getElementById("MBmarketingAndAdvertisementCookies").addEventListener("change", function() {
      const cb = this;
      const status = cb.checked ? 'granted' : 'denied';
      gtag('consent', 'update', {
        'ad_storage': status,
        'ad_user_data': status,
        'ad_personalization': status
      });
      console.log(`'ad_storage', 'ad_user_data' and 'ad_personalization' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    document.getElementById("MBunclassifiedCookies").addEventListener("change", function() {
      const cb = this;
      gtag('consent', 'update', { 'security_storage': cb.checked ? 'granted' : 'denied' });
      console.log(`'security_storage' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    // Cookie Changer – opening menu depending on device type
    document.getElementById("CookieChanger").addEventListener("click", () => {
      const deviceType = getUserDeviceType();
      document.documentElement.style.overflowY = "hidden";
      document.querySelector(".cookie-selector-background").style.display = "block";
      if (deviceType === "mobile") {
        document.getElementById("mb-cookie-selector").style.display = "block";
        document.getElementById("cookie-banner").style.display = "none";
      } else {
        document.getElementById("cookie-selector").style.display = "block";
        document.getElementById("mb-cookie-banner").style.display = "none";
      }
    });
});

function MBacceptCookiesAndCloseBanner() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.documentElement.style.overflowY = "scroll";
    document.getElementById("mb-cookie-selector").style.display = "none";
    document.querySelector(".cookie-selector-background").style.display = "none";
    document.querySelector(".mb-cookie-banner").style.display = "none";
    acceptCookies();
}