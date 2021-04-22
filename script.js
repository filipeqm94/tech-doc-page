const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".fm-navbar");
const mainContent = document.querySelector(".fm-main-content");
const navLinks = document.querySelectorAll(".nav-link");

function toggleNavbar() {
  menuBtn.classList.toggle("open");
  navbar.classList.toggle("hide");
  mainContent.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleNavbar);
navLinks.forEach((a) => {
  a.addEventListener("click", toggleNavbar);
});

if (document.body.clientWidth >= 992) {
  menuBtn.classList.add("open");
}

window.addEventListener("resize", () => {
  if (document.body.clientWidth >= 992) {
    menuBtn.classList.add("open");
    navbar.classList.add("hide");
    mainContent.classList.add("hide");
  } else {
    menuBtn.classList.remove("open");
    mainContent.classList.remove("hide");
  }
});
