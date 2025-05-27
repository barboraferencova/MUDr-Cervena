
const navbar = document.getElementById("navbar");
const openSidebarBtn = document.getElementById("open-sidebar-button");
const closeSidebarBtn = document.getElementById("close-sidebar-button");
const media = window.matchMedia("(min-width: 1150px)");

media.addEventListener("change", updateNavbar);

function updateNavbar(e) {
  const isDesktop = e.matches;

  if (isDesktop) {
    navbar.removeAttribute("inert");
    navbar.classList.remove("show");
    openSidebarBtn.style.display = "none";
    closeSidebarBtn.style.display = "none";
  } else {
    navbar.setAttribute("inert", "");
    openSidebarBtn.style.display = "block";
    closeSidebarBtn.style.display = "none";
  }
}

function openSidebar() {
  navbar.classList.add("show");
  openSidebarBtn.setAttribute("aria-expanded", "true");
  openSidebarBtn.style.display = "none";
  navbar.removeAttribute("inert");
  closeSidebarBtn.style.display = "block";
}

function closeSidebar() {
  navbar.classList.remove("show");
  openSidebarBtn.setAttribute("aria-expanded", "false");
  openSidebarBtn.style.display = "block";
  openSidebarBtn.removeAttribute("aria-hidden");  
  navbar.setAttribute("inert", "");
  closeSidebarBtn.style.display = "none"; 
}

updateNavbar(media);
