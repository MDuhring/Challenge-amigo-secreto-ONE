// Array para almacenar los nombres de amigos.
let amigos = [];

// Defino función para agregar un amigo a la lista.
function agregarAmigo() {

    /* Capturo el valor del campo de entrada 
    en el documento HTML con id="amigo", 
    que es el campo <input> donde se escribe el nombre. */
    const input = document.getElementById("amigo");

    /* Obtengo el texto escrito en el campo de entrada 
    y elimino espacios vacíos al inicio y al final para evitar 
    esos errores de tipeo. */
    const nombre = input.value.trim();

    /* Si el nombre está vacío, muestra una ventana emergente 
    pidiendo un nombre válido. */
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Para este caso, detiene la función para que no agregue nada.
    }

    // Agrego el nuevo nombre al final del array amigos.
    amigos.push(nombre);

    /* Dejo el campo de texto vacío para que el usuario 
    pueda escribir otro nombre sin borrar manualmente. */
    input.value = "";

    /* Devuelvo el cursor al campo de entrada para que el usuario pueda seguir escribiendo.
    ¡No es necesario que vuelva a hacer click sobre dicho campo cada vez que agrega un nombre! */
    input.focus();

    // Llamo a la función para mostrar la lista en pantalla actualizada.
    mostrarListaAmigos();
}

/* Defino la función que se encarga de pintar en HTML (en pantalla)
 la lista de amigos agregados. */
function mostrarListaAmigos() {

    /* Selecciono del documento HTML el elemento <ul> (lista sin orden) con id="listaAmigos",
    donde se mostrarán los nombres en la pantalla. */
    const lista = document.getElementById("listaAmigos");

    /*Vacío la lista antes de volver a mostrarla para que 
    no se dupliquen o repitan los nombres anteriormente almacenados
    al agregar uno nuevo. */
    lista.innerHTML = "";

    // Recorro el array amigos con un bucle for.
    for (let i = 0; i < amigos.length; i++) {

        /* En cada iteración del bucle...
        Obtengo el nombre del amigo en la posición i del array amigos. */
        const nombre = amigos[i];

        // Creo un elemento <li> ("list element", elemento de lista).
        const li = document.createElement("li");

        // Asigno el texto del elemento <li> como el nombre de cada amigo.
        li.textContent = nombre;

        /* Agrego el elemento <li> (hijo) al elemento <ul> (padre) previamente seleccionado.
        Para cada amigo, creó un nuevo elemento de lista que se muestra en la pantalla. */
        lista.appendChild(li);
    }
}

/* Defino función para sortear un amigo aleatoriamente.
La misma es invocada al hacer click sobre el botón "Sortear amigo secreto". */
function sortearAmigo() {

    // Verifico que haya al menos un amigo en el array.
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Genero un índice de lista aleatorio (entre 0 y la longitud del array - 1).
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Selecciono un amigo aleatorio usando el índice generado.
    const amigoSorteado = amigos[indiceAleatorio];

    /* Selecciono del documento HTML la lista <ul> con id="resultado" 
    donde se va a mostrar en pantalla el amigo secreto sorteado. */
    const resultado = document.getElementById("resultado");

    /* Coloco un texto que aparecerá en pantalla mostrando quién es el amigo secreto.
    Utilizo la propiedad innerHTML para insertar contenido HTML en el elemento.
    El texto se coloca entre comillas invertidas (``) para poder usar
    interpolación de variables y así incluir el nombre del amigo sorteado.
    Los tags HTML permiten darle formato al texto y el navegador no los muestra como texto plano.
    Al ser el contenedor una lista, entonces coloco el texto en un elemento de lista <li>.
    El nombre del amigo secreto aparecerá en negrita en pantalla gracias al tag <strong>. */
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong> </li>`;
}

/* Agrego un listener al campo de entrada para detectar cuando se presiona la tecla "Enter". 
Cuando se apreta "Enter" en el campo de entrada se invoca a la función agregarAmigo. 
¡Mejoramos la UX (User eXperience)! */
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});