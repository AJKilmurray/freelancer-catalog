export function accordianButtons() {
    const btns = document.querySelectorAll('.toggle-accordian');
    btns.forEach((btn) => { // Each accordian
        btn.addEventListener('click', (accordian) => { // Event listener on each accordian button
            const answer = accordian.currentTarget.parentNode.parentNode.children[1]; // Parent of the answer 
            const icon = answer.parentNode.children[0].children[1]; // Open/Close accordian icon
            const answerText = answer.children[0]; // Answer Text (paragraph element)
            if (icon.classList.contains('fa-chevron-down')) { // If the accordian is closed
                answer.style.height = `${answerText.offsetHeight}px`; // Dynamically sets the height of the paragraph container to match the height of the paragraph element (answerText)
                icon.classList.remove('fa-chevron-down'); 
                icon.classList.add('fa-chevron-up'); // Replaces the icon with an up arrow instead of a down arrow, to indicate that the accordian can be closed.
            } else if (icon.classList.contains('fa-chevron-up')) { // If the accordian is open
                answer.style.height = `0px`;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}