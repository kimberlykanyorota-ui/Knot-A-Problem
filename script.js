const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.2)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)";
  });
});

// Create the overlay
const overlay = document.createElement("div");
const fullImg = document.createElement("img");

// Style the overlay
overlay.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: pointer;
`;

// Style the full image
fullImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 10px;
`;

// Put the image inside the overlay and add to page
overlay.appendChild(fullImg);
document.body.appendChild(overlay);

// Get all pattern images
const pics = document.querySelectorAll(".pic");

// When any image is clicked, show it fullscreen
pics.forEach(pic => {
    pic.style.cursor = "pointer"; // changes mouse to pointer on hover
    pic.addEventListener("click", () => {
        fullImg.src = pic.src;
        overlay.style.display = "flex";
    });
});

// When overlay is clicked, close it
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

const button = document.querySelector("#submit-button");
let fullName;
let email;
let message;

button.addEventListener("click", (event) => {
  // prevent form from refreshing the page
  event.preventDefault();
  // retrieve values from the form
  fullName = document.querySelector("#full-name").value;

  email = document.querySelector("#email").value;

  message = document.querySelector("#message").value;

  h1.textContent = fullName;
  headerParagraph.textContent = message;
});



