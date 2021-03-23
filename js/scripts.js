let icon = document.querySelector('.icon');
let menuMobile = document.querySelector('.menu')

function menuOpen() {
    icon.classList.toggle('icon-x');
    menuMobile.classList.toggle('ativo')
}


icon.addEventListener('click', menuOpen);

const linksInternos = document.querySelectorAll('.menu a[href^="#"');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: "smooth",
    });
}


linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});