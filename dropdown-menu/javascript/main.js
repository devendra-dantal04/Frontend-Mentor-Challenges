const menuIcon = document.querySelector('.menu');
const overlayElem = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("menu-close")
    overlayElem.classList.toggle("active")
})



const featureDrp = document.querySelector(".feature-item");
const companyDrp = document.querySelector(".company-item");

featureDrp.addEventListener("click", (e) => {
    featureDrp.classList.toggle("activate-drp")
})

companyDrp.addEventListener("click", (e) => {
    companyDrp.classList.toggle("activate-drp")
})