import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";
import Rider from "./Rider.js";
import Service from "./Service.js";
import Address from "./Address.js";
import Comment from "./Comment.js";

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rider_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pickup_address: {  // renamed to match Address relation
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dest_address: {    // renamed to match Address relation
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cost: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
}, {
  tableName: "orders",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

// ========================
// Relations
// // ========================
// Order.belongsTo(User, { foreignKey: "user_id" });
// User.hasMany(Order, { foreignKey: "user_id" });

Order.belongsTo(Rider, { foreignKey: "rider_id" });
Rider.hasMany(Order, { foreignKey: "rider_id" });

Order.belongsTo(Service, { foreignKey: "service_id" });
Service.hasMany(Order, { foreignKey: "service_id" });

Order.belongsTo(Address, { as: "PickupAddress", foreignKey: "pickup_address" });
Address.hasMany(Order, { foreignKey: "pickup_address" });

Order.belongsTo(Address, { as: "DestAddress", foreignKey: "dest_address" });
Address.hasMany(Order, { foreignKey: "dest_address" });

// Order.belongsTo(Payment, { foreignKey: "payment_id" });
// Payment.hasMany(Order, { foreignKey: "payment_id" });

Order.hasMany(Comment, { foreignKey: "order_id" });
Comment.belongsTo(Order, { foreignKey: "order_id" });

export default Order;
