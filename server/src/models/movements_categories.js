const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return movements_categories.init(sequelize, DataTypes);
}

class movements_categories extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    movement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'movements',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movements_categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movement_id" },
        ]
      },
      {
        name: "FK__categories",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
