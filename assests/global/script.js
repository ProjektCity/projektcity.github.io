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

// Cookie Banner
function acceptCookies() {
    document.querySelector('.cookie-banner').style.display = 'none';
    document.querySelector('.cookie-banner').remove();
    localStorage.setItem('cookiesAccepted', 'true');
    console.log("New user accepted cookies! User action was saved into cache.");
}

if (localStorage.getItem('cookiesAccepted')) {
    document.querySelector('.cookie-banner').remove();
    console.log("User already accepted cookies. Cookie banner removed.");
}

document.getElementById("close-cookie-banner").addEventListener("click", function() {
    document.querySelector('.cookie-banner').remove();
});

// Mobile Navbar
document.getElementById("menu-opener").addEventListener("click", function() {
    const menu = document.getElementById("mb-menu");
    if (menu.style.display === "block") {
        document.querySelector(".mb-bottom-menu").classList.add("hidden");
        document.querySelector(".mb-bottom-items").style.display = "none";
        setTimeout(() => {
            document.querySelector(".mb-bottom-menu").classList.remove("hidden");
            document.querySelector(".mb-bottom-menu").style.display = "none";
        }, 250);
    } else {
        menu.style.display = "block";
        setTimeout(() => {
            document.querySelector(".mb-bottom-items").style.display = "flex";
        }, 175);
    }
});