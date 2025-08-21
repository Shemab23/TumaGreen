import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";
import Order from "./Order.js";

const Payment = sequelize.define("payment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "momo",
  },
  phone_bank: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  received: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  tableName: "payments",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

// ========================
// Relations
// // ========================
// Payment.belongsTo(User, { foreignKey: "payer_id" });
// User.hasMany(Payment, { foreignKey: "payer_id" });

Payment.hasMany(Order, { foreignKey: "payment_id" });
Order.belongsTo(Payment, { foreignKey: "payment_id" });

export default Payment;
