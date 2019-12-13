// READ
// Fíjate que lo único que realmente hacemos aquí es añadir y quitar la clase
// "open" al div "modal-outer". Todo lo demás se hace con CSS.

const cards = document.querySelectorAll(".card");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

// Functions
function handleCardButtonClick(e) {
  const card = e.target.closest(".card");
  const desc = card.dataset.description;
  const src = card.querySelector("img").src;
  const title = card.querySelector("h2").textContent;

  // Escribir el contenido del modal
  modalInner.innerHTML = `
    <img height="600" width="600" src="${src.replace(
      "200",
      "600"
    )}" alt="${desc}" />
    <p>${title}</p>
  `;

  // Agregar la clase para que se muestre. La animación es CSS.
  modalOuter.classList.add("open");
}

function closeModal() {
  modalOuter.classList.remove("open");
}

// Event listeners
cards.forEach(card => card.addEventListener("click", handleCardButtonClick));

modalOuter.addEventListener("click", e => {
  const close = !e.target.closest(".modal-inner");
  if (close) {
    closeModal();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
  }
});
