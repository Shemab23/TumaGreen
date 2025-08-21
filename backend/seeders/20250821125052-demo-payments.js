'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('payments', [
    { payer_id: 1, method: 'momo', phone_bank: '0788123456', received: true, created_at: new Date(), updated_at: new Date() },
    { payer_id: 2, method: 'bank', phone_bank: '0788765432', received: false, created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('payments', null, {});
}
