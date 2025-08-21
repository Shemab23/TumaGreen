export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("services", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      service_type: {       // fixed typo
        type: Sequelize.ENUM("delivery", "ride"),
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
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
  await queryInterface.dropTable("services");
}
