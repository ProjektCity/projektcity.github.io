/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 1.1
*/

fetch('https://projektcity-api.vercel.app/api/download')
.then(response => response.json())
.then(data => {
    const downloadCount = data.downloads;
    const maxValue = 30000;

    // Formatting number
    const formattedDownloadCount = new Intl.NumberFormat('en-US').format(downloadCount);
    const formattedMaxValue = new Intl.NumberFormat('en-US').format(maxValue);

    // Split number in two parts
    const downloadParts = formattedDownloadCount.split(',');
    const beforeComma = downloadParts[0]; 
    const afterComma = downloadParts[1] || '';

    const progressBar = document.getElementById('progressBar');
    const percentage = (downloadCount / maxValue) * 100;
    progressBar.style.width = percentage + '%';

    const counters = document.querySelectorAll('.dt-counter');
    if (counters.length >= 2) {
        counters[0].setAttribute('data-purecounter-end', beforeComma);
        counters[1].setAttribute('data-purecounter-end', afterComma);
    }

    const progressText = document.getElementById('downloadEnd');
    progressText.textContent = `${formattedDownloadCount} / ${formattedMaxValue}`;

    new PureCounter({
        selector: ".dt-counter",
        start: 0,
        duration: 1,
        delay: 1,
        once: true,
        pulse: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        formater: "us-US",
        separator: false
    });
})
.catch(error => {
    console.error("Error while fetching data:", error);
});

function toggleContent(id, triangleId) {
    var content = document.getElementById(id);
    var triangle = document.getElementById(triangleId);
    if (content.style.display === "none") {
        content.style.display = "block";
        triangle.classList.add('rotated');
    } else {
        content.style.display = "none";
        triangle.classList.remove('rotated');
    }
}