window.addEventListener("DOMContentLoaded", async () => {
  const productForm = document.getElementById("productForm");

  const pd = new ProductService();
  const ui = new UI();

  const res = await pd.getProduts();
  console.log(res.products);

  ui.renderProducts(res.products, res.nameMenu);

  /* const products = await PD.getProduts();
  console.log(products); */

  productForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = e.target["name"].value;
    const desc = e.target["desc"].value;
    const price = e.target["price"].value;
    const product = { email: localStorage.getItem("email"), name, desc, price };
    //console.log(product);

    //ProductData.email = localStorage.getItem("email");
    const response = await pd.postProduct(product);
    console.log(response.products);
    ui.renderProducts(response.products, res.nameMenu);
    ui.clearBookForm();
  });
});

// UI
function UI() {
  this.renderProducts = async function (products, title) {
    document.getElementById("menuOption").innerHTML = title;
    document.querySelector(".productsTitle").innerHTML = title;
    //const products = await ProductService.getProduts();
    const gridProducts = document.getElementById("gridProducts");
    gridProducts.innerHTML = "";
    products.forEach((product) => {
      const div = document.createElement("div");
      div.className = "product";
      // quitar http://loclahost:3000 en entorno de produccion
      div.innerHTML = `
        <p class="productTitle">
            ${product.name}
        </p>
        <p class="desc">
            ${product.desc}
        </p>
        <p class="price">
              $ ${product.price}
        </p>
              `;
      gridProducts.appendChild(div);
    });
  };

  this.addNewBook = async function (book) {
    await bookService.postBook(book);
    this.clearBookForm();
    this.renderBooks();
  };

  this.clearBookForm = function () {
    document.getElementById("productForm").reset();
  };

  /* this.renderMessage = function () {
  
      }; */

  this.deleteBook = async function (bookId) {
    await bookService.deleteBook(bookId);
    this.renderBooks();
  };
}

// Product service
function ProductService() {
  this.URI = "http://localhost:3000/api/products";

  this.getProduts = async function () {
    //const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const res = await fetch(this.URI, {
      method: "PUT",
      body: JSON.stringify({ email: email }),
      headers: {
        "content-type": "application/json",
      },
    });
    const products = await res.json();
    return products;
  };

  this.postProduct = async function (product) {
    const res = await fetch(this.URI, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };
}
