const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});