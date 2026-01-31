// ---------- ELEMENT REFERENCES ----------
const inviteScreen = document.getElementById("invite");
const loadingScreen = document.getElementById("loading");
const houseScreen = document.getElementById("house");
const video = document.querySelector("video");

// ---------- SCREEN TRANSITION HELPERS ----------
function showScreen(screenToShow) {
  // Hide all screens
  [inviteScreen, loadingScreen, houseScreen].forEach(screen => {
    screen.classList.remove("active");
  });

  // Show the requested screen
  screenToShow.classList.add("active");
}

// ---------- ENTER 9TH HOUSE ----------
function openPortal() {
  // Move from invite → loading portal
  showScreen(loadingScreen);

  // Fake loading delay (dramatic on purpose)
  setTimeout(() => {
    showScreen(houseScreen);

    // Attempt autoplay (some browsers block it)
    if (video) {
      video.play().catch(() => {
        // Autoplay failed — user interaction required
        console.log("Autoplay blocked by browser.");
      });
    }
  }, 3000);
}

// ---------- OPTIONAL: SMOOTH FADE-IN ----------
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;

  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = 1;
  }, 100);
});

// ---------- EXPOSE FUNCTION GLOBALLY ----------
// Needed because buttons call openPortal() inline
window.openPortal = openPortal;
