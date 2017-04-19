// alert("hola");
var contenedor = document.getElementById("contenedor");
var canchaFondo = document.createElement("div");
var canchaUno = document.createElement("div");
var porteriaDer = document.createElement("div");
var porteriaIzq = document.createElement("div");
var circuloCentral = document.createElement("div");
var pelotaIzq = document.createElement("div");
var pelotaCentral = document.createElement("div");
var pelotaDere = document.createElement("div");

canchaFondo.className = "canchaFondo";
canchaUno.className = "canchaUno";
porteriaDer.className = "porteria porteriaDer";
porteriaIzq.className = "porteria porteriaIzq";
circuloCentral.className = "circuloCentral";
pelotaIzq.className = "pelota pelotaizq";
pelotaDere.className = "pelota pelotacentral";
pelotaCentral.className = "pelota pelotadere";


console.log(canchaFondo);
console.log(canchaUno);
contenedor.appendChild(canchaFondo);
canchaFondo.appendChild(canchaUno);
canchaUno.appendChild(porteriaIzq);
canchaUno.appendChild(porteriaDer);
canchaUno.appendChild(circuloCentral);
canchaUno.appendChild(pelotaIzq);
canchaUno.appendChild(pelotaDere);
canchaUno.appendChild(pelotaCentral);
