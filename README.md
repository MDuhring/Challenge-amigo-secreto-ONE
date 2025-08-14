<h1 align="center"> 🎊Challenge del amigo secreto | ONE 🎊</h1>
<p align="center">
<img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
<img src="https://img.shields.io/github/stars/MDuhring?style=social">
</p>
<h2 align="center"> <img width="450" height="277" alt="amigo-secreto" src="https://github.com/user-attachments/assets/eb6424c8-3fe2-4fcd-9b4d-27785fa23197" /> </h2>

Repositorio para el desafío "amigo secreto" de la formación "_principiante de programación_" del programa " _ONE | ORACLE Next Education_ ", Grupo 9.

## Descripción del proyecto 🗒️🖋️
El desafío consiste en desarrollar una aplicación web sencilla que permita a los usuarios ingresar nombres de 👦amigos👧 en una lista, para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y confirmar el input mediante un click en el botón "_Añadir_" o mediante un "_Enter_".<br>
Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "_Sortear Amigo_" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

## Fucionalidades ⚙️
* **Agregar nombres** ⌨️: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer click en el botón "_Añadir_" o al apretar la tecla "_Enter_".<br>
El cursor permanece en el campo de texto luego de la confirmación para agilizar el tipeo de inputs y mejorar la experiencia del usuario (UX) con la app.<br>
La función que gobierna estas funcionalidades se denomina "_agregarAmigo()_".

* **Validar entrada** ✔️: Si el campo de texto está vacío, el programa mostrará una ⚠️alerta pidiendo un nombre válido.

* **Visualizar la lista** 👁️: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.<br>
La función que gobierna estas funcionalidades se denomina "_mostrarListaAmigos()_".

* **Sorteo aleatorio** 🃏: Al hacer click en el botón "_Sortear Amigo_", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.<br>
La función que gobierna estas funcionalidades se denomina "_sortearAmigo()_".

## Tecnologías utilizadas 🛠️
- **HTML5** → estructura de la página.
- **CSS3** → estilos y diseño visual.
- **JavaScript (ES6)** → lógica de la aplicación e interacción con el DOM.

## Estructura del proyecto 📂
```
.
├── index.html  →  Estructura principal de la app <br>
├── style.css  →  Estilos de la interfaz <br>
├── app.js  →  Lógica del sorteo y manejo de la lista <br>
└── assets/  →  Imágenes y recursos
```
## Vista previa 🖼️
<img width="664" height="581" alt="{AD472CCD-1FA8-4BAA-8036-541C8CD20059}" src="https://github.com/user-attachments/assets/6dba3cdd-9dba-4a7a-a316-bacc2aef352f" />

## Uso básico 💡
1. Escribe el nombre de un amigo en el campo de texto.
2. Presiona "_Añadir_" o la tecla _Enter_.
3. Repite el paso 1 y 2 para todos los amigos que quieras incluir.
4. Haz clic en "_Sortear amigo_" para conocer el resultado.
5. El amigo sorteado aparecerá en la lista de resultados.

## Mejoras futuras ✨
- Posibilidad de eliminar nombres individuales.
- Evitar nombres duplicados en la lista.
- Animaciones para el sorteo.
