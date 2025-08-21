import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";


const Application = sequelize.define("application", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rider_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicle_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // profile: {
  //   type: DataTypes.STRING,
  //   allowNull: true
  // },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  tableName: "applications",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});



export default Application;
