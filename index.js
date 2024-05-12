import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

const app = express();

mongoose
  .connect(
    "mongodb://miguel:root@mongocontenedor:27017/miapp?authSource=admin"
  )
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error de conexión a la base de datos:", error);
    process.exit(1); // Detener la aplicación si hay un error de conexión
  });

app.get("/", async (_req, res) => {
  try {
    console.log("listando... animales...");
    const animales = await Animal.find();
    return res.send(animales);
  } catch (error) {
    console.error("Error al buscar animales:", error);
    return res.status(500).send("Error interno del servidor");
  }
});

app.get("/crear", async (_req, res) => {
  try {
    console.log("creando...");
    await Animal.create({ tipo: "Perro", estado: "Feliz" });
    return res.send("ok");
  } catch (error) {
    console.error("Error al crear animal:", error);
    return res.status(500).send("Error interno del servidor");
  }
});

app.listen(3000, () => console.log("Escuchando en el puerto 3000..."));
