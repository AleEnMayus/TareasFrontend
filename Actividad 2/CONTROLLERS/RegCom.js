document.addEventListener("DOMContentLoaded", () => {
  const foodForm = document.getElementById("foodForm");
  const foodList = document.getElementById("foodList");

  const comidas = [];

  foodForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("foodName").value.trim();
    const tipo = document.getElementById("foodType").value.trim();
    const calorias = document.getElementById("calories").value.trim();

    if (nombre && tipo && calorias) {
      const comida = { nombre, tipo, calorias };
      comidas.push(comida);
      renderComidas();
      foodForm.reset();
    }
  });

  function renderComidas() {
    foodList.innerHTML = "";

    comidas.forEach((comida, index) => {
      const card = document.createElement("div");
      card.className = "card mb-3";
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${comida.nombre}</h5>
          <p class="card-text">Tipo: ${comida.tipo}</p>
          <p class="card-text">Calorías: ${comida.calorias}</p>
        </div>
      `;
      foodList.appendChild(card);
    });
  }
});
