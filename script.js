const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".fm-navbar");
const mainContent = document.querySelector(".fm-main-content");
const navLinks = document.querySelectorAll(".nav-link");

function toggleNavbar() {
  menuBtn.classList.toggle("open");
  navbar.classList.toggle("hide");
  mainContent.classList.toggle("hide");
}

function dynamicStyle() {
  if (document.body.clientWidth >= 992) {
    menuBtn.classList.add("open");
    navbar.classList.add("hide");
    mainContent.classList.add("hide");

    navLinks.forEach((a) => {
      a.removeEventListener("click", toggleNavbar);
    });
  } else {
    menuBtn.classList.remove("open");
    mainContent.classList.remove("hide");

    navLinks.forEach((a) => {
      a.addEventListener("click", toggleNavbar);
    });
  }
}

menuBtn.addEventListener("click", toggleNavbar);

window.addEventListener("resize", dynamicStyle);

dynamicStyle();
