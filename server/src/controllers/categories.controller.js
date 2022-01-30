import db from "../models/init.db.js";
const Categories = db.models.categories;
const { Op } = require("sequelize");

export const getCategories = async (req, res) => {
  try {
    const id = req?.params?.id;
    const condition = id ? { id: { [Op.eq]: id } } : null;
    const categories = await Categories.findAndCountAll({ where: condition });

    if (!categories?.rows?.length) {
      return res.status(200).json({
        error: true,
        status: "400",
        message: `No se han encontrado categorias.`,
      });
    }

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al recuperar categorias.",
    });
  }
};
