'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('orders', [
    { user_id: 1, rider_id: 1, service_id: 1, pickup_address: 1, dest_address: 2, payment_id: 1, cost: 500, rating: 4.5, created_at: new Date(), updated_at: new Date() },
    { user_id: 2, rider_id: 2, service_id: 2, pickup_address: 2, dest_address: 3, payment_id: 2, cost: 300, rating: 5, created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('orders', null, {});
}
