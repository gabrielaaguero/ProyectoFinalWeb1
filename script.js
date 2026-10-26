// Gracias profe por ayudarme con el carrusel :D
imagenes =[
  {ruta:'foto1.jpg', alt: 'escaleras'},
  {ruta:'foto3.jpg', alt: 'rejas'},
  {ruta:'foto4.jpg', alt: 'local'},
  {ruta:'foto5.jpg', alt: 'pileta'},
  {ruta:'foto6.jpg', alt: 'porton'},
];
console.log('arreglo de imagenes', imagenes);
let indice =0;
const img = document.getElementById("imagen");
img.src = imagenes [indice].ruta;
img.alt = imagenes [indice].alt;


const btnSiguiente = document.getElementById("next");

function imagenSiguiente() {
  if (indice == (imagenes.length-1)) {
    indice =0;
  }
  else {
    indice++;
  }
  img.src = imagenes [indice].ruta;
  img.alt = imagenes [indice].alt;
}

function imagenAnterior(){
  if(indice ==0){
    indice = imagenes.length-1;
  }
  else{
    indice--;
  }
  img.src = imagenes [indice].ruta;
  img.alt = imagenes [indice].alt;
}