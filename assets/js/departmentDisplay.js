import { departments } from "./departmentsConfig.js";
const departmentSection = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', () => {
    displayDepartments(departments); // Input config file to dynamically display config items
    departmentButtons(departments); // Input config file for inspecting each department specialty
});

function displayDepartments(config) {
    let departments = config.map((current) => { // Iterates over each department of the input config file
        const departmentList = current.department;
        for (let department of departmentList) { // Each department
            let specialtiesList = []; // Empty Array
            for (let speciality of current.specialties) { // For each specialty within a department
                specialtiesList.push(`<h4 class="specialty-selector" data-specialty="${speciality}">${speciality}</h4>`); // For each speciality, the specialty will be added to the array with a wrapping h4 element
            }
            specialtiesList = specialtiesList.join(''); // Sets the array to a single string, which will be used to parse HTML.
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
    departmentSection.innerHTML = departments; // Sets the HTML to the joined departments array (which is now a single string).
}

function departmentButtons(config) {
    const buttons = document.querySelectorAll('.specialty-selector'); // Each specialty heading within a department
    buttons.forEach((btn) => { // Adds a 'click' event listener to each specialty heading within a department
        btn.addEventListener('click', (e) => {
            let departmentSpecialties = config.map((department) => {
                const specialties = department.specialties;
                let index = 0;
                for (let specialty of specialties) { // Sets the HTML to the speciality clicked on by the user
                    if (specialty === e.currentTarget.dataset.specialty) {
                        const parent = e.currentTarget.parentNode.parentNode.children[1];
                        const header = parent.children[0];
                        const description = parent.children[1];
                        const freelancerNumber = parent.children[2];
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