//import { obtenerNombreProducto } from "./productos";
import { obtenerBotonComprar } from "./productos";
import { agregarProducto } from "./carrito";
import "./styles.css";

function clickBoton1() {
  agregarProducto("producto-1");
}
function clickBoton2() {
  agregarProducto("producto-2");
}
function clickBoton3() {
  agregarProducto("producto-3");
}
function clickBoton4() {
  agregarProducto("producto-4");
}

const botonUno = obtenerBotonComprar("producto-1");
botonUno.addEventListener("click", clickBoton1);

const botonDos = obtenerBotonComprar("producto-2");
botonDos.addEventListener("click", clickBoton2);

const botonTres = obtenerBotonComprar("producto-3");
botonTres.addEventListener("click", clickBoton3);

const botonCuatro = obtenerBotonComprar("producto-4");
botonCuatro.addEventListener("click", clickBoton4);
