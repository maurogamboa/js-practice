/**
 * funcion que devuelve el nombre de un producto
 * @param {*} idProducto  - ID del elemento html
 */
export function obtenerNombreProducto(idProducto) {
  const producto = document.getElementById(idProducto);
  return producto.children[0].textContent;
}

/**
 * funcion que devuelve el boton `comprar` asociado a un producto
 * @param {*} idProducto  - ID del elemento html
 */
export function obtenerBotonComprar(idProducto) {
  //Pendiente por hacer...
}
