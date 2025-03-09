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
    // dataLayer initialisieren und gtag-Funktion definieren
    window.dataLayer = window.dataLayer || [];
    const gtag = (...args) => dataLayer.push(args);
  
    // Cookie-Kategorien (Desktop und Mobile)
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
  
    // Hilfsfunktion: Liest den in localStorage gespeicherten Wert aus und gibt "granted" oder "denied" zurück
    const getStoredConsent = category =>
      localStorage.getItem(category) === "true" ? "granted" : "denied";
  
    // Standard-Consent für Desktop
    gtag('consent', 'default', {
      'ad_storage': getStoredConsent('marketingAndAdvertisementCookies'),
      'ad_user_data': getStoredConsent('marketingAndAdvertisementCookies'),
      'ad_personalization': getStoredConsent('marketingAndAdvertisementCookies'),
      'analytics_storage': getStoredConsent('statisticAndAnalyticsCookies'),
      'functionality_storage': 'granted',
      'personalization_storage': getStoredConsent('preferencesAndPersonalizationCookies'),
      'security_storage': getStoredConsent('unclassifiedCookies')
    });
  
    // Standard-Consent für Mobile
    gtag('consent', 'default', {
      'ad_storage': getStoredConsent('MBmarketingAndAdvertisementCookies'),
      'ad_user_data': getStoredConsent('MBmarketingAndAdvertisementCookies'),
      'ad_personalization': getStoredConsent('MBmarketingAndAdvertisementCookies'),
      'analytics_storage': getStoredConsent('MBstatisticAndAnalyticsCookies'),
      'functionality_storage': 'granted',
      'personalization_storage': getStoredConsent('MBpreferencesAndPersonalizationCookies'),
      'security_storage': getStoredConsent('MBunclassifiedCookies')
    });
  
    // Falls Cookies bereits akzeptiert wurden, Banner ausblenden
    if (localStorage.getItem('cookiesAccepted')) {
      document.getElementById("cookie-banner").style.display = "none";
      document.querySelector(".mb-cookie-banner").style.display = "none";
      document.getElementById("mb-cookie-selector").style.display = "none";
      console.log("User already accepted cookies. Cookie banner removed.");
    } else {
      // Standardmäßig Desktop-Checkboxen zurücksetzen
      ["statisticAndAnalyticsCookies", "preferencesAndPersonalizationCookies", "displayThirdPartyContent", "marketingAndAdvertisementCookies", "unclassifiedCookies"]
        .forEach(id => {
          const el = document.getElementById(id);
          if (el) el.checked = false;
        });
      console.log("Cookies have not yet been accepted!");
    }
  
    // Aktualisiert Checkboxen anhand der in localStorage gespeicherten Werte
    const updateCheckboxesFromStorage = () => {
      COOKIE_CATEGORIES.forEach(category => {
        const checkbox = document.getElementById(category);
        if (checkbox) {
          checkbox.checked = localStorage.getItem(category) === "true";
        }
      });
    };
  
    // Alle 1 Sekunde: Status der Checkboxen in localStorage speichern
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
  
    updateCheckboxesFromStorage();
    getThirdPartyContent();
  
    // Lädt bzw. entfernt Drittanbieter-Inhalte basierend auf der Cookie-Zustimmung
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
  
    // Ermittelt den Gerätetyp anhand des User Agents
    function getUserDeviceType() {
      const ua = navigator.userAgent.toLowerCase();
      return /mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(ua)
        ? "mobile"
        : "desktop";
    }
  
    // Event: Schließen der Cookie-Banner, wenn der Nutzer nicht zustimmt
    const closeBannerBtn = document.querySelector(".cb-close-btn");
    if (closeBannerBtn) {
      closeBannerBtn.addEventListener("click", () => {
        document.getElementById("cookie-banner").style.display = "none";
        gtag('consent', 'update', { 'functionality_storage': 'granted' });
        console.log("New user did not accept cookies. Only granted functional cookies!");
      });
    }
  
    // Funktion: Alle Cookies akzeptieren
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
      // Checkboxen für Desktop und Mobile setzen
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
  
    // Öffnet das Cookie-Menü
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
  
    // Menüoptionen zum Schließen/Speichern
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
  
    // Desktop – Cookie-Auswahländerungen
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
  
    // Desktop – Drittanbieter-Inhalt umschalten
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
  
    // Mobile – Drittanbieter-Inhalt umschalten
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
  
    // Desktop – Marketing und Advertisement umschalten
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
  
    // Desktop – Unclassified Cookies umschalten
    document.getElementById("unclassifiedCookies").addEventListener("change", function() {
      const cb = this;
      gtag('consent', 'update', { 'security_storage': cb.checked ? 'granted' : 'denied' });
      console.log(`'security_storage' ${cb.checked ? "granted" : "denied"}!`);
    });
  
    // Mobile – Cookie-Banner öffnen und schließen
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
  
    function MBacceptCookiesAndCloseBanner() {
      localStorage.setItem('cookiesAccepted', 'true');
      document.documentElement.style.overflowY = "scroll";
      document.getElementById("mb-cookie-selector").style.display = "none";
      document.querySelector(".cookie-selector-background").style.display = "none";
      document.querySelector(".mb-cookie-banner").style.display = "none";
      acceptCookies();
    }
  
    document.getElementById("mbCookieCloser").addEventListener("click", () => {
      document.getElementById("mb-cookie-selector").style.display = "none";
      document.querySelector(".cookie-selector-background").style.display = "none";
      document.documentElement.style.overflowY = "scroll";
    });
  
    // Mobile – Cookie-Auswahl ändern
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
  
    // Cookie Changer – Öffnet je nach Gerätetyp das entsprechende Menü
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
  