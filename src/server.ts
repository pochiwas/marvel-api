import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";


// Cargar variables de entorno desde .env
dotenv.config();

const app: Application = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(cors());

// Rutas

// Conectar a la base de datos y arrancar el servidor
const startServer = async () => {
  try {
    // Sincroniza los modelos con la base de datos
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error:any) {
    console.error("Error :", error);
  }
};

startServer();
