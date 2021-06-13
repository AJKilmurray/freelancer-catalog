import { questions } from './faqConfig.js';
import { accordianButtons } from "./faqAccordian.js";

const container = document.querySelector('.section-center');

window.addEventListener('load', () => {
    displayAccordians(questions);
});

function displayAccordians(config) {
    let accordians = config.map((question) => {
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
    container.innerHTML = accordians;
    accordianButtons();
}
