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

// Share Button
document.getElementById('shareButton').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Projekt City - by SuffixHD & itsmarian',
                text: 'Check out this awesome webpage!',
                url: 'https://projektcity.github.io/',
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    } else {
        alert('Sharing is not supported in this browser.');
    }
});