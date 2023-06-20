console.log("Conectado")
let click = document.querySelector('.boton');
let video = document.querySelector('.video')

click.addEventListener('click', cambiarFondo)
var fondoStatus="fondo1"
function cambiarFondo() {
  if(fondoStatus=="fondo1"){
    video.src="videos/video2.mp4";
    fondoStatus="fondo2"
  }else if(fondoStatus=="fondo2"){
    video.src="videos/video3.mp4"
    fondoStatus="fondo3"
  }else if(fondoStatus=="fondo3"){
    video.src="videos/video4.mp4"
    fondoStatus="fondo4"
  }else if(fondoStatus=="fondo4"){
    video.src="videos/video1.mp4";
    fondoStatus="fondo1"
  }
}
 

 