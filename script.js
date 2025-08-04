function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}


let lastScrollTop = 0;
const navbar = document.querySelector('.simple-navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down → hide navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // Scrolling up → show navbar
        navbar.classList.remove('navbar-hidden');
    }
    lastScrollTop = scrollTop;
});
