'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Vungs', [
        {
          name:'Các tỉnh miền Bắc',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          name:'Các tỉnh miền Trung',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          name:'Các tỉnh miền Nam',
          createdAt: new Date(),
          updatedAt: new Date() 
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Vungs', null, {});
     
  }
};
