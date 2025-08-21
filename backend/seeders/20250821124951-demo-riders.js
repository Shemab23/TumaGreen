'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('riders', [
    { applicant_id: 1, rating: 4, status: 'available', prefered_payment: 'momo', payment_received: true, created_at: new Date(), updated_at: new Date() },
    { applicant_id: 2, rating: 5, status: 'available', prefered_payment: 'bank', payment_received: false, created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('riders', null, {});
}
