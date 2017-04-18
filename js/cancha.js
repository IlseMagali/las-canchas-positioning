// alert("hola");
var contenedor = document.getElementById("contenedor");
var canchaFondo = document.createElement("div");
var canchaUno = document.createElement("div");
var porteriaDer = document.createElement("div");
var porteriaIzq = document.createElement("div");
var circuloCentral = document.createElement("div");

canchaFondo.id = "canchaFondo";
canchaUno.id = "canchaUno";
porteriaDer.id = "poteriaDer";
porteriaIzq.id = "porteriaIzq";
circuloCentral.id = "circuloCentral";

canchaFondo.style.backgroundColor = "green";
canchaFondo.style.width = "70" + "%";
canchaFondo.style.height = "350" + "px";

canchaUno.style.backgroundColor = "white";


console.log(canchaFondo);
console.log(canchaUno);
contenedor.appendChild(canchaFondo);
canchaFondo.appendChild(canchaUno);
canchaFondo.appendChild(porteriaIzq);
canchaFondo.appendChild(porteriaDer);
canchaFondo.appendChild(circuloCentral);

// canchaFondo.innerHTML = contenedor;
// // canchaFondo.innerHTML += canchaUno;
