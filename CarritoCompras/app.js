// URL de la API
const url = "https://fakestoreapi.com/products?limit=5";

fetch(url)
  .then((res) => res.json())
  .then((products) => {
    products.forEach((product) => {
      const body = document.getElementById("Contenedor");
      const divProduct = document.createElement("div");

      divProduct.innerHTML = `<strong>${product.title}</strong><br>
      <img style="width: 100px; height: 100px;" src=${product.image} alt="">
      <br> Precio: ${product.price}<br><button data-id="${product.id}"> Agregar a carrito</button><br><br>`;

      body.appendChild(divProduct);

      const Carrito = document.getElementById("Carrito");
      const agregar = divProduct.querySelector("button");
      const divProductCarrito = document.createElement("div");

      agregar.addEventListener("click", () => {
        divProductCarrito.innerHTML = `
                            <strong>${product.title}</strong><br>
                            <img style="width: 50px; height: auto;" src="${product.image}" alt="Producto">
                            <br> Precio: ${product.price}<br><button> Eliminar del carrito</button><br><br>
                        `;
        Carrito.appendChild(divProductCarrito);

        const eliminar = divProductCarrito.querySelector("button");

        eliminar.addEventListener("click", () => {
          divProductCarrito.remove();
        });
      });

      console.log(products);
    });
  });
