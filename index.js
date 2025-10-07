// Navbar toggle (collapsible)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-item');
    navToggle.addEventListener('click', function() {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('active');
        // Change icon
        navToggle.innerHTML = navMenu.classList.contains('active')
            ? '<i class="bx bx-x"></i>'
            : '<i class="bx bx-menu"></i>';
    });
    // Optional: close nav when a link is clicked (mobile)
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 900 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
                navToggle.innerHTML = '<i class="bx bx-menu"></i>';
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.media-slide');
    let currentSlide = 0;
    let sliderInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        sliderInterval = setInterval(nextSlide, 3000); // 3 seconds
    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }

    // Pause on hover
    const slider = document.querySelector('.media-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);

        // Manual swipe/drag support
        let startX = null;
        let isDragging = false;

        slider.addEventListener('mousedown', function(e) {
            isDragging = true;
            startX = e.clientX;
        });

        slider.addEventListener('mouseup', function(e) {
            if (!isDragging) return;
            let diff = e.clientX - startX;
            if (diff > 50) {
                prevSlide();
            } else if (diff < -50) {
                nextSlide();
            }
            isDragging = false;
        });

        slider.addEventListener('mouseleave', function() {
            isDragging = false;
        });

        // Touch support for mobile
        let touchStartX = null;
        slider.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
        });
        slider.addEventListener('touchend', function(e) {
            if (touchStartX === null) return;
            let touchEndX = e.changedTouches[0].clientX;
            let diff = touchEndX - touchStartX;
            if (diff > 50) {
                prevSlide();
            } else if (diff < -50) {
                nextSlide();
            }
            touchStartX = null;
        });
    }

    // Manual navigation with arrows if present
    const prevBtn = document.querySelector('.media-prev');
    const nextBtn = document.querySelector('.media-next');
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlider();
            startSlider();
        });
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlider();
            startSlider();
        });
    }

    showSlide(currentSlide);
    startSlider();
});