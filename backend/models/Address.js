import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";

const Address = sequelize.define("address", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lat: {
    type: DataTypes.DECIMAL(9, 6), // changed from INTEGER to DECIMAL for coordinates
    allowNull: false,
  },
  long: {
    type: DataTypes.DECIMAL(9, 6),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  proof: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "addresses",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
});

// ========================
// Relations
// ========================
// Address.hasMany(Order, { foreignKey: "pickup_address" });
// Order.belongsTo(Address, { as: "PickupAddress", foreignKey: "pickup_address" });

// Address.hasMany(Order, { foreignKey: "dest_address" });
// Order.belongsTo(Address, { as: "DestAddress", foreignKey: "dest_address" });

export default Address;
