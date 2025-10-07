// Navbar toggle (collapsible)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-item');
    navToggle.addEventListener('click', function() {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('active');
        navToggle.innerHTML = navMenu.classList.contains('active')
            ? '<i class="bx bx-x"></i>'
            : '<i class="bx bx-menu"></i>';
    });
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 900 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
                navToggle.innerHTML = '<i class="bx bx-menu"></i>';
            }
        });
    });