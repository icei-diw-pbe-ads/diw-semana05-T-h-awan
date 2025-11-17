const cadastro = {
  nome: "João Silva",
  telefone: "11999999999",
  endereco: {
    rua: "Rua das Pizzas",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP"
  },
  favorito: "Pizza de Calabresa"
};

console.log(cadastro);


// Cardápio de Pizzas
const cardapio = [
  {
    nome: "Calabresa",
    ingredientes: ["Molho de tomate", "Mussarela", "Calabresa", "Cebola", "Azeitona"],
    preco: 39.90
  },
  {
    nome: "Marguerita",
    ingredientes: ["Molho de tomate", "Mussarela", "Tomate", "Manjericão", "Azeitona"],
    preco: 42.90
  },
  {
    nome: "Frango com Catupiry",
    ingredientes: ["Molho de tomate", "Mussarela", "Frango desfiado", "Catupiry", "Azeitona"],
    preco: 44.90
  }
];

console.log(cardapio);

const pedido = {
  cliente: {
    nome: "Maria Oliveira",
    telefone: "11988887777"
  },
  enderecoEntrega: {
    rua: "Rua das Flores",
    numero: 456,
    bairro: "Jardim Primavera",
    cidade: "São Paulo",
    estado: "SP"
  },
  pizzas: [
    {
      sabor: "Calabresa",
      tamanho: "Grande",
      quantidade: 1
    },
    {
      sabor: "Marguerita",
      tamanho: "Média",
      quantidade: 2
    }
  ],
  pagamento: {
    forma: "Cartão de Crédito",
    total: 125.70
  },
  observacoes: "Sem cebola na Marguerita"
};
const listaDePizzas = [
  {
    codigo: 1,
    nome: "Calabresa",
    foto: "calabresa.png",
    texto: "Deliciosa pizza de calabresa com cebola e azeitonas.",
    preco: "R$ 39,90"
  },
  {
    codigo: 2,
    nome: "Marguerita",
    foto: "marguerita.png",
    texto: "Tradicional marguerita com tomate, manjericão e mussarela.",
    preco: "R$ 42,90"
  },
  {
    codigo: 3,
    nome: "Frango com Catupiry",
    foto: "frango_catupiry.png",
    texto: "Frango desfiado com catupiry e azeitonas.",
    preco: "R$ 44,90"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  fetch("pizzas.json")
    .then(res => res.json())
    .then(listaDePizzas => {
      montarCarousel(listaDePizzas);
      montarCardapioNaHome(listaDePizzas);
    })
    .catch(err => console.error("Erro carregando pizzas.json:", err));
});

function montarCarousel(pizzas) {
  if (!pizzas || pizzas.length === 0) return;

  const container = document.getElementById("carousel-container");

  const carouselId = "pizzaCarousel";
  const indicators = document.createElement("div");
  indicators.className = "carousel-indicators";

  const inner = document.createElement("div");
  inner.className = "carousel-inner";

  pizzas.forEach((pizza, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-bs-target", `#${carouselId}`);
    btn.setAttribute("data-bs-slide-to", String(i));
    if (i === 0) btn.classList.add("active");
    indicators.appendChild(btn);

    const item = document.createElement("div");
    item.className = "carousel-item" + (i === 0 ? " active" : "");
    item.innerHTML = `
      <img src="${pizza.foto}" class="d-block w-100" alt="${pizza.nome}" style="max-height:400px; object-fit:cover;">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-2">
        <h5>${pizza.nome}</h5>
        <p class="mb-0">${pizza.preco}</p>
      </div>
    `;
    inner.appendChild(item);
  });

  const carousel = document.createElement("div");
  carousel.id = carouselId;
  carousel.className = "carousel slide";
  carousel.setAttribute("data-bs-ride", "carousel");

  // controles
  const prev = `<button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>`;
  const next = `<button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Próximo</span>
  </button>`;

  carousel.appendChild(indicators);
  carousel.appendChild(inner);
  carousel.insertAdjacentHTML("beforeend", prev + next);

  container.appendChild(carousel);
}

function montarCardapioNaHome(listaDePizzas) {
  const lugarDasPizzas = document.getElementById("cardapio");
  const row = document.createElement("div");
  row.classList.add("row", "g-3");

  listaDePizzas.forEach(pizza => {
    const caixa = document.createElement("div");
    caixa.classList.add("col-12", "col-sm-6", "col-md-4");

    caixa.innerHTML = `
      <div class="card h-100">
        <a href="detalhes.html?idPizza=${pizza.codigo}">
          <img src="${pizza.foto}" class="card-img-top" alt="${pizza.nome}" style="height:200px; object-fit:cover;">
        </a>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${pizza.nome}</h5>
          <p class="card-text flex-grow-1">${pizza.texto}</p>
          <div class="d-flex justify-content-between align-items-center">
            <strong>${pizza.preco}</strong>
            <a class="btn btn-sm btn-danger" href="detalhes.html?idPizza=${pizza.codigo}">Detalhes</a>
          </div>
        </div>
      </div>
    `;
    row.appendChild(caixa);
  });

  lugarDasPizzas.appendChild(row);
}

window.onload = montarCardapioNaHome;
console.log(pedido);