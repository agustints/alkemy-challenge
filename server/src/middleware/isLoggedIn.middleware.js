import db from "../models/init.db.js";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
const Users = db.models.users;

export const isLoggedIn = async (req, res, next) => {
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
      return res.status(200).json({
        error: true,
        status: 401,
        message: `No estas Autorizado, no tienes auth-token`,
        data: null,
      });
    }
    const token = jwt.verify(authorizationToken, process.env.TOKEN_SECRET);
    const user = await Users.findOne({
      where: {
        [Op.and]: [
          {
            id: token.id,
          },
          { status: { [Op.ne]: 0 } },
        ],
      },
    });
    if (!user) {
      return res.status(200).json({
        error: true,
        status: 401,
        message: `No estas Autorizado, tu token es válido, pero tu usuario ya no existe!`,
        data: null,
      });
    } else {
      req.user = user;
      req.token = token;
      next();
    }
  } catch (error) {
    return res.status(200).json({
      error: true,
      status: 401,
      data: null,
      message: error,
    });
  }
};
