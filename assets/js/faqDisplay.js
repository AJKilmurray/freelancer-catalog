import { questions } from './faqConfig.js'; // Config File
import { accordianButtons } from "./faqAccordian.js"; // Open/close accordian button function

const container = document.querySelector('.section-center'); // Parent Container

window.addEventListener('load', () => { // Upon page load
    displayAccordians(questions); // Inputs the config file for dynamic display
});

function displayAccordians(config) {
    let accordians = config.map((question) => { // Returns an array of all questions in the config file, and joins the array into a single string.
        return `<article class="question">
                <div class="question-title">
                    <h3>${question.title}</h3>
                    <i class="fas fa-chevron-down toggle-accordian icon"></i>
                </div>
                <div class="question-answer">
                    <p class="answer">${question.answer}</p>
                </div>
            </article>`;
    }).join('');
    container.innerHTML = accordians; // Sets the HTML to the joined array (now a single string).
    accordianButtons(); // Adds event listeners to each accordian button
}
