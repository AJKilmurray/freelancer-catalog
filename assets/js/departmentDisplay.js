import { departments } from "./departmentsConfig.js";
const departmentSection = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', () => {
    displayDepartments(departments);
    departmentButtons(departments);
});

function displayDepartments(config) {
    let departments = config.map((current) => {
        const departmentList = current.department;
        for (let department of departmentList) {
            let specialtiesList = [];
            for (let speciality of current.specialties) {
                specialtiesList.push(`<h4 class="specialty-selector" data-specialty="${speciality}">${speciality}</h4>`);
            }
            specialtiesList = specialtiesList.join('');
            return `
            <article class="department">
                <h2>${department}</h2>
                <div class="department-info">
                    <div class="specialties">
                        ${specialtiesList}
                    </div>
                    <div class="specialties-content">
                        <h4>${current.specialties[0]}</h4>
                        <p>${current.specialtyDescription[0]}</p>
                        <p>${current.specialties[0]} Freelancers: <span class="freelancer-count">${current.numOfFreelancers[0]}</span></p>
                    </div>
                </div>
            </article>`;
        }
    }).join('');
    departmentSection.innerHTML = departments;
}

function departmentButtons(config) {
    const buttons = document.querySelectorAll('.specialty-selector');
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let departmentSpecialties = config.map((department) => {
                const specialties = department.specialties;
                let index = 0;
                for (let specialty of specialties) {
                    if (specialty === e.currentTarget.dataset.specialty) {
                        const header = e.currentTarget.parentNode.parentNode.children[1].children[0];
                        const description = e.currentTarget.parentNode.parentNode.children[1].children[1];
                        const freelancerNumber = e.currentTarget.parentNode.parentNode.children[1].children[2];
                        header.textContent = `${specialty}`
                        description.textContent = `${department.specialtyDescription[index]}`;
                        freelancerNumber.innerHTML = `${department.specialties[index]} Freelancers: <span class="freelancer-count">${department.numOfFreelancers[index]}</span>`;
                    }
                    index++;
                }
            });
            return departmentSpecialties;
        });
    })
}