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

console.log(pedido);