import db from "../models/init.db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Joi } from "express-validation";
const Users = db.models.users;
const { Op } = require("sequelize");
export const loginValidation = {
  body: Joi.object({
    email: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      raw: true,
      where: {
        [Op.and]: [
          {
            [Op.or]: [
              db.sequelize.where(
                db.sequelize.fn("lower", db.sequelize.col("email")),
                db.sequelize.fn("lower", `${email}`)
              ),
            ],
          },
          {
            status: { [Op.ne]: 0 },
          },
        ],
      },
    });
    if (!user) {
      return res.status(200).json({
        error: true,
        status: 401,
        message: "Usuario y/o contraseña INCORRECTOS",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "14d",
        }
      );

      return res
        .status(200)
        .cookie("auth-token", `${token}`, {
          maxAge: 1209600000,
          sameSite: "None",
          path: "/",
          httpOnly: true,
          secure: true,
        })
        .json({
          error: false,
          status: 202,
          message: "Logueado Exitosamente!",
          token,
        });
    }
    return res.status(200).send({
      error: true,
      status: 401,
      message: "Usuario y/o contraseña INCORRECTOS",
    });
  } catch (error) {
    console.log(error);
  }
};

export const register = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;

    let persona = await Users.findAll({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });
    const passwordHash = await bcrypt.hash(password, 12);

    if (!persona?.length) {
      await Users.create({
        name,
        lastname,
        email,
        password: passwordHash,
      }).then(async () => {
        return res.json({
          error: false,
          status: "200",
          message: `El Usuario fue creado con exito!`,
        });
      });
    } else {
      return res.status(200).json({
        error: true,
        status: "400",
        message: `No fue posible la creación del usuario`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al crear el usuario.",
    });
  }
};

export const logout = async (req, res) => {
  try {
    if (req.user) {
      return res
        .status(200)
        .clearCookie("auth-token")
        .json({ message: "Hey, tu sesion fue cerrada con éxito!" });
    } else {
      res.status(200).json({
        error: true,
        errorCode: 401,
        data: null,
        msg: `Unauthorized`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
