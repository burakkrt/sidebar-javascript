const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector(".sidebar-toggle");
const menuIcon = menuButton.querySelector("span");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

menuButton.addEventListener("click", function() {
  sidebar.classList.toggle("sidebar-show");
  sidebarOverlay.classList.toggle("overlay-show");
  if (!menuIcon.getAttribute("style")) menuIcon.style.color = "#F0EEED";
  else menuIcon.removeAttribute("style");

  if (sidebar.classList.contains("sidebar-show")) {
    menuIcon.textContent = "close";
    document.onclick = (e) => {
      if (!e.target.classList.contains("sidebar") && !e.target.classList.contains("icon-xl") && e.target.nodeName !== "A") {
        sidebar.classList.remove("sidebar-show");
        menuIcon.textContent = "menu";
        sidebarOverlay.classList.toggle("overlay-show");
        menuIcon.removeAttribute("style");
        document.onclick = (e) => {
          return false;
        };
      }
    };
  } else {
    menuIcon.textContent = "menu";
  }
});