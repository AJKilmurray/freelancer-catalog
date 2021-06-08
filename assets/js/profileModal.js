import { profiles } from "./profilesConfig.js";
const body = document.querySelector('body');
const modal = document.querySelector('.modal');

window.addEventListener('load', () => {
    toggleModal();
});

export function toggleModal() {
    const view = document.querySelectorAll(".view");
    view.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            body.classList.add("open-modal");
            for (let profile of profiles) {
              if (e.currentTarget.dataset.profile === profile.name) {
                let profileDepartments = profile.department;
                if (profileDepartments === 'Dev') {
                    profileDepartments = 'Development';
                }
                if (typeof profileDepartments === "object") {
                    profileDepartments = profile.department.join(", ");
                    if (profileDepartments.includes('Dev')) {
                        profileDepartments = profileDepartments.replace('Dev', 'Development');
                    }
                }
                let specialtiesOutput = [];
                const profileSpecialties = profile.specialties;
                if (typeof profileSpecialties === "object") {
                    profileSpecialties.forEach((specialty) => {
                        specialtiesOutput.push(
                        `<h5 class="speciality">${specialty}</h5>`
                        );
                    });
                    specialtiesOutput = specialtiesOutput.join("");
                } else if (typeof profileSpecialties === "string") {
                    specialtiesOutput = `<h5 class="speciality">${profile.specialties}</h5>`;
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
                            <div class="details-container">
                                <div class="personal-details">
                                    <div class="discord-name profile-card">
                                        <h3>Contact</h3>
                                        <p>Contact ${profile.name} through discord!</p>
                                        <button class="contact-btn" onclick="copyToClipboard(this);" disabled>${profile.discord}</button>
                                    </div>
                                    <div class="portfolio profile-card">
                                        <h3>Portfolio</h3>
                                        <p>Check out ${profile.name}'s portfolio <a href="${profile.portfolio}" target="_blank">here</a>.</p>
                                    </div>
                                    <div class="ratings-info profile-card">
                                        <h3>Ratings</h3>
                                        <p>Total Commissions: ${profile.completed}</p>
                                        <p>Average Rating: ${profile.avgRating} (${profile.totalRatings})</p>
                                    </div>
                                </div> 
                            </div>
                        </article> `;
                modal.innerHTML = modalProfile;
              }
            } 
        });
    });
}

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        closeModal();
        console.log("test");
    }
});