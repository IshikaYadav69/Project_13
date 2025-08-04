document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navUl = document.querySelector('nav ul');

    // Add a class to toggle visibility for better CSS control
    if (mobileMenuButton && navUl) {
        mobileMenuButton.addEventListener('click', function () {
            navUl.classList.toggle('active'); // Toggles 'active' class
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars'); // Ensure both are toggled
        });
    }


    // Smooth Scroll Buttons
    const scrollToSection = (buttonId, targetId) => {
        const button = document.getElementById(buttonId);
        const target = document.getElementById(targetId);
        if (button && target) {
            button.addEventListener('click', () => {
                target.scrollIntoView({ behavior: 'smooth' });
            });
        }
    };

    scrollToSection('scroll-to-join', 'join');
    scrollToSection('scroll-to-events', 'events-upcoming');

    // Smooth scroll for anchor links in the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


