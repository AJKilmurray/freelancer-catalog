import { profiles } from "./profilesConfig.js";
import { toggleModal } from "./profileModal.js";

const profilesParent = document.querySelector('.section-center');
const btnsContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
    displayFreelancers(profiles);
    displayButtons();
});

function displayFreelancers(profiles) {
    let freelancers = profiles.map((freelancer) => {
        const profile = freelancer.department;
        if (typeof profile === 'object') { // If freelancer has one department
            return `<article class="profile">
                    <img src="${freelancer.img}" class="profile-img" alt="Profile Picture of ${freelancer.name}">
                    <div class="profile-info">
                        <div class="heading">
                            <h3>${freelancer.name}</h3>
                            <h4 class="department">${freelancer.department.join(', ')}</h4>
                        </div>
                        <p>Total Commissions: ${freelancer.completed}</p>
                        <p>Average Rating: ${freelancer.avgRating} (${freelancer.totalRatings})</p>
                        <button class="btn view" data-profile="${freelancer.name}">view profile</button>
                    </div>
                </article>`;
        }
    });
    const randomizedOrder = freelancers // Randomizes the order of profiles
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .join('');
    profilesParent.innerHTML = randomizedOrder;
}

function displayButtons() {

    const departments = profiles.reduce((values, profile) => {
        if (typeof profile.department === 'object') { // If freelancer has more than one department
            for (let i in profile.department) {
                if (!values.includes(profile.department[i])) {
                  values.push(profile.department[i]);
                }
            }
        }
        return values;
    }, ['all']);

    const departmentBtns = departments.map((currentDepartment) => { // Renders buttons for each department category within profiles. One button per category.
        return `<button class="btn filter-btn" type="button" data-id="${currentDepartment}">${currentDepartment}</button>`;
    }).join('');
    btnsContainer.innerHTML = departmentBtns;

    const filterBtns = btnsContainer.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const department = e.currentTarget.dataset.id;
            const departmentCategory = profiles.filter((currentProfile) => {
                const profile = currentProfile.department;
                if (typeof profile === 'object') { // If freelancer has more than one department
                    for (let i in profile) {
                      if (profile[i] === department) {
                        console.log();
                        return profile[i];
                      }
                    }
                }
            });           
            if (department === 'all') { // Displays all profiles (All Button)
                displayFreelancers(profiles);
            } else {
                displayFreelancers(departmentCategory); // Displays selected button category
            }
            toggleModal();
        });
    });
}