let lastScrollTop = 0;
const header = document.getElementById('nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px';
    } else {
        // Scrolling up
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});