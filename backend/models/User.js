import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";
import Payment from "./Payment.js";
import Order from "./Order.js";
import Comment from "./Comment.js";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "blocked"),
    allowNull: false,
    defaultValue: "active",
  },
  latitude: {
    type: DataTypes.DECIMAL(9, 6),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(9, 6),
    allowNull: true,
  },
}, {
  tableName: "users",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

User.hasMany(Payment, { foreignKey: "payer_id" });
Payment.belongsTo(User, { foreignKey: "payer_id" });

User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });


export default User;
