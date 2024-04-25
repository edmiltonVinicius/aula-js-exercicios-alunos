document.addEventListener("DOMContentLoaded", function () {
  // Array de objetos com todos os produtos
  const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 1500 },
    { id: 2, name: "Laptop", category: "electronics", price: 3000 },
    { id: 3, name: "Book of javascript", category: "books", price: 100 },
    { id: 4, name: "T-shirt", category: "clothing", price: 1500 },
  ];

  // Array (lista) que armazena os produtos adicionados ao carrinho
  let cart = [];

  // Elementos do DOM 
  const filterCategory = document.getElementById("filterCategory");
  const renderListProducts = document.getElementById("listProducts");
  const totalCart = document.querySelector("#totalCart");

  // Função que renderiza a lista de produtos
  function listProducts(categorySelected) {

    // Filtra a lista de produtos
    const productsToCategory = products.filter((product) => {

      // Se a categoria selecionada for "all", retorna todos os produtos
      if (categorySelected === "all") {
        return product;
      }

      // Se a categoria do produto for igual a categoria selecionada, retorna o produto
      if (product.category === categorySelected) {
        return product;
      }
    });

    // percorre a lista de produtos filtrada
    productsToCategory.forEach((product) => {

      // Cria um elemento li para cada produto
      const item = document.createElement("li");
      item.textContent = `${product.name} - R$${product.price}`;

      // Cria um botão para adicionar o produto ao carrinho
      const buttonAdd = document.createElement("button");
      buttonAdd.textContent = "Add to cart";
      buttonAdd.onclick = function () {
        addProductToCart(product);
      };

      // Adiciona o botão ao item
      item.appendChild(buttonAdd);

      // Adiciona o item a lista de produtos
      renderListProducts.appendChild(item);
    });
  }

  // Função que adiciona um produto ao carrinho
  function addProductToCart(product) {

    // Adiciona o produto ao carrinho
    cart.push(product);

    // Renderiza o carrinho
    calculateTotal();
  }

  // Função que calcula o total do carrinho
  function calculateTotal() {
    
    // Soma o preço de todos os produtos no carrinho
    const total = cart.reduce((accumulator, currentProduct) => accumulator + currentProduct.price, 0);

    // Atualiza o total do carrinho
    totalCart.textContent = `R$${total}`;
  }

  // Evento que escuta a mudança de categoria
  filterCategory.addEventListener("change", function (event) {

    // Limpa a lista de produtos com a categoria selecionada
    listProducts(event.target.value);
  });

  // Renderiza a lista de produtos no carregamento da paginas
  listProducts("all");
});
