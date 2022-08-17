import { obtenerNombreProducto } from "./productos";

/**
 * Agrega un producto al carrito de compras
 */
export function agregarProducto1(nombredelProducto) {
  //let product = document.getElementById("producto-1");
  //let hijo0 = product.children[0];
  let textHijo = obtenerNombreProducto("producto-1");

  let nuevoSpan = document.createElement("p");
  let textoNuevo = document.createTextNode(textHijo);
  nuevoSpan.appendChild(textoNuevo);

  let carritoCompras = document.getElementById("carrito-compras");
  carritoCompras.appendChild(nuevoSpan);
  return nuevoSpan;
}

export function agregarProducto2(nombredelProducto) {
  //let product = document.getElementById("producto-1");
  //let hijo0 = product.children[0];
  let textHijo = obtenerNombreProducto("producto-2");

  let nuevoSpan = document.createElement("p");
  let textoNuevo = document.createTextNode(textHijo);
  nuevoSpan.appendChild(textoNuevo);

  let carritoCompras = document.getElementById("carrito-compras");
  carritoCompras.appendChild(nuevoSpan);
  return nuevoSpan;
}

export function agregarProducto3(nombredelProducto) {
  //let product = document.getElementById("producto-1");
  //let hijo0 = product.children[0];
  let textHijo = obtenerNombreProducto("producto-3");

  let nuevoSpan = document.createElement("p");
  let textoNuevo = document.createTextNode(textHijo);
  nuevoSpan.appendChild(textoNuevo);

  let carritoCompras = document.getElementById("carrito-compras");
  carritoCompras.appendChild(nuevoSpan);
  return nuevoSpan;
}

export function agregarProducto4(nombredelProducto) {
  //let product = document.getElementById("producto-1");
  //let hijo0 = product.children[0];
  let textHijo = obtenerNombreProducto("producto-4");

  let nuevoSpan = document.createElement("p");
  let textoNuevo = document.createTextNode(textHijo);
  nuevoSpan.appendChild(textoNuevo);

  let carritoCompras = document.getElementById("carrito-compras");
  carritoCompras.appendChild(nuevoSpan);
  return nuevoSpan;
}
