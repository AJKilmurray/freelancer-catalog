import { profiles } from "./profiles.js";

const profilesParent = document.querySelector('.section-center');
const btnsContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
    displayFreelancers(profiles);
    displayButtons();
});

function displayFreelancers(profiles) {
    let freelancers = profiles.map((freelancer) => {
        return `<article class="profile">
                <img src="${freelancer.img}" class="profile-img" alt="Profile Picture of ${freelancer.name}">
                <div class="profile-info">
                    <div class="heading">
                        <h3>${freelancer.name}</h3>
                        <h4 class="department">${freelancer.department}</h4>
                    </div>
                    <p>Total Commissions: ${freelancer.completed}</p>
                    <p>Average Rating: ${freelancer.avgRating} (${freelancer.totalRatings})</p>
                    <button class="btn">view profile</button>
                </div>
            </article>`;
    });
    freelancers = freelancers.join('');
    profilesParent.innerHTML = freelancers;
}

function displayButtons() {
    const departments = profiles.reduce((values, profile) => {
        if (!values.includes(profile.department)) {
            values.push(profile.department);
        }
        return values;
    }, ['all']);

    const departmentBtns = departments.map((currentDepartment) => {
        return `<button class="btn filter-btn" type="button" data-id="${currentDepartment}">
                    ${currentDepartment}
                </button>`;
    }).join('');
    btnsContainer.innerHTML = departmentBtns;
    const filterBtns = btnsContainer.querySelectorAll('.filter-btn');

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const department = e.currentTarget.dataset.id;
            const departmentCategory = profiles.filter((currentDepartment) => {
                if (currentDepartment.department === department) {
                    return currentDepartment;
                }
            });

            if (department === 'all') {
                displayFreelancers(profiles);
            } else {
                displayFreelancers(departmentCategory);
            }
        });
    });
}