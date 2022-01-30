import express from "express";
import { whoami } from "../controllers/personas.controller";
import { isLoggedIn } from "../middleware/isLoggedIn.middleware";
const router = express.Router();

router.get("/whoami", isLoggedIn, whoami);

export default router;
