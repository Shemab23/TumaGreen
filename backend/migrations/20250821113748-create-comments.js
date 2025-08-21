export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("comments", {
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
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "orders", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    message: {
      type: Sequelize.STRING,
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
  await queryInterface.dropTable("comments");
}
