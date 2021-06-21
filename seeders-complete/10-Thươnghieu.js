'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Thuonghieus', [
        {
        name:'AFT',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name:'Classic',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name:'Bio-pharma',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name:'Famina',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name:'Goat',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name:'Golden Milk',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name:'Yaho',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name:'Trixie',
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Thuonghieus', null, {});
     
  }
};
