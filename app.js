//? Function to add 3D-like movement effect to the img element
function add3DMovementToImg() {
  const img = document.querySelector("#hero img");

  // Add mousemove event listener to the document
  document.addEventListener("mousemove", (e) => {
    // Get the mouse position relative to the center of the image
    const mouseX = e.clientX - img.offsetLeft - img.width / 2;
    const mouseY = e.clientY - img.offsetTop - img.height / 2;

    // Calculate the rotation angles for the img element based on mouse position
    const rotateX = (mouseY / img.offsetHeight) * 15; // Adjust the multiplier for desired rotation speed
    const rotateY = (mouseX / img.offsetWidth) * 15; // Adjust the multiplier for desired rotation speed

    // Apply GSAP animation to rotate the img element
    gsap.to(img, {
      duration: 0.5, // Adjust the duration of the animation
      rotationX: rotateX,
      rotationY: rotateY,
      ease: "power2.out", // Adjust the ease function for smoother animation
    });
  });
}
// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  add3DMovementToImg();
});

//? Funtion to creat card
document.addEventListener("DOMContentLoaded", () => {
  const cardData = [
    {
      imgSrc: "Img/Cards/Farcry6.jpg",
      company: "Ubisoft",
      title: "Farcry 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sed.",
      price: "$40",
      iconClass: "fa-shopping-cart",
    },
    {
      imgSrc: "Img/Cards/Cyberpunk.jpg",
      company: "Game Company",
      title: "Cyberpunk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sed.",
      price: "$25",
      iconClass: "fa-shopping-cart",
    },
    {
      imgSrc: "Img/Cards/fifa.jpg",
      company: "Game Company",
      title: "Fifa 23",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sed.",
      price: "$25",
      iconClass: "fa-shopping-cart",
    },
    {
      imgSrc: "Img/Cards/rdr2.jpg",
      company: "Game Company",
      title: "Red dead 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sed.",
      price: "$25",
      iconClass: "fa-shopping-cart",
    },
  ];

  // Function to create and append the cards
  function createCards() {
    const proContainer = document.querySelector(".pro-container");

    // Loop through the cardData array
    cardData.forEach((data) => {
      // Create the main card container
      const card = document.createElement("div");
      card.classList.add("pro");

      // Create the image element
      const img = document.createElement("img");
      img.src = data.imgSrc;
      card.appendChild(img);

      // Create the description container
      const descriptionContainer = document.createElement("div");
      descriptionContainer.classList.add("des");

      // Create the elements for the description
      const company = document.createElement("span");
      company.textContent = data.company;

      const title = document.createElement("h5");
      title.textContent = data.title;

      const description = document.createElement("p");
      description.textContent = data.description;

      const price = document.createElement("h4");
      price.textContent = data.price;

      descriptionContainer.appendChild(company);
      descriptionContainer.appendChild(title);
      descriptionContainer.appendChild(description);
      descriptionContainer.appendChild(price);

      card.appendChild(descriptionContainer);

      // Create the cart icon with the link
      const cartLink = document.createElement("a");
      cartLink.href = "#";

      const cartIcon = document.createElement("i");
      cartIcon.classList.add("fas", data.iconClass); // Use 'fas' for solid style or 'far' for regular style

      cartLink.appendChild(cartIcon);
      card.appendChild(cartLink);

      // Append the card to the container
      proContainer.appendChild(card);
    });
  }
  // Call the createCards function
  createCards();
});

//?Div cards
const bannerBox1 = document.getElementById("banner-box1");
const bannerBox2 = document.getElementById("banner-box2");
const bannerBox3 = document.getElementById("banner-box3");
const bannerBox4 = document.getElementById("banner-box4");
bannerBox1.addEventListener("click", () => {
  window.location.href = "shop.html";
});
bannerBox2.addEventListener("click", () => {
  window.location.href = "Shop/shop.html";
});
bannerBox3.addEventListener("click", () => {
  window.location.href = "Shop/shop.html";
});
bannerBox4.addEventListener("click", () => {
  window.location.href = "Shop/shop.html";
});
