export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("finances", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      total_capital: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      service_fees: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      rider_fees: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      profit: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      total_order: {
        type: Sequelize.INTEGER,
        allowNull: true
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
  await queryInterface.dropTable("finances");
}
