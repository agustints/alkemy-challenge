import dotenv from "dotenv";
dotenv.config();
/* Base de Datos */
import db from "./models/init.db";
const { Op } = require("sequelize");
const Movements = db.models.movements;

/* Servidor */
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { v4 as uuidv4 } from "uuid";
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 5000;

/* Rutas del Servidor*/
import indexRoute from "./routes/index.routes";
import personasRoute from "./routes/personas.routes";
import loginRoute from "./routes/login.routes";
import movementsRoute from "./routes/movements.routes";
import categoriesRoute from "./routes/categories.routes";

/* Middlewares */
import { isLoggedIn } from "./middleware/isLoggedIn.middleware.js";
import { getUser } from "./middleware/getUser.js";

/* Axios */
import axios from "axios";

app.use(
  cors({
    credentials: true,
    origin: Array.from(process.env.FRONTEND_IP.split(",")),
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(morgan("dev"));

/* Declaración de Rutas Express */
app.use(indexRoute);
app.use("/api", loginRoute);
app.use("/api", personasRoute);
app.use("/api", movementsRoute);
app.use("/api", categoriesRoute);

server.listen(process.env.PORT || port, async () => {
  console.log(`Server running on http://localhost:${process.env.PORT || port}`);
});
