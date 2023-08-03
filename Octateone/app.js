const hero = document.querySelector(".hero");
const heroTitle = hero.querySelector("h1");

// Y value at which trailer switches to absolute positioning and scrolls up
const threshold = window.innerHeight;

window.addEventListener("scroll", function () {
  // scale up hero section until scale is 20x
  // and fade out hero title
  let scale = 1 + window.scrollY / 25;
  let opacity = 100 - window.scrollY * 1.5;
  if (scale < 20) {
    hero.style.transform = `scale(${scale})`;
    heroTitle.style.opacity = opacity * 0.01;
  }

  // toggle threshold class at threshold value
  window.scrollY > threshold
    ? document.body.classList.add("past-threshold")
    : document.body.classList.remove("past-threshold");
});

//cards
document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");
  const cardContainer = document.querySelector(".card-container");
  const cards = document.querySelectorAll(".card");

  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  nextButton.addEventListener("click", nextCard);
});

//Prelaoder

var loader = document.getElementById("perloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//transition

// Add this function to handle the page transition when clicking the "View more" button
function handleViewMoreClick() {
  const animatedPageTransition = document.querySelector(
    ".animated-page-transition"
  );
  animatedPageTransition.classList.add("active");

  setTimeout(() => {
    // Replace the URL with the actual path to your Gallery.html page
    window.location.href = "Gallery.html";
  }, 800); // Adjust the delay to match the transition duration in CSS (800ms in this example)
}

// Attach the click event to the "View more" button
const viewMoreButton = document.querySelector(".button-4 a");
viewMoreButton.addEventListener("click", (event) => {
  event.preventDefault();
  handleViewMoreClick();
});
