// Gracias profe por ayudarme con el carrusel :D
 const imagenes =[
  {ruta:"imagenes/foto1.jpg", alt: "escaleras"},
  {ruta:"imagenes/foto3.jpg", alt: "rejas en forma de hoja"},
  {ruta:"imagenes/foto4.jpg", alt: "local"},
  {ruta:"imagenes/foto5.jpg", alt: "pileta"},
  {ruta:"imagenes/foto6.jpg", alt: "porton"}
];

let indice =0;
const img = document.getElementById("imagen");
//muestra la imagen que corresponde al indice actual
function mostrarImagen(){
img.src = imagenes [indice].ruta;
img.alt = imagenes [indice].alt;
}

function imagenSiguiente() {
  if (indice == (imagenes.length - 1)) {
    indice = 0;
  } else {
    indice++;
  }
  mostrarImagen();
}

function imagenAnterior() {
  if(indice == 0){
    indice = imagenes.length - 1;
  }else{
    indice--;
  }
  mostrarImagen();
}
mostrarImagen();
