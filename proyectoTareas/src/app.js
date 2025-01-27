import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import tareasRouter from "./routes/tareas_routes.js";
//Cargamos variable de entorno
dotenv.config();



// Inicializamos express
const app = express();
app.use(cors());
app.use(express.json());

// Definimos el puerto
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

// Conectamos a la base de datos
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion a la BD exitosa"))
  .catch((error) => console.log("Error de conexion:", error));

app.use("/tareas", tareasRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

