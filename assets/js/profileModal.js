import { profiles } from "./profilesConfig.js";
import { copy } from "./clipboard.js";
const body = document.querySelector('body');
const modal = document.querySelector('.modal');

window.addEventListener('load', () => { // Adds eventlisteners on load
    toggleModal();
});

export function toggleModal() {
    const view = document.querySelectorAll(".view");
    view.forEach((btn) => { // View Profile Buttons
        btn.addEventListener('click', (e) => {
            body.classList.add("open-modal"); // Opens modal
            for (let profile of profiles) {
              if (e.currentTarget.dataset.profile === profile.name) { // If the data-profile attribute is equal to the profile name.
                let profileDepartments = profile.department;
                if (typeof profileDepartments === "object") { // If the department(s) are stored in an array
                    profileDepartments = profile.department.join(", ");
                    if (profileDepartments.includes('Dev')) {
                        profileDepartments = profileDepartments.replace('Dev', 'Development'); // Replaces the word 'Dev' with 'Development'
                    }
                }
                let specialtiesOutput = [];
                const profileSpecialties = profile.specialties;
                if (typeof profileSpecialties === "object") { // If the specialties are stored in an array
                    profileSpecialties.forEach((specialty) => {
                        specialtiesOutput.push(`<h5 class="speciality">${specialty}</h5>`); // Turns each specialty to HTML
                    });
                    specialtiesOutput = specialtiesOutput.join(""); // Stores all specialties in a single string to be parsed to HTML
                }
                const modalProfile = `<article class="modal-card">
                            <div class="modal-header">
                                <div class="header-text">
                                    <img src="../images/profiles/${profile.name}.png" class="modal-img">
                                    <h3>${profile.name}</h3>
                                </div>
                                <button class="close-btn">
                                    <i class="fas fa-times fa-lg exit" onclick="closeModal();"></i>
                                </button>
                            </div>
                            <div class="modal-profile">
                                <div class="departments">
                                    <h4 class="department-header">Departments</h3>
                                    <h5>${profileDepartments}</h5>
                                </div>
                                <div class="specialties">
                                    <h4 class="specialties-header">Specialties</h3>
                                    ${specialtiesOutput}
                                </div>
                            </div>
                            <div class="personal-details">
                                <div class="discord-name profile-card">
                                    <h3>Contact</h3>
                                    <br>
                                    <p>Contact ${profile.name} through discord!</p>
                                    <br>
                                    <button class="contact-btn" id="profile-discord">${profile.discord}</button>
                                </div>
                                <div class="portfolio profile-card">
                                    <h3>Portfolio</h3>
                                    <br>
                                    <p>Check out ${profile.name}'s portfolio <a href="${profile.portfolio}" target="_blank">here</a>.</p>
                                </div>
                                <div class="ratings-info profile-card">
                                    <h3>Ratings</h3>
                                    <br>
                                    <p>Total Commissions: ${profile.completed}</p>
                                    <br>
                                    <p>Average Rating: ${profile.avgRating} (${profile.totalRatings})</p>
                                </div>
                            </div>
                        </article> `;
                modal.innerHTML = modalProfile;
                const profileDiscord = document.getElementById('profile-discord');
                profileDiscord.addEventListener('click', (e) => {
                    copy(e.currentTarget);
                });
              }
            } 
        });
    });
}

modal.addEventListener("click", (e) => { // Close Modal
    if (e.target.classList.contains("modal")) {
        closeModal();
    }
});
