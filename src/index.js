//import { obtenerNombreProducto } from "./productos";
import { obtenerBotonComprar } from "./productos";
import { agregarProducto1 } from "./carrito";
import { agregarProducto2 } from "./carrito";
import { agregarProducto3 } from "./carrito";
import { agregarProducto4 } from "./carrito";
import "./styles.css";

/* 
 Requerimiento:
 ==================
 Al hacer click en el boton 'comprar' en cualquiera de los productos 
 de la lista, el nombre del producto seleccionado se debe
 agregar en el area del 'Carrito de compras'.

 Ejemplo: 
 1. Click en 'comprar' en el producto llamado 'Bebida Energetica'
 2. 'Bebida Energetica' debe aparecer debajo del area 'Carrito de compras'

 Notas tecnicas:
 - Cada producto tiene un ID (usar el metodo `getElementById`)
 - Puedes utilizar el metodo `children` (array) para acceder a los hijos de un elemento
 - Se debe agregar un evento (event listener) del tipo 'click' 
   en los botones de cada producto
 - Se debe crear un funcion para manejar los eventos
*/

//Ejemplo para obtener el nombre del primer producto
//const nombreProducto1 = obtenerNombreProducto("producto-1");
//console.log("nombre:", nombreProducto1);

function clickBoton1() {
  agregarProducto1();
}
function clickBoton2() {
  agregarProducto2();
}
function clickBoton3() {
  agregarProducto3();
}
function clickBoton4() {
  agregarProducto4();
}

const botonUno = obtenerBotonComprar("producto-1");
botonUno.addEventListener("click", clickBoton1);

const botonDos = obtenerBotonComprar("producto-2");
botonDos.addEventListener("click", clickBoton2);

const botonTres = obtenerBotonComprar("producto-3");
botonTres.addEventListener("click", clickBoton3);

const botonCuatro = obtenerBotonComprar("producto-4");
botonCuatro.addEventListener("click", clickBoton4);
