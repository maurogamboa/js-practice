import { obtenerNombreProducto } from "./productos";

/**
 * Agrega un producto al carrito de compras
 */

export function agregarProducto(nombredelProducto) {
  //let product = document.getElementById("producto-1");
  //let hijo0 = product.children[0];
  let textHijo = obtenerNombreProducto(nombredelProducto);

  let nuevoSpan = document.createElement("p");
  let textoNuevo = document.createTextNode(textHijo);
  nuevoSpan.appendChild(textoNuevo);

  let carritoCompras = document.getElementById("carrito-compras");
  carritoCompras.appendChild(nuevoSpan);
  return nuevoSpan;
}
