//Función para el botón 1  SE RECOMIENDA SÓLO USAR EVENT LISTENERS
function mostrarMsm(){
    console.log('Hicieron clcik en el botón '+ new Date().toLocaleDateString());
}

//Agregar un evenListener al botón 2
let boton=document.getElementById("otroBoton");
boton.addEventListener("click",()=>{console.log('Hicieron clcik en el botón '+ new Date().toLocaleDateString())});