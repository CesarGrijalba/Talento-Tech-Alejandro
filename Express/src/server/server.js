const express = require("express");

const path = require("path");

const iniciarServidor = (option) => {
  const { port, public_path = "public" } = option;
  console.log(port);
  console.log(public_path);

  const app = express();

  app.use(express.static(public_path));

  app.get("/", (req, res) => {
    const pagina = path.join(--dirname + "../../public/index.html");
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log("ejecutando el servidor en el puerto ${port}");
  });
};

module.exports = { iniciarServidor };
