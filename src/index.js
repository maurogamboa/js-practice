import { renderizarProducto } from "./productos";
import "./styles.css";

const listaProductos = [
  {
    titulo: "Pantalon Magali Talla XXL",
  },
  {
    titulo: "Medias Deportivas Adaidasas",
  },
];

function cargarWin() {
  listaProductos.forEach(renderizarProducto);
}

window.onload = cargarWin;
