export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("applicants", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    application_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "applications", key: "id" }, // FK to applications
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    profile: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM("approved", "denied", "pending"),
      allowNull: false,
      defaultValue: "pending",
    },
    reason: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal("NOW()")
    },
    updated_at: {
      type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal("NOW()")
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("applicants");
}
