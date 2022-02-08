const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user_movements.init(sequelize, DataTypes);
}

class user_movements extends Sequelize.Model {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_movements',
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
        name: "FK_user_movements_users",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
