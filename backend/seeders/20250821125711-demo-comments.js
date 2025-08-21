'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('comments', [
    { user_id: 1, rider_id: 1, order_id: 1, message: 'Great service!', created_at: new Date(), updated_at: new Date() },
    { user_id: 2, rider_id: 2, order_id: 2, message: 'Fast delivery!', created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('comments', null, {});
}
