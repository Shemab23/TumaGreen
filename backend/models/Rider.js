import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";
import Applicant from "./Applicant.js";
import Comment from "./Comment.js";

const Rider = sequelize.define("rider", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  applicant_id: {        // fixed typo
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("available", "not available"),
    allowNull: false,
    defaultValue: "available",
  },
  prefered_payment: {
    type: DataTypes.ENUM("momo", "bank"),
    allowNull: false,
    defaultValue: "momo",
  },
  payment_received: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  tableName: "riders",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

// ========================
// Relations
// ========================
Rider.belongsTo(Applicant, { foreignKey: "applicant_id" });
Applicant.hasOne(Rider, { foreignKey: "applicant_id" });


// Rider.hasMany(Order, { foreignKey: "rider_id" });
// Order.belongsTo(Rider, { foreignKey: "rider_id" });

Rider.hasMany(Comment, { foreignKey: "rider_id" });
Comment.belongsTo(Rider, { foreignKey: "rider_id" });

export default Rider;
