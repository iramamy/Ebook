// Add custom JavaScript here
function userscroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        }
        else {
            navbar.classList.remove('navbar-sticky');
            navbar.classList.remove('bg-dark');
        }
    })
}

document.addEventListener('DOMContentLoaded', userscroll);