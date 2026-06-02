const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector("#main-menu");
const submenuButtons = document.querySelectorAll(".has-submenu > button");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

submenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (window.innerWidth <= 980) {
      const parent = button.closest(".has-submenu");
      parent.classList.toggle("open");
    }
  });
});
