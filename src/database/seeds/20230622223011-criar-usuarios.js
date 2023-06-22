const bcryptjs = require('bcryptjs');

//  npx sequelize seed:generate --name criar-usuarios
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'Diego',
          email: 'diego@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Diego Alencar',
          email: 'diegoalencar@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});
  },

  // npx sequelize db:seed:all

  async down() { },
};
