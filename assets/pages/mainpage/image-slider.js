window.addEventListener('load', () => {
    const images = document.querySelectorAll('img.res-img');

    images.forEach(img => {
        const highResSrc = img.getAttribute('data-src');
        if (highResSrc) {
        img.src = highResSrc;
        }
    });
});

const carousel = document.querySelector('.carousel ul');
const indicatorsContainer = document.querySelector('.indicators');
let index = 0;
let autoSlideInterval;

function createIndicators() {
    const slides = document.querySelectorAll('.carousel li');
    slides.forEach((_, i) => {
        const button = document.createElement('button');
        const progress = document.createElement('div');
        progress.classList.add('progress');
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
        const progress = button.querySelector('.progress');
        button.classList.remove('active');
        progress.style.animation = 'none';
        if (i === index) {
            button.classList.add('active');
            progress.style.animation = 'fill 3s linear';
        }
    });
}

function showSlide(newIndex, stopAutoSlide = false) {
    const slides = document.querySelectorAll('.carousel li');
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