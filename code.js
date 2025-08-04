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
    if (mobileMenuButton && navUl) {
        mobileMenuButton.addEventListener('click', function () {
            navUl.classList.toggle('active'); // Toggles 'active' class
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars'); // Ensure both are toggled
        });
    }


