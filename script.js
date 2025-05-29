const registro = document.getElementById("registro");
registro.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = parseInt(document.getElementById("dni").value);
    const fechaNacimiento = document.getElementById("nacimiento").value;
    const email = document.getElementById("email").value;

    if (!nombre || !apellido || !dni || !fechaNacimiento || !email) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i])) {
            alert("El nombre no puede contener números.");
            return;
        }
    }

    for (let i = 0; i < apellido.length; i++) {
        if (!isNaN(apellido[i])) {
            alert("El apellido no puede contener números.");
            return;
        }
    }

    if (typeof dni === Number || dni.toString().length !== 8) {
        alert("El DNI debe ser un número de 8 dígitos.");
        return;
    }

    fechaValores = fechaNacimiento.split("-");
    console.log(fechaValores);

    if (fechaValores[0] < 2006) {
        alert("No se aceptan fechas menores al año 2006.");
        return
    }
    
    const datosFormulario = {
        nombre,
        apellido,
        dni,
        fechaNacimiento,
        email
    };

    console.log(datosFormulario);
});

// Botón progresivo de preguntas
const boton = document.getElementById("preguntas");
boton.addEventListener("click", () => {
    const preguntas = [
        "¿De dónde eres?",
        "¿Cuál es tu color favorito?",
        "¿Cuál es el nombre de tu mascota?",
    ];

    let respuestas = [];

    preguntas.forEach((pregunta) => {
        const respuesta = prompt(pregunta);
        respuestas.push(respuesta);
    });

    const respuestasDiv = document.getElementById("preguntas-respuestas");
    p = document.createElement("p");
    p.innerHTML = respuestas;
    respuestasDiv.appendChild(p);
});