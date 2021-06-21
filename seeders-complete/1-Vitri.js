'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Vitris', [
        {
          tenchucvu: 'Nhân viên',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tenchucvu: 'Bác sĩ thú y',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tenchucvu: 'Quản lý',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tenchucvu: 'Giao hàng',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        ,
        {
          tenchucvu: 'Bảo vệ',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Vitris', null, {});
     
  }
};
