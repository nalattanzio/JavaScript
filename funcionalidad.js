/* CLASE 10 */

var nombre = "Andres";
var apellido = "Lattanzio";

console.log(nombre+" "+apellido);

var num1 = 23;
var num2 = 45;
var res = num1 + num2;

console.log(res);



/* CLASE 11 */

/* HELADERIA */


function calcularPrecio(){
  
  var tamanio;
  var topping;
  var precio;
  var frutilla;
  var naranja;
  var limon;
  var ddleche;
  var chocolate;
  var vainilla;
  var tramontana;
  var fdbosque;
  var cdalmendra;
  var cantSabores;
  var listaSabores;
  var huboError = false;

  const radios = document.getElementsByName('tamanio');
  for (const radio of radios) {
    if (radio.checked) {
      tamanio = radio.value;
      break;
    }
  }

  switch (tamanio){
    case "1 bocha":
      precio = 10;
      break;
    case "2 bochas":
      precio = 18;
      break;
    case "3 bochas":
      precio = 27;
      break;
    case "Cono Dulce":
      precio = 33;
      break;
    case "Tasita":
      precio = 30;
      break;
    case "1/4 Kg":
      precio = 35;
      break;
    case "1/2 Kg":
      precio = 65;
      break;
    case "1 Kg":
      precio = 120;
  }

  const radio2 = document.getElementsByName('topping');
  for (const radio of radio2) {
    if (radio.checked) {
      topping = radio.value;
      break;
    }
  }
  
  switch (topping){
    case "Oreo":
      precio = precio + 5;
      break;
    case "KitKat":
      precio = precio + 6;
      break;
    case "Kinder":
      precio = precio + 7;
  }


  frutilla = document.getElementById("frutilla");
  naranja = document.getElementById("naranja");
  limon = document.getElementById("limon");
  ddleche = document.getElementById("ddleche");
  chocolate = document.getElementById("chocolate");
  vainilla = document.getElementById("vainilla");
  tramontana = document.getElementById("tramontana");
  fdbosque = document.getElementById("fdbosque");
  cdalmendra = document.getElementById("cdalmendra");
  cantSabores = 0;
  listaSabores = "";

  if (frutilla.checked){
    cantSabores++;
    listaSabores = listaSabores + "Frutilla ";
  }
  if (naranja.checked){
    cantSabores++;
    listaSabores = listaSabores + "Naranja ";
  }
  if (limon.checked){
    cantSabores++;
    listaSabores = listaSabores + "Limón ";
  }
  if (ddleche.checked){
    cantSabores++;
    listaSabores = listaSabores + "Dulce de leche ";
  }
  if (chocolate.checked){
    cantSabores++;
    listaSabores = listaSabores + "Chocolate ";
  }
  if (vainilla.checked){
    cantSabores++;
    listaSabores = listaSabores + "Vainilla ";
  }
  if (tramontana.checked){
    cantSabores++;
    listaSabores = listaSabores + "Tramontana ";
  }
  if (fdbosque.checked){
    cantSabores++;
    listaSabores = listaSabores + "Frutos del bosque ";
  }
  if (cdalmendra.checked){
    cantSabores++;
    listaSabores = listaSabores + "Crema de almendras ";
  }
  
  switch (tamanio){
    case "1 bocha":
      if (cantSabores > 1){
        alert("Solo puede elegir 1 gusto");
        huboError = true;
      }
      break;
    case "2 bochas":
    case "Cono Dulce":
    case "Tasita":
      if (cantSabores > 2){
        alert("Puede elegir hasta 2 Sabores");
        huboError = true;
      }
      break;
    case "3 bochas":
    case "1/4 Kg":
      if (cantSabores > 3){
        alert("Puede elegir hasta 3 Sabores");
        huboError = true;
      }
      break;
    case "1/2 Kg":
    case "1 Kg":
      if (cantSabores > 4){
        alert("Puede elegir hasta 4 Sabores");
        huboError = true;
      }
  }

  switch (huboError) {
    case true:
      alert("Por favor revise su pedido");
      break;
    case false:
      alert("SU COMPRA:  TAMAÑO: " + tamanio + "   SABORES: " + cantSabores + " (" + listaSabores + ")   TOPPING: " + topping + "   A PAGAR: $" + precio + ".-");
  }
}