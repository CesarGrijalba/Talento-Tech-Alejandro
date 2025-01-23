import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Libro from "./models/book.js";

const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto: ${PORT}`);
});

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion exitosa!"))
  .catch((error) => console.log("Error de conexion:", error));

app.get("/Libros", async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener libros",
      error,
    });
  }
});

app.post("/Libros", async (req, res) => {
  try {
    const { titulo, autor, fechaPublicacion, paginas, genero } = req.body;
    const nuevoLibro = new Libro({
      titulo,
      autor,
      fechaPublicacion,
      paginas,
      genero,
    });
    await nuevoLibro.save();
    res.status(200).json({
      message: "Libro agregado exitosamente",
      libro: nuevoLibro,
    });
  } catch (error) {
    res.status(500).json({
      message: "No se ha podido crear el libro",
      error,
    });
  }
});

app.put("/Libros/:id", async (req, res) => {
  try {
    const libroActualizado = await Libro.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ message: "Libro actualizado con exito", libroActualizado });
  } catch (error) {
    res.status(500).json({
      message: "No se ha podido actualizar el libro",
      error,
    });
  }
});

app.delete("/Libros/:id", async (req, res) => {
  try {
    const libroActualizado = await Libro.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Libro eliminado con exito" });
  } catch (error) {
    res.status(500).json({
      message: "No se ha podido eliminar el libro",
      error,
    });
  }
});
