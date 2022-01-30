import db from "../models/init.db.js";
const Users = db.models.personas;
const { Op } = require("sequelize");
export const findPersonas = async (req, res) => {
  try {
    const { id } = req.params;
    let condition = id
      ? { [Op.and]: [{ ci: { [Op.eq]: ci } }, { estado: { [Op.eq]: 1 } }] }
      : null;
    const user = await Users.findAll({
      where: condition,
      attributes: ["id"],
    });

    if (!user.length) {
      return res.status(200).json({
        error: true,
        status: "400",
        message: `No hemos podido encontrar un usuario.`,
      });
    }
    return res.json(user);
  } catch (error) {
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al recuperar usuarios.",
    });
  }
};

export const whoami = async (req, res) => {
  try {
    res.status(200).json({
      error: false,
      status: 200,
      user: {
        id: req.user.id,
        name: req.user.name,
        lastname: req.user.lastname,
        email: req.user.email,
        status: req.user.status,
      },
      message: `El Usuario ${req.user.name} ${req.user.lastname} fue Encontrado!`,
    });
  } catch (error) {
    console.log(error);
  }
};
