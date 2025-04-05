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

    const backToTopButton = document.querySelector(".dt-btt-btn");
    if (backToTopButton) {
        backToTopButton.style.display = "none";

        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
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