// ***Importações
import express from "express";
import cors from "cors";
import { route } from "./routes/routes";

// ***Definição do app
const app = express();

// ***Configurações do app
app.use(express.json());
app.use(cors());
app.use(route);

// ***Exportando rotas
export { app };