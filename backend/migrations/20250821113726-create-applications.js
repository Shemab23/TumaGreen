export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("applications", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      rider_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vehicle_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // profile: {
      //   type: DataTypes.STRING,
      //   allowNull: true
      // },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
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
  await queryInterface.dropTable("applications");
}
