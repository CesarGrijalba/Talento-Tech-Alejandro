let tareas = [];

function agregarTarea(tareas, titulo, descripcion) {
  const id = tareas.length + 1;

  const tarea = {
    id: id,
    titulo: titulo,
    descripcion: descripcion,
    completada: false,
  };

  tareas.push(tarea);
}

function listarTareas(){
  tareas.forEach(element => {
    console.log(element.completada); 
  });
}

module.exports = {tareas, agregarTarea, listarTareas};

