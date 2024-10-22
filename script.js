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

/* display signup form when clicked on larger devices */
/* display signin form when clicked on larger devices */
/* exit on clicking overlay or clicking on close button top left
 */

/*

2. Display signup form
3. Click on close icon or escape button, form is hidden

*/

// Select all signup buttons
const signupBtns = document.querySelectorAll(
  ".btn-secondary, .btn-secondary-side-bar"
);
const closeIcon = document.querySelector(".close-icon");
const modalSignin = document.getElementById("modal-signin");
const overlayContent = document.querySelector(".overlay-content");

// Click on Sign up button
signupBtns.forEach((btn) => {
  // Add click event
  btn.addEventListener("click", () => {
    // Display signup form
    modalSignin.classList.add("show");
  });
});

// close modal form on clicking close icon
closeIcon.addEventListener("click", () => {
  modalSignin.classList.remove("show");
});

// close modal form when clicking outside the form
modalSignin.addEventListener("click", (e) => {
  if (!overlayContent.contains(e.target)) {
    modalSignin.classList.remove("show");
  }
});

// prevent clicks inside the form from closing the modal
overlayContent.addEventListener("click", (e) => {
  e.stopPropagation(); // prevents clicks from bubbling up to the modal
});
