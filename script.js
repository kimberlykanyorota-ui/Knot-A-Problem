const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.2)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)";
  });
});
