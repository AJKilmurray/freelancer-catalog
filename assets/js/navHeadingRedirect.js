const navLogo = document.querySelector(".logo");
const navHeading = document.querySelector(".nav-heading");

navLogo.addEventListener("click", () => {
	navHeaderRedirect();
});

navHeading.addEventListener("click", () => {
	navHeaderRedirect();
});

function navHeaderRedirect() {
	window.location.href = "/freelancer-catalog/index.html";
}
