// script.js
const galleryContainer = document.querySelector(".gallery-container");
const galleryImages = document.querySelector(".gallery-images");
const galleryImage = document.querySelector(".gallery-image");
const scrollSpeed = 500; // Adjust this value to control the scroll speed

let isMouseDown = false;
let startX;
let scrollLeft;

galleryImages.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - galleryImages.offsetLeft;
  scrollLeft = galleryImages.scrollLeft;
});

galleryImages.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

galleryImages.addEventListener("mouseup", () => {
  isMouseDown = false;
});

galleryImages.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - galleryImages.offsetLeft;
  const walk = (x - startX) * 3; // Adjust scrolling speed
  galleryImages.scrollLeft = scrollLeft - walk;
});

galleryContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  galleryContainer.scrollBy({
    left: event.deltaY > 0 ? scrollSpeed : -scrollSpeed,
    behavior: "smooth",
  });
});

//Fullscreen
const fullscreenOverlay = document.getElementById("fullscreen-overlay");
const fullscreenImage = document.getElementById("fullscreenImage");
//Scroll stop
function startGalleryAnimation() {
  galleryImages.style.animationPlayState = "running";
}
function stopGalleryAnimation() {
  galleryImages.style.animationPlayState = "paused";
}

function openFullscreenImage(imageSrc) {
  stopGalleryAnimation();
  fullscreenImage.src = imageSrc;
  fullscreenOverlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable body scroll
}

function closeFullscreenImage() {
  startGalleryAnimation();
  fullscreenImage.src = "";
  fullscreenOverlay.style.display = "none";
  document.body.style.overflow = "auto"; // Enable body scroll
}

//!page
function handleViewMoreClick() {
  const animatedPageTransition = document.querySelector(
    ".animated-page-transition"
  );
  animatedPageTransition.classList.add("active");

  setTimeout(() => {
    // Replace the URL with the actual path to your Gallery.html page
    window.location.href = "index.html";
  }, 800); // Adjust the delay to match the transition duration in CSS (800ms in this example)
}

//! Attach the click event to the "View more" button
const viewMoreButton = document.querySelector(".buttonBk a");
viewMoreButton.addEventListener("click", (event) => {
  event.preventDefault();
  handleViewMoreClick();
});
