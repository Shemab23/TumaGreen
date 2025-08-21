'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('applications', [
    { rider_name: 'Charles', vehicle_type: 'bike', email: 'charles@mail.com', phone: '0788001111', created_at: new Date(), updated_at: new Date() },
    { rider_name: 'Diane', vehicle_type: 'car', email: 'diane@mail.com', phone: '0788002222', created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('applications', null, {});
}
