const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const annc = document.getElementById("annc")
const notif = document.querySelector(".notif-container")


hamburger.addEventListener("mouseover", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-item");

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// navLink.forEach((n) => n.addEventListener("mouseout", closeMenu));
document.addEventListener("click", closeMenu);


annc.addEventListener("mouseover", (e) => notif.classList.toggle("active"))
document.addEventListener("click", (e) => notif.classList.remove("active"))
