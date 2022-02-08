const DataTypes = require("sequelize").DataTypes;
const _categories = require("./categories");
const _movements = require("./movements");
const _movements_categories = require("./movements_categories");
const _user_movements = require("./user_movements");
const _users = require("./users");

function initModels(sequelize) {
  const categories = _categories(sequelize, DataTypes);
  const movements = _movements(sequelize, DataTypes);
  const movements_categories = _movements_categories(sequelize, DataTypes);
  const user_movements = _user_movements(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  movements_categories.belongsTo(categories, { foreignKey: "category_id"});
  categories.hasMany(movements_categories, { foreignKey: "category_id"});
  movements_categories.belongsTo(movements, { foreignKey: "movement_id"});
  movements.hasOne(movements_categories, { foreignKey: "movement_id"});
  user_movements.belongsTo(movements, { foreignKey: "movement_id"});
  movements.hasOne(user_movements, { foreignKey: "movement_id"});
  user_movements.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(user_movements, { foreignKey: "user_id"});

  return {
    categories,
    movements,
    movements_categories,
    user_movements,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
