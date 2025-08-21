export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("addresses", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lat: {
        type: Sequelize.DECIMAL(9, 6), // changed from INTEGER to DECIMAL for coordinates
        allowNull: false,
      },
      long: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      proof: {
        type: Sequelize.STRING,
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
  await queryInterface.dropTable("addresses");
}
