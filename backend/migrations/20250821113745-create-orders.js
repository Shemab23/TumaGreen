export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("orders", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    rider_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "riders", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "services", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    pickup_address: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "addresses", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    dest_address: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "addresses", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    payment_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "payments", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    cost: {
      type: Sequelize.DECIMAL(8, 2),
      allowNull: false,
    },
    rating: {
      type: Sequelize.DECIMAL(3, 2),
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("NOW()"),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("NOW()"),
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("orders");
}
