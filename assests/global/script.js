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

/* Share menu*/
document.getElementById("shareButton").addEventListener("click", function() {
    var modal = document.getElementById('modal');
    
    modal.style.animation = 'none';
    modal.offsetHeight;
    modal.style.display = 'block';
    modal.style.bottom = 'calc(100% - 200px)';
    modal.style.animation = 'slideIn 0.25s forwards';

    function closeModal() {
        document.getElementById('modal-ui-close').click();
        document.body.removeEventListener('mousemove', closeModal);
        document.body.removeEventListener('click', closeModal);
        document.body.removeEventListener('keydown', closeModal);
        document.body.removeEventListener('touchstart', closeModal);
    }

    if (navigator.share) {
        navigator.share({
            title: 'Projekt City - by SuffixHD & itsmarian',
            text: 'Check out the official Projekt City website and play it for FREE today.',
            url: 'https://bit.ly/ProjektCity',
        }).finally(() => {
            document.body.addEventListener('mousemove', closeModal, { once: true });
            document.body.addEventListener('click', closeModal, { once: true });
            document.body.addEventListener('keydown', closeModal, { once: true });
            document.body.addEventListener('touchstart', closeModal, { once: true });
        });
    } else {
        alert('The share menu is not supported by your browser or system. Update your browser or system to a newer version or switch to a different device.');
        console.log("User could not open the share menu!")
        document.getElementById('modal-ui-close').click(); 
    }
});

document.getElementById("modal-ui-close").addEventListener("click", function() {
    var modal = document.getElementById('modal');
    modal.style.animation = 'slideOut 0.25s forwards';
    modal.addEventListener('animationend', () => {
        modal.style.display = 'none';
    }, { once: true });
});