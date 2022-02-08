import dotenv from "dotenv";
dotenv.config();
import moment from "moment";
const { DB_HOST, DB_USER, DB_PASSWORD, DB } = process.env;

module.exports = {
  HOST: DB_HOST,
  USER: DB_USER,
  PASSWORD: DB_PASSWORD,
  DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true,
  },
};
