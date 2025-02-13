
fetch('https://pcapi-k48687951-6e4e.vercel.app/api')
.then(response => response.json())
.then(data => {
    const downloadCount = data.downloads;
    const maxValue = 20000;

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

    const counters = document.querySelectorAll('.counter');
    if (counters.length >= 2) {
        counters[0].setAttribute('data-purecounter-end', beforeComma);
        counters[1].setAttribute('data-purecounter-end', afterComma);
    }

    const progressText = document.getElementById('downloadEnd');
    progressText.textContent = `${formattedDownloadCount} / ${formattedMaxValue}`;

    new PureCounter({
        selector: ".counter",
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
    console.error("Fehler beim Abrufen der Daten:", error);
});

// Image Container

const carousel = document.querySelector('.dt-carousel ul');
const indicatorsContainer = document.querySelector('.dt-indicators');
let index = 0;
let autoSlideInterval;

function createIndicators() {
    const slides = document.querySelectorAll('.dt-carousel li');
    slides.forEach((_, i) => {
        const button = document.createElement('button');
        const progress = document.createElement('div');
        progress.classList.add('dt-progress');
        button.dataset.index = i;
        button.appendChild(progress);
        button.onclick = () => showSlide(i, true);
        indicatorsContainer.appendChild(button);
    });
    updateIndicators();
}

function updateIndicators() {
    const buttons = indicatorsContainer.querySelectorAll('button');
    buttons.forEach((button, i) => {
        const progress = button.querySelector('.dt-progress');
        button.classList.remove('dt-active');
        progress.style.animation = 'none';
        if (i === index) {
            button.classList.add('dt-active');
            progress.style.animation = 'fill 3s linear';
        }
    });
}

function showSlide(newIndex, stopAutoSlide = false) {
    const slides = document.querySelectorAll('.dt-carousel li');
    const totalSlides = slides.length;

    if (newIndex < 0) newIndex = totalSlides - 1;
    if (newIndex >= totalSlides) newIndex = 0;

    index = newIndex;
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators();

    if (stopAutoSlide) {
        resetAutoSlide();
    }
}

function nextSlide() {
    showSlide(index + 1);
    resetAutoSlide();
}

function prevSlide() {
    showSlide(index - 1);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

createIndicators();
startAutoSlide();


// FAQ Container
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