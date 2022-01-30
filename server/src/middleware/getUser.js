import jwt from "jsonwebtoken";
import Cookies from "universal-cookie";
import db from "../models/init.db.js";
import { Op } from "sequelize";
const Personas = db.models.personas;

export const getUser = async (req, res, next) => {
  try {
    let authorizationToken = null;
    const cookies = new Cookies(req.headers.cookie);
    if (cookies.get("auth-token")) {
      authorizationToken = cookies.get("auth-token");
    } else if (req.headers["authorization"]) {
      authorizationToken = req.headers["authorization"];
    } else {
      authorizationToken = false;
    }

    if (!authorizationToken) {
      req.user = null;
      req.token = null;
      next();
    }
    const token = jwt.verify(authorizationToken, process.env.TOKEN_SECRET);
    const user = await Personas.findOne({
      where: {
        [Op.and]: [
          {
            id: token.id,
          },
          { estado: { [Op.ne]: 0 } },
        ],
      },
    });
    if (!user) {
      req.user = null;
      req.token = null;
      next();
    } else {
      req.user = user;
      req.token = token;
      next();
    }
  } catch (error) {}
};
