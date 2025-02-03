// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar". */
let amigos = [];

function agregarAmigo(){
    /* obtenemos el valor del input */
    let nombre = document.getElementById('amigo').value
    /* Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido. */
    if (nombre) {
        amigos.push(nombre);
        /* Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada. */
        let contenedor = document.getElementById("listaAmigos");
        contenedor.innerHTML = ""; 
        
        /* recorremos la lista para mostrar la informacion */
        amigos.forEach((amigo, index) => {
            let elemento = document.createElement("p");
            elemento.textContent = `${index + 1}. ${amigo}`;
            contenedor.appendChild(elemento);
        });

        /* limpiamos el input para agregar un nuevo nomrbe */
        document.getElementById("amigo").value = ""; 
    } else {
        alert("Por favor, ingresa un nombre");
    }

}

/* Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. */
/* funcion para sortear el amigo */
function sortearAmigo(){
    /* limpiamos el input para agregar un nuevo nomrbe */
    document.getElementById("amigo").value = ""; 

    /* limpiamos la seccion donde se muestra el lsitado */
    let contenedor = document.getElementById("listaAmigos");
    contenedor.innerHTML = "";

    /* sobre la lista obtenemos el valor aleatorio */
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        contenedor.innerHTML = `<p style="color:green">Nombre aleatorio: ${amigos[indiceAleatorio]}</p>`;
    } else {
        alert("La lista está vacía, agrega nombres primero.");
    }
}





