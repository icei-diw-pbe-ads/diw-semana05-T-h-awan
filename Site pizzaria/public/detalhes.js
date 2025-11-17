// busca idPizza da URL, carrega pizzas.json e monta a view de detalhes
document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  const id = parseInt(parametros.get("idPizza"), 10);

  const area = document.getElementById("detalhes-container");
  if (Number.isNaN(id)) {
    area.innerHTML = `<div class="alert alert-warning">ID inválido. <a href="index.html">Voltar</a></div>`;
    return;
  }

  fetch("pizzas.json")
    .then(res => {
      if (!res.ok) throw new Error("Não foi possível carregar pizzas.json");
      return res.json();
    })
    .then(pizzas => {
      const pizza = pizzas.find(p => Number(p.codigo) === id);
      if (!pizza) {
        area.innerHTML = `<div class="alert alert-danger">Pizza não encontrada. <a href="index.html">Voltar</a></div>`;
        return;
      }

      // ingredientes pode estar no JSON; se existir, monta lista
      let ingredientesHtml = "";
      if (pizza.ingredientes && Array.isArray(pizza.ingredientes)) {
        ingredientesHtml = `
          <h6>Ingredientes</h6>
          <ul>${pizza.ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>
        `;
      }

      area.innerHTML = `
        <div class="card mx-auto" style="max-width: 900px;">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="${pizza.foto}" class="img-fluid rounded-start" alt="${pizza.nome}" style="height:100%; object-fit:cover;">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h2 class="card-title">${pizza.nome}</h2>
                <p class="card-text">${pizza.texto || ""}</p>
                ${ingredientesHtml}
                <p class="mt-3"><strong>Preço:</strong> ${pizza.preco || "—"}</p>
                <div class="d-flex gap-2 mt-3">
                  <a href="index.html" class="btn btn-danger">Voltar ao Cardápio</a>
                  <button id="btn-pedir" class="btn btn-outline-danger">Pedir Agora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // exemplo de ação do botão (apenas demonstração)
      const btnPedir = document.getElementById("btn-pedir");
      btnPedir.addEventListener("click", () => {
        alert(`Pedido iniciado: ${pizza.nome} — ${pizza.preco || ""}`);
      });
    })
    .catch(err => {
      console.error(err);
      area.innerHTML = `<div class="alert alert-danger">Erro ao carregar dados. <a href="index.html">Voltar</a></div>`;
    });
});