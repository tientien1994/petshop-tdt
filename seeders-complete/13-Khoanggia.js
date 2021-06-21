'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Khoanggia', [
        {
          min:0,
          minname:'0',
          maxname:'1 triệu',
          max:1000000,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          min:1000000,
          minname:'1 triệu',
          maxname:'3 triệu',
          max:3000000,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          min:3000000,
          minname:'3 triệu',
          maxname:'5 triệu',
          max:5000000,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          min:5000000,
          minname:'5 triệu',
          maxname:'7 triệu',
          max:7000000,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          min:7000000,
          minname:'7 triệu',
          maxname:'10 triệu',
          max:10000000,
          createdAt: new Date(),
          updatedAt: new Date() 
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Khoanggia', null, {});
     
  }
};
