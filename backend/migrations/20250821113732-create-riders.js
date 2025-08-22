export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("riders", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    applicant_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "applicants", key: "id" }, // FK to applicants
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM("available", "not available"),
      allowNull: false,
      defaultValue: "available",
    },
    prefered_payment: {
      type: Sequelize.ENUM("momo", "bank"),
      allowNull: false,
      defaultValue: "momo",
    },
    payment_received: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "nibagiwe"
      },
        latitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: true
      },
      longitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: true
      },
      deliveryCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
  await queryInterface.dropTable("riders");
}
