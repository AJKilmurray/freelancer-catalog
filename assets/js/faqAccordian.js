export function accordianButtons() {
    const btns = document.querySelectorAll('.toggle-accordian');
    btns.forEach((btn) => { // Each accordian
        btn.addEventListener('click', (accordian) => { // Event listener on each accordian button
            const answer = accordian.currentTarget.parentNode.parentNode.children[1]; // Parent of the answer 
            const icon = answer.parentNode.children[0].children[1];
            if (icon.classList.contains('fa-chevron-down')) {
                answer.style.height = `${answer.children[0].offsetHeight}px`;
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else if (icon.classList.contains('fa-chevron-up')) {
                answer.style.height = `0px`;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}