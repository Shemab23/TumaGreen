'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('applicants', [
    { application_id: 1, profile: 'charles_profile.jpg', status: 'pending', reason: null, created_at: new Date(), updated_at: new Date() },
    { application_id: 2, profile: 'diane_profile.jpg', status: 'approved', reason: 'Good rating', created_at: new Date(), updated_at: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('applicants', null, {});
}
