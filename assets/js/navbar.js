const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links-container');

navToggle.addEventListener('click', () => { // Opens the hamburger menu (Mobile Devices only)
    links.classList.toggle('show-links');
});