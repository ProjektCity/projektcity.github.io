
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

    const backToTopButton = document.getElementById("dt-btt-btn");
    if (backToTopButton) {
        backToTopButton.style.display = "none";

        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});