import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";

const Service = sequelize.define("service", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_type: {       // fixed typo
    type: DataTypes.ENUM("delivery", "ride"),
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: "services",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});



export default Service;
