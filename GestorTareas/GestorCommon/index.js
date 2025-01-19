const {
  tareas,
  agregarTarea,
  listarTareas,
  marcarCompletada,
  eliminarTarea
} = require("./src/gestorTareas");

// const agregarTarea = require("./src/gestorTareas");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log(`
        Gestor de Tareas:
        1. Agregar tarea
        2. Listar tareas
        3. Marcar tarea como completada
        4. Eliminar tarea
        0. Salir
        `);
  rl.question("Selecciona una opcion:", (opcion) => {
    switch (opcion) {
      case "1":
        console.log("AGREGAR TAREA");
        rl.question("Ingresa el título: ", (titulo) => {
          rl.question("Ingresa la descripción: ", (descripcion) => {
            agregarTarea(tareas, titulo, descripcion);
            console.log("Tarea agregada con éxito.");
            menu(); // Vuelve a mostrar el menú
          });
        });
        break;

      case "2":
        console.log("LISTA DE TAREAS \n" + listarTareas());
        menu();
        break;

      case "3":
        console.log("MARCAR COMPLETADAS \n" + listarTareas());
        rl.question("Ingresa id de la tarea: ", (id) => {
          marcarCompletada(id);
          console.log();
          menu();
        });
        break;

      case "4":
        console.log("ELMINAR TAREAS \n" + listarTareas());
        rl.question("Ingresa id de la tarea: ", (id) => {
          console.log( eliminarTarea(id));
          menu();
        });
        break;

      default:
        break;
    }
  });
}

menu();
