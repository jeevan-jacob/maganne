// JavaScript to make the website more interactive

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Carousel Functionality
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
}

// Auto-rotate carousel images every 3 seconds
setInterval(showNextImage, 3000);

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = "Toggle Dark Mode";
darkModeToggle.classList.add('dark-mode-button');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Add active class to the first image in the carousel on load
images[currentImageIndex].classList.add('active');

// Scroll Animations using Intersection Observer
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Smooth appearance for sections
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        if (section.offsetTop < scrollY + window.innerHeight / 1.2) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
