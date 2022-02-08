const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return movements.init(sequelize, DataTypes);
}

class movements extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    concept: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('income','expense'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'movements',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
