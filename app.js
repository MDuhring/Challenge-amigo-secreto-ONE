// Array para almacenar los nombres de amigos.
let amigos = [];

// Función para agregar un amigo a la lista.
function agregarAmigo() {

    /* Capturo el valor del campo de entrada 
    en el documento HTML con id="amigo", 
    que es el campo <input> donde se escribe el nombre.*/
    const input = document.getElementById("amigo");

    /* Obtengo el texto escrito en el campo de entrada 
    y elimino espacios vacíos al inicio y al final para evitar 
    esos errores de tipeo.*/
    const nombre = input.value.trim();

    /* Si el nombre está vacío, muestra una ventana emergente 
    pidiendo un nombre válido.*/
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Para este caso, detiene la función para que no agregue nada.
    }

    /* Agrego el nuevo nombre al final del array amigos 
    y dejo el campo de texto vacío para que el usuario 
    pueda escribir otro nombre sin borrar manualmente.*/
    amigos.push(nombre);
    input.value = "";

    // Llamo a la función para mostrar la lista en pantalla actualizada.
    mostrarListaAmigos();
}

/* Defino la función que se encarga de pintar en HTML (en pantalla)
 la lista de amigos agregados.*/
function mostrarListaAmigos() {

    /* Selecciono del documento HTML el elemento <ul> (lista sin orden) con id="listaAmigos",
    donde se mostrarán los nombres.*/
    const lista = document.getElementById("listaAmigos");

    /*Vacío la lista antes de volver a mostrarla para que 
    no se dupliquen o repitan los nombres anteriormente almacenados
    al agregar uno nuevo.*/
    lista.innerHTML = "";

    
}