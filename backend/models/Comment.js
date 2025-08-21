import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";

const Comment = sequelize.define("comment", {
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
  order_id: {              // added to link comment to an order
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: "comments",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

// ========================
// Relations
// ========================
// Comment.belongsTo(User, { foreignKey: "user_id" });
// User.hasMany(Comment, { foreignKey: "user_id" });

// Comment.belongsTo(Rider, { foreignKey: "rider_id" });
// Rider.hasMany(Comment, { foreignKey: "rider_id" });

// Comment.belongsTo(Order, { foreignKey: "order_id" });
// Order.hasMany(Comment, { foreignKey: "order_id" });

export default Comment;
