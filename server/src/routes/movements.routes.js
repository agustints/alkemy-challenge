import {
  createMovement,
  deleteMovement,
  editMovement,
  getBalance,
  getMovements,
} from "../controllers/movements.controller";
import express from "express";
import { isLoggedIn } from "../middleware/isLoggedIn.middleware";
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/movements", isLoggedIn, getMovements);

router.get("/movements/balance", isLoggedIn, getBalance);

router.post(
  "/movements/edit",
  body("concept").not().isEmpty().trim().escape(),
  body("amount").not().isEmpty().trim().escape().isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: true,
        errors: errors.array(),
        message: "Hey, revisa la información del cuerpo de la petición!",
      });
    }
    next();
  },
  isLoggedIn,
  editMovement
);

router.post(
  "/movements",
  body("concept").not().isEmpty().trim().escape(),
  body("amount").not().isEmpty().trim().escape().isNumeric(),
  body("type")
    .not()
    .isEmpty()
    .isIn(["income", "expense"])
    .withMessage("Type must be income | expense"),
  body("category").not().isEmpty().trim().escape().isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: true,
        errors: errors.array(),
        message: "Hey, revisa la información del cuerpo de la petición!",
      });
    }
    next();
  },
  isLoggedIn,
  createMovement
);

router.delete(
  "/movements",
  isLoggedIn,
  deleteMovement
);

export default router;
