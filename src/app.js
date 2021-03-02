let numeros = ["AS", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let figuras = ["♦", "♥", "♠", "♣"];

var button = document.querySelector("#recarga");
button.style.width = "200px";
button.style.height = "45px";
button.style.margin = "auto";
button.style.position = "absolute";
button.style.margin = "75px auto auto 650px";

window.onload = function() {
  let num_al_numeros = Math.floor(Math.random() * 13 + 0); //numero aleatorio entre 0 y 12
  let num_al_figuras = Math.floor(Math.random() * 4 + 0); //numero aleatorio entre 0 y 3

  //let num_al_numeros = 0;

  switch (num_al_numeros) {
    case 0:
      var cero = document.createElement("H1");
      cero.innerHTML = numeros[0];
      document.querySelector("#numero").appendChild(cero);
      cero.style.fontSize = "100px";
      cero.style.display = "block";
      cero.style.position = "absolute";
      cero.style.margin = "150px auto auto 75px";
      break;

    case 1:
      var uno = document.createElement("H1");
      uno.innerHTML = numeros[1];
      document.querySelector("#numero").appendChild(uno);
      uno.style.fontSize = "125px";
      uno.style.display = "block";
      uno.style.position = "absolute";
      uno.style.margin = "145px auto auto 120px";
      break;

    case 2:
      var dos = document.createElement("H1");
      dos.innerHTML = numeros[2];
      document.querySelector("#numero").appendChild(dos);
      dos.style.fontSize = "125px";
      dos.style.display = "block";
      dos.style.position = "absolute";
      dos.style.margin = "145px auto auto 120px";
      break;

    case 3:
      var tres = document.createElement("H1");
      tres.innerHTML = numeros[3];
      document.querySelector("#numero").appendChild(tres);
      tres.style.fontSize = "125px";
      tres.style.display = "block";
      tres.style.position = "absolute";
      tres.style.margin = "145px auto auto 120px";
      break;

    case 4:
      var cuatro = document.createElement("H1");
      cuatro.innerHTML = numeros[4];
      document.querySelector("#numero").appendChild(cuatro);
      cuatro.style.fontSize = "125px";
      cuatro.style.display = "block";
      cuatro.style.position = "absolute";
      cuatro.style.margin = "145px auto auto 120px";
      break;

    case 5:
      var cinco = document.createElement("H1");
      cinco.innerHTML = numeros[5];
      document.querySelector("#numero").appendChild(cinco);
      cinco.style.fontSize = "125px";
      cinco.style.display = "block";
      cinco.style.position = "absolute";
      cinco.style.margin = "145px auto auto 120px";
      break;

    case 6:
      var seis = document.createElement("H1");
      seis.innerHTML = numeros[6];
      document.querySelector("#numero").appendChild(seis);
      seis.style.fontSize = "125px";
      seis.style.display = "block";
      seis.style.position = "absolute";
      seis.style.margin = "145px auto auto 120px";
      break;

    case 7:
      var siete = document.createElement("H1");
      siete.innerHTML = numeros[7];
      document.querySelector("#numero").appendChild(siete);
      siete.style.fontSize = "125px";
      siete.style.display = "block";
      siete.style.position = "absolute";
      siete.style.margin = "145px auto auto 120px";
      break;

    case 8:
      var ocho = document.createElement("H1");
      ocho.innerHTML = numeros[8];
      document.querySelector("#numero").appendChild(ocho);
      ocho.style.fontSize = "125px";
      ocho.style.display = "block";
      ocho.style.position = "absolute";
      ocho.style.margin = "145px auto auto 120px";
      break;

    case 9:
      var nueve = document.createElement("H1");
      nueve.innerHTML = numeros[9];
      document.querySelector("#numero").appendChild(nueve);
      nueve.style.fontSize = "125px";
      nueve.style.display = "block";
      nueve.style.position = "absolute";
      nueve.style.margin = "145px auto auto 90px";
      break;

    case 10:
      var diez = document.createElement("H1");
      diez.innerHTML = numeros[10];
      document.querySelector("#numero").appendChild(diez);
      diez.style.fontSize = "125px";
      diez.style.display = "block";
      diez.style.position = "absolute";
      diez.style.margin = "145px auto auto 120px";
      break;

    case 11:
      var once = document.createElement("H1");
      once.innerHTML = numeros[11];
      document.querySelector("#numero").appendChild(once);
      once.style.fontSize = "115px";
      once.style.display = "block";
      once.style.position = "absolute";
      once.style.margin = "145px auto auto 100px";
      break;

    case 12:
      var doce = document.createElement("H1");
      doce.innerHTML = numeros[12];
      document.querySelector("#numero").appendChild(doce);
      doce.style.fontSize = "115px";
      doce.style.display = "block";
      doce.style.position = "absolute";
      doce.style.margin = "145px auto auto 100px";
      break;
  } //cierra el switch de numeros

  switch (num_al_figuras) {
    case 0:
      var cero1 = document.createElement("H1");
      cero1.innerHTML = figuras[0];
      document.querySelector("#simbolo1").appendChild(cero1);
      cero1.style.fontSize = "125px";
      cero1.style.display = "block";
      cero1.style.position = "absolute";
      cero1.style.margin = "0px auto auto 20px";

      var cero2 = document.createElement("H1");
      cero2.innerHTML = figuras[0];
      document.querySelector("#simbolo2").appendChild(cero2);
      cero2.style.fontSize = "125px";
      cero2.style.display = "block";
      cero2.style.position = "absolute";
      cero2.style.margin = "300px auto auto 200px";
      cero2.style.transform = "rotate(180deg)";
      break;

    case 1:
      var uno1 = document.createElement("H1");
      uno1.innerHTML = figuras[1];
      document.querySelector("#simbolo1").appendChild(uno1);
      uno1.style.fontSize = "125px";
      uno1.style.display = "block";
      uno1.style.position = "absolute";
      uno1.style.margin = "0px auto auto 20px";

      var uno2 = document.createElement("H1");
      uno2.innerHTML = figuras[1];
      document.querySelector("#simbolo2").appendChild(uno2);
      uno2.style.fontSize = "125px";
      uno2.style.display = "block";
      uno2.style.position = "absolute";
      uno2.style.margin = "300px auto auto 200px";
      uno2.style.transform = "rotate(180deg)";
      break;

    case 2:
      var dos1 = document.createElement("H1");
      dos1.innerHTML = figuras[2];
      document.querySelector("#simbolo1").appendChild(dos1);
      dos1.style.fontSize = "125px";
      dos1.style.display = "block";
      dos1.style.position = "absolute";
      dos1.style.margin = "0px auto auto 20px";

      var dos2 = document.createElement("H1");
      dos2.innerHTML = figuras[2];
      document.querySelector("#simbolo2").appendChild(dos2);
      dos2.style.fontSize = "125px";
      dos2.style.display = "block";
      dos2.style.position = "absolute";
      dos2.style.margin = "300px auto auto 200px";
      dos2.style.transform = "rotate(180deg)";
      break;

    case 3:
      var tres1 = document.createElement("H1");
      tres1.innerHTML = figuras[3];
      document.querySelector("#simbolo1").appendChild(tres1);
      tres1.style.fontSize = "125px";
      tres1.style.display = "block";
      tres1.style.position = "absolute";
      tres1.style.margin = "0px auto auto 20px";

      var tres2 = document.createElement("H1");
      tres2.innerHTML = figuras[3];
      document.querySelector("#simbolo2").appendChild(tres2);
      tres2.style.fontSize = "125px";
      tres2.style.display = "block";
      tres2.style.position = "absolute";
      tres2.style.margin = "300px auto auto 200px";
      tres2.style.transform = "rotate(180deg)";
      break;
  } //cierra el switch de figuras
}; //cierra la funcion

import "bootstrap";
import "./style.css";
