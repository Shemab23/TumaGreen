export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("payments", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    payer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" }, // FK to users
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    method: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "momo",
    },
    phone_bank: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    received: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
  await queryInterface.dropTable("payments");
}
