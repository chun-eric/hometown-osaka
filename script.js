/* Mobile side menu functionality */

/* Elements */
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const mobileBtn = document.querySelector(".mobile-menu-btn");
const overlay = document.getElementById("overlay");

console.log(closeBtn, sidebar, mobileBtn);

/* Toogle Sidebar function using bracket notation */
function toggleSidebar(show) {
  const action = show ? "add" : "remove";
  sidebar.classList[action]("show-sidebar");
  overlay.classList[action]("active");
}

/* Event Listeners */
closeBtn.addEventListener("click", () => toggleSidebar(false));
mobileBtn.addEventListener("click", () => toggleSidebar(true));
overlay.addEventListener("click", () => toggleSidebar(false));

/* close the side bar with the escape key */
document.addEventListener("keydown", (e) => {
  // pressing escape and sidebar is open run toggleSidebar(false)
  if (e.key === "Escape" && sidebar.classList.contains("show-sidebar"))
    toggleSidebar(false);
});
