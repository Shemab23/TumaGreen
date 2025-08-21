import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";

const Finance = sequelize.define("finance", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_capital: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  service_fees: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  rider_fees: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  profit: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  total_order: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "finances",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

export default Finance;
