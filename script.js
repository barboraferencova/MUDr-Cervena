
// Navbar section
const navbar = document.getElementById("navbar");
const openSidebarBtn = document.getElementById("open-sidebar-button");
const closeSidebarBtn = document.getElementById("close-sidebar-button");

function updateNavbar() {
  const width = window.innerWidth;

  if (width >= 1150) {
    // Desktop
    navbar.classList.remove("show");
    navbar.removeAttribute("inert");
    navbar.removeAttribute("aria-hidden");
    openSidebarBtn.style.display = "none";
    closeSidebarBtn.style.display = "none";

  } else {
    // Mobil
    navbar.classList.remove("show");
    navbar.setAttribute("inert", "");
    navbar.setAttribute("aria-hidden", "true");
    openSidebarBtn.style.display = "block";
    closeSidebarBtn.style.display = "none";
  }
}

function openSidebar() {
  navbar.classList.add("show");
  navbar.removeAttribute("inert");
  openSidebarBtn.setAttribute("aria-expanded", "true");
  openSidebarBtn.style.display = "none";
  closeSidebarBtn.style.display = "block";
}

function closeSidebar() {
  navbar.classList.remove("show");
  navbar.setAttribute("inert", "");
  openSidebarBtn.setAttribute("aria-expanded", "false");
  openSidebarBtn.style.display = "block";
  closeSidebarBtn.style.display = "none";
}

window.addEventListener("DOMContentLoaded", updateNavbar);
window.addEventListener("resize", updateNavbar);

// Carousel section
const slides = document.querySelectorAll(".carousel-slide");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  leftArrow.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  rightArrow.addEventListener("click", () => {
    currentSlide = (currentSlide + 1 ) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);