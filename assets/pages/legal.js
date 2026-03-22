document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("div[data-tag-type='scroll-to']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("data-scroll-to-id");
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent)) {
                    const offset = 10;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: targetPosition, behavior: "smooth" });

                } else {
                    const offset = 110;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: targetPosition, behavior: "smooth" });
                }
            }
        });
    });

    const backToTopButton = document.createElement('div');
    backToTopButton.classList.add('btt-btn');

    backToTopButton.innerHTML = `<div class="btt-button"><div class="btt-svg"><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="#fff"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path></svg></div><div class="btt-text"><p>Back to Top</p></div></div>`

    document.body.appendChild(backToTopButton);

    if (backToTopButton) {
        backToTopButton.classList.add('inactive')

        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                backToTopButton.classList.remove('inactive')
            } else {
                backToTopButton.classList.add('inactive')
            }
        });

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
            console.log("[ANALYTICS] Back to top button clicked");
        });
    }
});
