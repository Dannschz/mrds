window.addEventListener("DOMContentLoaded", async () => {
  const ui = new UI();
  console.log("ie");

});

// UI
function UI() {
  this.renderProducts = async function (restaurantes) {
    //document.getElementById("menuOption").innerHTML = title;
    //document.querySelector(".productsTitle").innerHTML = title;
    //const products = await ProductService.getProduts();
    const gridrestaurantes = document.getElementById("gridRestaurantes");
    gridrestaurantes.innerHTML = "";
    restaurantes.forEach((rest) => {
      const div = document.createElement("div");
      div.className = "restaurante";
      // quitar http://loclahost:3000 en entorno de produccion
      div.innerHTML = `
              <a href="/ie/rest"><h4 class="resTitle">${rest.name}</h4></a>
              <h5 class="text-muted">descripción</h5>
              `;
      gridrestaurantes.appendChild(div);
    });
  };
}
