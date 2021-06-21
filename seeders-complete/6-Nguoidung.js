'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Nguoidungs', [
        {
        name: 'trandinhtien19941@gmail.com',
        isadmin:true,
        matkhau:'$2a$10$HgF17b3Q.84wZnGcTSx0veGe9HS5INQ5ydBgt1Wujppt.RW55uoNu',
        fullname:'Trần Đình Tiến',
        createdAt: new Date(),
        updatedAt: new Date()
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Nguoidungs', null, {});
     
  }
};
