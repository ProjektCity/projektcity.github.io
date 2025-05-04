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

    const backToTopButton = document.querySelector(".btt-btn");
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

document.getElementById("feedback-notice").addEventListener("click", function() {
    document.getElementById("feedback-container").style.display = "block";
});

document.getElementById("feedbackClose").addEventListener("click", function() {
    document.getElementById("feedback-container").style.display = "none";
});

setInterval(function () {
    const screenWidth = window.innerWidth;
    const targetDiv = document.querySelector(".cookie-selector-background");
    const feedbackContainer = document.getElementById("feedback-container");

    if (screenWidth <= 1250 && feedbackContainer.style.display === "block") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    }
}, 10);

document.querySelector(".feedback-container-content-formsend-btn").addEventListener("click", function() {
    const selectedFeedback = document.querySelector("input[name='feedback']:checked");
    if (!selectedFeedback) {
        alert("Please select a feedback option before submitting.");
        return;
    }

    const feedbackValue = selectedFeedback.value;

    fetch("https://projektcity-api.vercel.app/api/sidebar-feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ feedback: feedbackValue })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("feedback-adaptive-head").innerText = `Thanks for your feedback`;
            document.querySelector(".fb-con-frame").style.overflowY = "scroll";
            document.querySelector(".feedback-container-content").innerHTML = `<div class="feedback-container-content-end-content"><div><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100" fill="#fff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div><a>Thanks for your feedback</a><a>We may use this feedback to improve our helpcenter and the experience of our services.</a><a>If you would like to find out more about how we use your feedback, read our&nbsp;</a><a class="linkout nodecoration" href="/legal/privacy" target="_blank">privacy policy.</a></div>`;
            document.querySelector(".feedback-container-content-formsend").innerHTML = `<div class="feedback-container-content-done-btn"><div class="feedback-container-content-done-button"><a id="feedbackDoneBtn">Done</a></div></div>`;

            document.getElementById("feedbackDoneBtn").addEventListener("click", function() {
                document.getElementById("feedback-container").style.display = "none";
            });
        } else {
            alert("Failed to send feedback. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error sending feedback:", error);
        alert("An error occurred while sending feedback.");
    });
});