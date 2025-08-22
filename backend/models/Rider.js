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
  applicant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
    password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "nibagiwe"
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
    latitude: {
    type: DataTypes.DECIMAL(9, 6),
    allowNull: true
  },
  longitude: {
    type: DataTypes.DECIMAL(9, 6),
    allowNull: true
  },
  deliveryCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
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
Rider.belongsTo(Applicant, { foreignKey: "applicant_id", as: "applicant" });
Applicant.hasOne(Rider, { foreignKey: "applicant_id", as:"rider" });


// Rider.hasMany(Order, { foreignKey: "rider_id" });
// Order.belongsTo(Rider, { foreignKey: "rider_id" });

Rider.hasMany(Comment, { foreignKey: "rider_id" });
Comment.belongsTo(Rider, { foreignKey: "rider_id" });

export default Rider;
