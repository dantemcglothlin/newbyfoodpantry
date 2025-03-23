function setDarkTheme() {
    // Set the dark theme
    document.documentElement.setAttribute("data-theme", "dark");
    
    // Switch the logo image for dark mode
    var logo = document.getElementById('logo').getElementsByTagName('img')[0];
    logo.src = '../assets/images/Lebnaz-logo.png';  // Dark mode logo
}

function setLightTheme() {
    // Set the light theme
    document.documentElement.setAttribute("data-theme", "light");
    
    // Switch the logo image for light mode
    var logo = document.getElementById('logo').getElementsByTagName('img')[0];
    logo.src = '../assets/images/Lebnaz-logo-color.png';  // Light mode logo
}

function themeChange() {
    const checkbox = document.querySelector('input[type="checkbox"]');
    
    if (checkbox.checked) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

let currentSlide = 0;
    const images = document.querySelector('.slider-images');
    const totalSlides = document.querySelectorAll('.slider-images img').length;

    // Show next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
        updateTextPosition();
    }

    // Show previous slide
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
        updateTextPosition();
    }

    // Update the position of the images in the slider
    function updateSlidePosition() {
        images.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Update text visibility based on the current slide
    function updateTextPosition() {
        const allText = document.querySelectorAll('.event-overlay');
        allText.forEach((text, index) => {
            text.style.display = (index === currentSlide) ? 'block' : 'none';
        });
}

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', showNextSlide);
document.getElementById('prevBtn').addEventListener('click', showPrevSlide);

// Initialize first slide's text visibility
updateTextPosition();