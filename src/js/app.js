const toggleNav = document.querySelector(".navbar__burger");
const nav = document.querySelector(".navbar");
const navMenu = document.querySelector(".navbar__menu");
const navMenuLinks = document.querySelectorAll(".navbar__link");
toggleNav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  nav.classList.toggle("active");
});

navMenuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
