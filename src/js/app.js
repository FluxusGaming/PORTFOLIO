const toggleNav = document.querySelector(".navbar__burger");
const navMenu = document.querySelector(".navbar__menu");
const navMenuLinks = document.querySelectorAll(".navbar__link");
toggleNav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navMenuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
