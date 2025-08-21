'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('services', [
    { service_type: 'ride', unit: 'km', amount: 200, created_at: new Date(), updated_at: new Date() },
    { service_type: 'delivery', unit: 'kg', amount: 100, created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('services', null, {});
}
