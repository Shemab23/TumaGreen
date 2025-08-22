export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
       type: Sequelize.STRING, allowNull: false
    },
    profile: {
      type: Sequelize.STRING, allowNull: true
    },
    phone: {
      type: Sequelize.STRING, allowNull: false
    },
    password: {
      type: Sequelize.STRING, allowNull: false
    },
    status: {
      type: Sequelize.ENUM("active", "blocked"), allowNull: false, defaultValue: "active"
    },
    latitude: {
      type: Sequelize.DECIMAL(9,6), allowNull: true
    },
    longitude: {
      type: Sequelize.DECIMAL(9,6), allowNull: true
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
  await queryInterface.dropTable("users");
}
