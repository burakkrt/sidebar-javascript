const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector(".sidebar-toggle");
const menuIcon = menuButton.querySelector("span");

menuButton.addEventListener("click", function() {
  sidebar.classList.toggle("sidebar-show");
  if (sidebar.classList.contains("sidebar-show")) {
    menuIcon.textContent = "close";
    document.onclick = (e) => {
      if (!e.target.classList.contains("sidebar") && !e.target.classList.contains("icon-xl") && e.target.nodeName !== "A") {
        sidebar.classList.remove("sidebar-show");
        menuIcon.textContent = "menu";
      }
    };
  } else {
    menuIcon.textContent = "menu";
  }
});