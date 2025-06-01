document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  if (!menu || !mobileMenu || !closeBtn) {
    console.error("Some menu elements are missing");
    return;
  }

  menu.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });
});
