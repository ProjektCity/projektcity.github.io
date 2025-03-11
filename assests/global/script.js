/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 1.1
    * 
    * Script format: W.X.Y.Z
    * W = Finished code, contains no errors, works perfectly
    * X = Finished code, might contains a few problems, which do not affect tge user experience, bug improvements from W version
    * Y = Experimental code, contains errors, can limit user experience
    * Z = Test and experimental code, probably contains bugs that limit the user experience or make the service unusable, use with caution
*/

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