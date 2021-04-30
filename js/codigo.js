let btnMenuResponsive = document.querySelector(".menu-responsive");
let menuItems = document.querySelector(".menuItems");








btnMenuResponsive.addEventListener("click", () => {
    menuItems.classList.toggle("showResponsive");
})