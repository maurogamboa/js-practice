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
