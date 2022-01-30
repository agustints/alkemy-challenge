import db from "../models/init.db.js";
import moment from "moment";
const Movements = db.models.movements;
const UserMovements = db.models.user_movements;
const MovementsCategories = db.models.movements_categories;
const Categories = db.models.categories;
const { Op } = require("sequelize");

export const getMovements = async (req, res) => {
  try {
    const id = req?.query?.id;
    const category = req?.query?.category;
    const condition = id ? { id: { [Op.eq]: id } } : null;
    const conditionCategory = category ? { id: { [Op.eq]: category } } : null;
    const movements = await Movements.findAndCountAll({
      where: condition,
      include: [
        {
          model: UserMovements,
          required: true,
          where: { user_id: { [Op.eq]: req?.user?.id } },
        },
        {
          model: MovementsCategories,
          required: true,
          include: [
            {
              model: Categories,
              required: true,
              where: conditionCategory,
            },
          ],
        },
      ],
    });

    if (!movements?.rows?.length) {
      return res.status(200).json({
        error: true,
        status: "400",
        message: `No se han encontrado movimientos.`,
      });
    }

    return res.status(200).json(movements);
  } catch (error) {
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al recuperar movimientos.",
    });
  }
};

export const getBalance = async (req, res) => {
  try {
    const movements = await Movements.findAll({
      group: ["type"],
      order: [["type", "ASC"]],
      attributes: [
        [db.Sequelize.fn("SUM", db.Sequelize.col("amount")), "total_amount"],
      ],
      include: [
        {
          model: UserMovements,
          required: true,
          where: { user_id: { [Op.eq]: req?.user?.id } },
        },
      ],
    });

    if (!movements?.length) {
      return res.status(200).json({
        error: true,
        status: "400",
        message: `No se han encontrado movimientos.`,
      });
    }
    const total_income = parseFloat(
      movements[0]?.dataValues?.total_amount
    ).toFixed(2);
    const total_expense = parseFloat(
      movements[1]?.dataValues?.total_amount
    ).toFixed(2);
    const balanace =
      (total_income && total_expense) != "NaN"
        ? parseFloat(total_income - total_expense).toFixed(2)
        : total_income
        ? parseFloat(total_income).toFixed(2)
        : total_expense
        ? parseFloat(total_expense).toFixed(2)
        : "00.00";
    return res.status(200).json({
      error: false,
      status: "200",
      rows: [
        {
          total_income,
          total_expense,
          balanace,
        },
      ],
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al recuperar movimientos.",
    });
  }
};

export const createMovement = async (req, res) => {
  try {
    const { concept, amount, date, type, category } = req.body;
    console.log(concept, amount, date, type);
    if (concept && amount && date && type) {
      await Movements.create({
        concept,
        amount,
        date,
        type,
      }).then((movement) => {
        UserMovements.create({
          movement_id: movement.id,
          user_id: req?.user?.id,
        })
          .then(() => {
            MovementsCategories.create({
              movement_id: movement.id,
              category_id: category,
            });
          })
          .then(() => {
            return res.status(200).json({
              error: false,
              status: "200",
              message: "El Movimiento fue creado con éxito!",
            });
          });
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al crear el movimiento.",
    });
  }
};

export const editMovement = async (req, res) => {
  try {
    const { id, concept, amount, date, category } = req.body;
    if (concept && amount && date && category) {
      await Movements.update(
        {
          concept,
          amount,
          date: date,
        },
        { where: { id: { [Op.eq]: id } } }
      ).then(async () => {
        await MovementsCategories.update(
          {
            category_id: category,
          },
          { where: { movement_id: { [Op.eq]: id } } }
        ).then(() => {
          return res.status(200).json({
            error: false,
            status: "200",
            message: "El Movimiento fue actualizado con éxito!",
          });
        });
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al crear el movimiento.",
    });
  }
};

export const deleteMovement = async (req, res) => {
  try {
    const { id } = req.body;
    await UserMovements.destroy({
      where: { movement_id: { [Op.eq]: id } },
    })
      .then(() => {
      MovementsCategories.destroy({
          where: { movement_id: { [Op.eq]: id } },
        }).then(() => {
           Movements.destroy({
            where: { id: { [Op.eq]: id } },
          });
        });
      })
      .then(() => {
        return res.status(200).json({
          error: false,
          status: "200",
          message: "El Movimiento fue eliminado con éxito!",
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      error: true,
      status: "500",
      message: "Se produjo un error al eliminar el movimiento.",
    });
  }
};
