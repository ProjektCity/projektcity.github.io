/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 1.4
    * 
    * Script format: W.X.Y.Z
    * W = Finished code, contains no errors, works perfectly
    * X = Finished code, might contains a few problems, which do not affect tge user experience / bug improvements from W version
    * Y = Experimental code, contains errors, can limit user experience
    * Z = Test and experimental code, probably contains bugs that limit the user experience or make the service unusable, use with caution
*/

// Mobile Navbar
document.getElementById("menu-opener").addEventListener("click", function() {
    const menu = document.querySelector(".mobile-menu");
    document.querySelector(".cookie-banner-dark-background").style.display = "block";
    document.documentElement.style.overflowY = "hidden";
    menu.classList.remove("closing");
    menu.style.display = "block";
    console.log("set-menu=mobile_display-block");
});

document.getElementById("menu-closer").addEventListener("click", function() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.add("closing");
    document.querySelector(".cookie-banner-dark-background").style.display = "none";
    document.documentElement.style.overflowY = "scroll";

    setTimeout(() => {
        menu.style.display = "none";
        menu.classList.remove("closing");
        console.log("set-menu=mobile_display-none");
    }, 250);
});

// Share Button
document.getElementById('shareButton').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Projekt City - by SuffixHD & itsmarian',
                text: 'Check out the official Projekt City website and play it for FREE today.',
                url: 'https://bit.ly/ProjektCity',
                image: 'https://projektcity.github.io/assests/images/logos/mainlogo.png',
                hashtag: '#ProjektCity',
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    } else {
        alert('Sharing is not supported in this browser.');
    }
});

document.addEventListener("DOMContentLoaded", function() {

    function generateStyles() {
        const elements = document.querySelectorAll('*');
        const styles = new Set();

        elements.forEach(element => {
            const classList = element.classList;

            classList.forEach(cls => {
                if (cls.startsWith('w') || cls.startsWith('h')) {
                    const parts = cls.substring(1).split('-');
                    const value = parts[0];
                    const decimal = parts[1] ? '.' + parts[1] : ''; 
                    const finalValue = value + decimal;
                    const property = cls.charAt(0) === 'w' ? 'width' : 'height';

                    if (!isNaN(finalValue)) {
                        styles.add(`.${cls} { ${property}: ${finalValue}px; }`);
                    }
                }
            });
        });

        return Array.from(styles).join('\n');
    }

    const styles = generateStyles();
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleTag);

    //----------------------------------------//

    // Device
    function getDeviceType() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent)) {
           return "mobile";
        } else {
            return "desktop";
        }
    }
    
    // Browser
    function getBrowser() {
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf("Firefox") > -1) {
            return "mf_mozilla-firefox";
        } else if (userAgent.indexOf("SamsungBrowser") > -1) {
            return "si_samsung-internet";
        } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            return "op_opera";
        } else if (userAgent.indexOf("Trident") > -1) {
            return "ie_internet-Explorer";
        } else if (userAgent.indexOf("Edge") > -1) {
            return "me_microsoft-edge";
        } else if (userAgent.indexOf("Chrome") > -1) {
            return "gc_google-chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            return "as_apple-safari";
        } else {
            return "uk_unknown";
        }
    }
    
    const deviceType = getDeviceType();
    const browser = getBrowser();
    
    console.log("[BUILD INFO] Release Channel: stable, Build Number: #595, Update date: 03/23/2025");
    setTimeout(() => {
        console.log(`get-userdevice=${deviceType}`);
        console.log(`get-userbrowser=${browser}`);
        console.log(`placeholder-stylesheet-count=${styles.split('\n').length}`);
        setTimeout(() => {
            console.log('%cWARNING!', 'color: red; font-size: 30px; font-weight: bold;');
            console.log('%cThis is a browser feature intended for developers and debuggers only and may contain sensitive links and information about you, your data, account/s, device and browser. \nScammers have been known to encourage people to copy and/or paste information or run commands on the command line to hack accounts or access sensitive data. If you do not know what you are doing, do not proceed and close the debug menu! \nThe information that is/will be visible above and below this text is only for the development and improvement of the site and helps to find and fix bugs and other problems in JavaScript faster. \nAs this is a website related to, created, designed and managed by Projekt City please visit the folowing adress for more information: https://projektcity.github.io/helpcenter/debug-menu', 'color: red; font-size: 12.5px;');  
        }, 240);
    }, 4);
});