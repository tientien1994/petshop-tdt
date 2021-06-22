'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Loaitongs', [
        {
          name:"cho chó",
          link:'chocho',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name:"cho mèo",
          link:'chomeo',
          createdAt: new Date(),
          updatedAt: new Date()

        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Loaitongs', null, {});
     
  }
};
