import {
  login,
  register,
  loginValidation,
  verificar,
  nuevoCodigoVerificacion,
} from "../controllers/login.controller";
import { isLoggedIn } from "../middleware/isLoggedIn.middleware";
import { logout } from "../controllers/login.controller";
import { validate } from "express-validation";
import express from "express";

const router = express.Router();

router.post("/users/login", validate(loginValidation, {}, {}), login);
router.post("/users", register);
router.get("/users/logout", isLoggedIn, logout);
export default router;
