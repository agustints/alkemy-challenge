import dbConfig from "../database/config.db";
import initModels from "./init-models";

import Sequelize from "sequelize";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
  options: 0,
  omitNull: true,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  timezone: "-03:00", //for writing to database
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("[DB] La conexión con la Base de Datos fue Exitosa!.");
  } catch (error) {
    console.error("[DB] Imposible Conectar con la Base de Datos:", error);
  }
};
testConnection();

db.models = initModels(sequelize);
db.sequelize = sequelize;

export default db;
