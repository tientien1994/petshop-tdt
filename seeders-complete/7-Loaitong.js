'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Loaitongs', [
        {
          name:"cho chó",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name:"cho mèo",
          createdAt: new Date(),
          updatedAt: new Date()

        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Loaitongs', null, {});
     
  }
};
