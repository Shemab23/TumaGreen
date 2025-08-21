import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";
import Application from "./Application.js";

const Applicant = sequelize.define("applicant", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  application_id: {          // fixed typo
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("approved", "denied", "pending"),
    allowNull: false,
    defaultValue: "pending",
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: "applicants",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

// ========================
// Relations
// ========================
Applicant.belongsTo(Application, { foreignKey: "application_id" });
Application.hasOne(Applicant, { foreignKey: "application_id" });



export default Applicant;
