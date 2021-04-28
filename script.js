const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".fm-navbar");
const mainContent = document.querySelector(".fm-main-content");
const navLinks = document.querySelectorAll(".nav-link");

function toggleNavbar() {
  menuBtn.classList.toggle("open");
  navbar.classList.toggle("show");
  mainContent.classList.toggle("show");
}

function dynamicStyle() {
  if (document.body.clientWidth >= 992) {
    menuBtn.classList.add("open");
    navbar.classList.add("show");

    navLinks.forEach((a) => {
      a.removeEventListener("click", toggleNavbar);
    });
  }

  if (document.body.clientWidth < 992) {
    menuBtn.classList.remove("open");
    navbar.classList.remove("show");

    navLinks.forEach((a) => {
      a.addEventListener("click", toggleNavbar);
    });
  }
}

menuBtn.addEventListener("click", toggleNavbar);

window.addEventListener("resize", dynamicStyle);

dynamicStyle();
