'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('finances', [
    { total_capital: 100000, service_fees: 5000, rider_fees: 3000, profit: 2000, total_order: 2, created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('finances', null, {});
}
