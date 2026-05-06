const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.2)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)";
  });
});


const overlay = document.createElement("div");
const fullImg = document.createElement("img");


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


fullImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 10px;
`;


overlay.appendChild(fullImg);
document.body.appendChild(overlay);


const pics = document.querySelectorAll(".pic");


pics.forEach(pic => {
    pic.style.cursor = "pointer"; 
    pic.addEventListener("click", () => {
        fullImg.src = pic.src;
        overlay.style.display = "flex";
    });
});


overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

const button = document.querySelector("#submit-button");
let fullName;
let email;
let message;


window.addEventListener("load", () => {
  const savedData = localStorage.getItem("formData")

  if (savedData) {
    const parsed = JSON.parse(savedData)

    
    document.querySelector("#full-name").value = parsed.fullName || ""
    document.querySelector("#email").value = parsed.email || ""
    document.querySelector("#message").value = parsed.message || ""
  }
})

button.addEventListener("click", (event) => {
  event.preventDefault();

 
  fullName = document.querySelector("#full-name").value;
  email = document.querySelector("#email").value;
  message = document.querySelector("#message").value;

 
  localStorage.setItem("formData", JSON.stringify({ fullName, email, message }))
});






