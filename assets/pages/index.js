const carousel = document.querySelector('.carousel ul');
const indicatorsContainer = document.querySelector('.indicators');
let index = 0;
let autoSlideInterval;

function formatNumber(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

async function fetchDownloadData() {
	try {
		const response = await fetch('https://api.projektcity.com/api/download');
        console.log('Fetch response:', response);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		if (data.goal !== undefined && data.goal !== null) {
            GOAL = data.goal;
        }

		return data.downloads;
	} catch (error) {
		console.error('Error while fetching download data:', error);
		return null;
	}
}

function updateCounter(downloads) {
	const counterElement = document.getElementById('downloadCounter');

	if (downloads === null) {
		counterElement.textContent = "--.---/--.---";
		return;
	}

	const progress = Math.min((downloads / GOAL) * 100, 100);

	counterElement.style.setProperty('--progress', `${progress}%`);

	counterElement.textContent = `${formatNumber(downloads)}/${formatNumber(GOAL)}`;
}

function animateCounter(targetValue, duration = 2000) {
	const startValue = 0;
	const startTime = performance.now();
	const counterElement = document.getElementById('downloadCounter');

	function update(currentTime) {
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / duration, 1);

		const easedProgress = 1 - Math.pow(1 - progress, 3);
		const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);

		const tempProgress = Math.min((currentValue / GOAL) * 100, 100);
		counterElement.style.setProperty('--progress', `${tempProgress}%`);
		counterElement.textContent = `${formatNumber(currentValue)}/${formatNumber(GOAL)}`;

		if (progress < 1) {
			requestAnimationFrame(update);
		} else {
			updateCounter(targetValue);
		}
	}

	requestAnimationFrame(update);
}

async function init() {
	const downloads = await fetchDownloadData();

	if (downloads !== null) {
		animateCounter(downloads);
	} else {
		updateCounter(null);
	}
}

document.addEventListener('DOMContentLoaded', init);

function toggleContent(id, triangleId) {
    var content = document.getElementById(id);
    var triangle = document.getElementById(triangleId);
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        triangle.classList.add('rotated');
    } else {
        content.classList.add('collapsed');
        triangle.classList.remove('rotated');
    }
}

window.addEventListener('load', () => {
    const images = document.querySelectorAll('img.res-img');

    images.forEach(img => {
        const highResSrc = img.getAttribute('data-src');
        if (highResSrc) {
        img.src = highResSrc;
        }
    });
});


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
            progress.style.animation = 'progressFill 3s linear';
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

document.addEventListener('DOMContentLoaded', function() {
    const COOKIE_KEY = 'displayThirdPartyContent';
    const ACCEPTED_KEY = 'cookiesAccepted';

    function applyTrailerState() {
        const trailer = document.getElementById('trailer');
        const trailerPrivacy = document.getElementById('trailerPrivacy');
        const trailerIframe = document.getElementById('trailerIframe');

        if (!trailer || !trailerPrivacy) return;

        const allowed = localStorage.getItem(COOKIE_KEY) === 'granted';

        trailer.style.display = allowed ? 'block' : 'none';
        trailerIframe.src = allowed ? 'https://www.youtube-nocookie.com/embed/bB5IUyPRXO8?autohide=1&autoplay=1&hl=en&loop=1&mute=1&modestbranding=1&playlist=bB5IUyPRXO8&rel=0&showinfo=1&vq=hd1080' : '';
        trailerPrivacy.style.display = allowed ? 'none' : 'block';
    }

    window.addEventListener('storage', function (e) {
        if (e.key === COOKIE_KEY || e.key === ACCEPTED_KEY) applyTrailerState();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTrailerState);
    } else {
        applyTrailerState();
    }
});

createIndicators();
startAutoSlide();