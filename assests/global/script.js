/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 1.2
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

// Custom CSS styles based on DIV properties
(function() {
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

    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(generateStyles()));
    document.head.appendChild(styleTag);
})();