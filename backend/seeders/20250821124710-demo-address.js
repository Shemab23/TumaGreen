'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('addresses', [
    {
      lat: -1.9500,
      long: 30.0588,
      title: 'Kigali Central',
      phone: '0788123456',
      proof: 'proof1.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lat: -1.9622,
      long: 30.0900,
      title: 'Kimironko Market',
      phone: '0788765432',
      proof: 'proof2.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lat: -1.9700,
      long: 30.1040,
      title: 'Nyamirambo',
      phone: '0788345678',
      proof: 'proof3.jpg',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('addresses', null, {});
}
