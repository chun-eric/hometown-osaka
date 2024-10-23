/* Elements */
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const mobileBtn = document.querySelector(".mobile-menu-btn");
const overlay = document.getElementById("overlay");

/* Toogle Sidebar function using bracket notation */
function toggleSidebar(show) {
  const action = show ? "add" : "remove";
  sidebar.classList[action]("show-sidebar");
  overlay.classList[action]("active");
}

/* Sidebar event Listeners */
closeBtn.addEventListener("click", () => toggleSidebar(false));
mobileBtn.addEventListener("click", () => toggleSidebar(true));
overlay.addEventListener("click", () => toggleSidebar(false));

/* Close the side bar with escape key */
document.addEventListener("keydown", (e) => {
  // pressing escape and sidebar is open run toggleSidebar(false)
  if (e.key === "Escape" && sidebar.classList.contains("show-sidebar"))
    toggleSidebar(false);
});

/* Modal Functionality */
// Elements
const signInBtns = document.querySelectorAll(
  ".btn-secondary, .btn-secondary-side-bar"
);
const signUpBtns = document.querySelectorAll(
  ".btn-primary, .btn-primary-side-bar"
);
const modalSignIn = document.getElementById("modal-signin");
const modalSignUp = document.getElementById("modal-signup");
const closeIcons = document.querySelectorAll(".close-icon");
const overlayContents = document.querySelectorAll(".overlay-content");

// Function to handle modale visibility
function toggleModal(modalElement, show) {
  if (show) {
    modalElement.classList.add("show");
  } else {
    modalElement.classList.remove("show");
    // removes any focus outline from focused element
    document.activeElement.blur();
  }
}

// Sign-in Button Listeners
signInBtns.forEach((btn) => {
  // Add click event
  btn.addEventListener("click", () => {
    // Display signin form
    toggleModal(modalSignIn, true);
  });
});

// Sign-up Button Listeners
signUpBtns.forEach((btn) => {
  // Add click event
  btn.addEventListener("click", () => {
    // Display signin form
    toggleModal(modalSignUp, true);
  });
});

//  Close Icon listeners
closeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Close both sign in or sign up forms
    toggleModal(modalSignIn, false);
    toggleModal(modalSignUp, false);
  });
});

// Click outside to close Modal form
// wrapping it in an array
[modalSignIn, modalSignUp].forEach((modal) => {
  modal.addEventListener("click", (e) => {
    const overlayContent = modal.querySelector(".overlay-content");
    if (!overlayContent.contains(e.target)) {
      toggleModal(modal, false);
    }
  });
});

// Prevent clicks inside the form from closing the modal
overlayContents.forEach((content) => {
  content.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// Close Modals with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // debugging to see the current focused element
    console.log("Currently focused element:", document.activeElement);

    // Close both sign in or sign up forms
    toggleModal(modalSignIn, false);
    toggleModal(modalSignUp, false);
  }
});

console.log(document.activeElement);
/* Weird bugs
1. When pressing escape key the sign up or sign in buttons have a black border around them -
Solution:   document.activeElement.blur();
document.activeElement = Which element currently focused
blur() = removes any focus outline from focused element, opposite of focus()
*/
