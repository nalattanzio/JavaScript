/* CLASE 11 */

/* HELADERIA */

var tamanio;
var topping;
var precio;
var cantSabores;
var listaSabores = [];
var huboError = new Boolean();

function calcularPrecio() {
  envase();

  if (huboError == false) {
    sabores();

    if (huboError == false) {
      saboresPorEnvase();

      if (huboError == false) {
        aderezo();
        precios();
        detalleCompra();
      } else {
        rutinaError();
      }
    } else {
      rutinaError();
    }
  } else {
    rutinaError();
  }
}

function envase() {
  tamanio = "";
  const radios = document.getElementsByName("tamanio");
  for (const radio of radios) {
    if (radio.checked) {
      tamanio = radio.value;
    }
  }

  if (tamanio !== "") {
    huboError = false;
  }
}

function sabores() {
  var frutilla = document.getElementById("frutilla");
  var naranja = document.getElementById("naranja");
  var limon = document.getElementById("limon");
  var ddleche = document.getElementById("ddleche");
  var chocolate = document.getElementById("chocolate");
  var vainilla = document.getElementById("vainilla");
  var tramontana = document.getElementById("tramontana");
  var fdbosque = document.getElementById("fdbosque");
  var cdalmendra = document.getElementById("cdalmendra");
  cantSabores = 0;
  listaSabores = [];

  if (frutilla.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Frutilla ";
  }
  if (naranja.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Naranja ";
  }
  if (limon.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Limón ";
  }
  if (ddleche.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Dulce de leche ";
  }
  if (chocolate.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Chocolate ";
  }
  if (vainilla.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Vainilla ";
  }
  if (tramontana.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Tramontana ";
  }
  if (fdbosque.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Frutos del bosque ";
  }
  if (cdalmendra.checked) {
    cantSabores++;
    listaSabores = listaSabores + "Crema de almendras ";
  }

  if (cantSabores !== 0) {
    huboError = false;
  }
}

function saboresPorEnvase() {
  switch (tamanio) {
    case "1 bocha":
      if (cantSabores !== 1) {
        alert("Solo puede elegir 1 gusto");
        huboError = true;
      } else {
        huboError = false;
      }
      break;

    case "2 bochas":
    case "Cono Dulce":
    case "Tasita":
      if (cantSabores > 2) {
        alert("Puede elegir hasta 2 Sabores");
        huboError = true;
      } else {
        huboError = false;
      }
      break;

    case "3 bochas":
    case "1/4 Kg":
      if (cantSabores > 3) {
        alert("Puede elegir hasta 3 Sabores");
        huboError = true;
      } else {
        huboError = false;
      }
      break;

    case "1/2 Kg":
    case "1 Kg":
      if (cantSabores > 4) {
        alert("Puede elegir hasta 4 Sabores");
        huboError = true;
      } else {
        huboError = false;
      }
  }
}

function aderezo() {
  topping = "";
  const radio2 = document.getElementsByName("topping");
  for (const radio of radio2) {
    if (radio.checked) {
      topping = radio.value;
    }
  }

  if (topping == "") {
    topping = "sin topping";
  }
}

function precios() {
  switch (tamanio) {
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

  switch (topping) {
    case "Oreo":
      precio = precio + 5;
      break;
    case "KitKat":
      precio = precio + 6;
      break;
    case "Kinder":
      precio = precio + 7;
  }
}

function detalleCompra() {
  alert(
    "SU COMPRA:  TAMAÑO: " +
      tamanio +
      "   SABORES: " +
      cantSabores +
      " (" +
      listaSabores +
      ")   TOPPING: " +
      topping +
      "   A PAGAR: $" +
      precio +
      ".-"
  );
}

function rutinaError() {
  alert("Por favor revise su pedido");
  huboError = !huboError;
}
