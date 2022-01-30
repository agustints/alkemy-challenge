import { getCategories } from "../controllers/categories.controller";
import express from "express";

const router = express.Router();

router.get("/categories", getCategories);

router.get("/categories/find/:id", getCategories);

export default router;
