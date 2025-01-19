// import chalk from "1
// chalk";
let tareas = [];

function agregarTarea(tareas, titulo, descripcion) {
  const id = tareas.length + 1;
  const tarea = { id, titulo, descripcion, completada: false };
  tareas.push(tarea);
}

function listarTareas(){
  let texto = "";
  tareas.forEach(element => {
    texto +=  element.id+": "+ element.titulo+" -> "+(element.completada ? "Completada" : "Pendiente") + "\n";
   
  });
  return texto;
}

function marcarCompletada(id){
  tareas[id-1].completada = true;
  return "Tarea actualizada con exito: "+tareas[id-1].titulo+ " -> " +(tareas[id-1].completada ? "Completada" : "Pendiente")
}

function eliminarTarea(id){
  tareas.pop(id-1);
  return "Tarea eliminada con exito"
}

module.exports = {tareas, agregarTarea, listarTareas, marcarCompletada, eliminarTarea};

