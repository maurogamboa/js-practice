import "./styles.css";

const listaProductos = [
  {
    titulo: "Pantalon Magali Talla XXL",
  },
  {
    titulo: "Medias Deportivas Adaidasas",
  },
];

const productContainer = document.getElementById("listaProductos");

function renderizarProductos(producto) {
  const newDiv = document.createElement("div");

  const nombreProducto = document.createElement("span");
  const comprar = document.createElement("button");

  const textNombreProducto = document.createTextNode(producto.titulo);
  nombreProducto.appendChild(textNombreProducto);

  comprar.textContent = "Comprar";

  newDiv.appendChild(nombreProducto);
  newDiv.appendChild(comprar);

  productContainer.appendChild(newDiv);
}

function cargarWin() {
  listaProductos.forEach(renderizarProductos);
}

window.onload = cargarWin;
