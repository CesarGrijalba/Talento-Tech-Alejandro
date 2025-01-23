const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const Usuarios = require("./models/user");
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion exitosa!"))
  .catch((error) => console.log("Error de conexion:", error));

app.post("/Usuarios", async (req, res) => {
  try {
    const { nombre, email, telefono, edad } = req.body;
    const nuevoUsuario = new Usuarios({ nombre, email, telefono, edad });
    await nuevoUsuario.save();
    res.status(201).json({
      message: "Usuario agregado con exito",
      usuario: nuevoUsuario,
    });
  } catch (error) {
    res.status(500).json({
      message: "Usuario no creado",
      error,
    });
  }
});

app.get("/Usuarios", async (req, res) => {
  try {
    const users = await Usuarios.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener usuarios",
      error,
    });
  }
});

app.put("/Usuarios/:id", async (req, res) => {
  try {
    // const {id} = req.params;
    // const {nombre, email, telefono, edad} = req.body;

    const usuarioActualizado = await Usuarios.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({
      message: "No se ha podido actualizar el usuario",
      error,
    });
  }
});

app.delete("/Usuarios/:id", async (req, res) => {
  try {
    await Usuarios.findByIdAndDelete(req.params.id);

    res.status(204).json({
      message: "Usuario eliminado",
    });
  } catch (error) {
    res.status(500).json({
      message: "No se ha podido eliminar el usuario",
      error,
    });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto: ${PORT}`);
});
