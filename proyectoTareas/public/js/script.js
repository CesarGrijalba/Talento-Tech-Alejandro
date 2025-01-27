const apiUrl = "http://localhost:3000/tareas"; // URL de la API para las tareas

// Modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("boton-agregar");
const closeModalBtn = document.getElementById("cerrarModal");
const modalBtn = document.getElementById("btn-modal");

// Funcion para traer las tareas
function obtenerTareas() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((tareas) => {
      const listaTareas = document.getElementById("tareas");
      listaTareas.innerHTML = "";

      tareas.forEach((element) => {
        const divTarea = document.createElement("div");
        divTarea.innerHTML = `<h2>${element.titulo}</h2>
            <p>${element.descripcion}</p>
            <p>${element.fechaCreacion}`;

        // Cambiar color de fondo si la tarea esta completada
        if (element.completado) {
          divTarea.style.backgroundColor = "rgba(146, 219, 35, 0.41)";
        } else {
          divTarea.style.backgroundColor = "rgba(148, 148, 148, 0.41)";
        }

        // Botones
        // Boton completar
        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completar";
        botonCompletar.addEventListener("click", () =>
          completarTarea(element._id)
        );

        // Boton modificar
        const botonModificar = document.createElement("button");
        botonModificar.textContent = "Modificar";
        // Cambiar modal para modificar tarea
        botonModificar.addEventListener("click", () => {
          modal.style.display = "flex";
          modal.querySelector("h2").textContent = "Modificar tarea";
          modal.querySelector("button").textContent = "Modificar";
          modal.querySelector("#titulo").value = element.titulo;
          modal.querySelector("#descripcion").value = element.descripcion;
          // Modificacion de modal para editar tarea
          modalBtn.addEventListener("click", () => {
            const id = element._id;
            const titulo = document.getElementById("titulo").value;
            const descripcion = document.getElementById("descripcion").value;
            modificarTarea(id, titulo, descripcion);
            modal.style.display = "none";
            obtenerTareas();
          });
        });

        // Boton eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () =>
          eliminarTarea(element._id)
        );

        if (!element.completado) {
          divTarea.appendChild(botonCompletar);
          divTarea.appendChild(botonModificar);
        }

        divTarea.appendChild(botonEliminar);

        listaTareas.appendChild(divTarea);
      });
    });
}

//Funcion para eliminar tarea
async function eliminarTarea(id) {
  if (confirm("Estas seguro que deseas eliminar esta tarea?")) {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      try {
        obtenerTareas();
        console.log("Tarea eliminada correctamente");
      } catch (error) {
        console.error("Error al eliminar la tarea");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

// Funcion para completar una tarea
function completarTarea(id) {
  try {
    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completado: true }),
    });
    alert("Tarea completada correctamente");
    obtenerTareas();
  } catch (error) {
    console.error("Error:", error);
  }
}

// Funcion para agregar tarea
function agregarTarea(titulo, descripcion) {
  try {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, descripcion }),
    });
    alert("Tarea creada correctamente");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Funcion para modificar tarea
function modificarTarea(id, titulo, descripcion) {
  try {
    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, descripcion }),
    });
    alert("Tarea modificada correctamente");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Abrir ventana emergente
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.querySelector("h2").textContent = "Crear tarea";
  modal.querySelector("button").textContent = "Crear";
  modal.querySelectorAll("input").forEach((input) => (input.value = ""));
});

// Cerrar ventana emergente
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modalBtn.addEventListener("click", () => {
  if (modalBtn.textContent === "Crear") {
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    agregarTarea(titulo, descripcion);
    modal.style.display = "none";
    obtenerTareas();
  }
});

obtenerTareas();
