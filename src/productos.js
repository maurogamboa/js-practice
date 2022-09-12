/**
 * funcion que devuelve el nombre de un producto
 * @param {*} idProducto  - ID del elemento html
 */
export function obtenerNombreProducto(idProducto) {
  const producto = document.getElementById(idProducto);
  //return producto.children[1].textContent;
  const span = producto.children[0];
  const nombreProducto = span.textContent;
  return nombreProducto;
}

/**
 * funcion que devuelve el boton `comprar` asociado a un producto
 * @param {*} idProducto  - ID del elemento html
 */
export function obtenerBotonComprar(idProducto) {
  //Pendiente por hacer...
  const product = document.getElementById(idProducto);
  return product.children[1];
}

const productContainer = document.getElementById("listaProductos");

export function renderizarProducto(producto) {
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
