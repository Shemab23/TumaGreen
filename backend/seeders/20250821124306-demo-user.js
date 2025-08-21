'use strict';
import bcrypt from 'bcrypt';

export async function up(queryInterface, Sequelize) {
  const passwordHash = await bcrypt.hash('password123', 10);
  await queryInterface.bulkInsert('users', [
    {
      name: 'Alice Uwimana',
      email: 'alice@example.com',
      profile: null,
      phone: '0788123456',
      password: passwordHash,
      status: 'active',
      latitude: -1.9577,
      longitude: 30.1127,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Bob Nsengiyumva',
      email: 'bob@example.com',
      profile: null,
      phone: '0788765432',
      password: passwordHash,
      status: 'active',
      latitude: -1.9441,
      longitude: 30.0619,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {});
}
