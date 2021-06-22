'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Tlbaiviets', [
        {
         tentheloai:'Tin khuyến mãi',
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          tentheloai:'Tin dịch vụ',
          createdAt: new Date(),
          updatedAt: new Date()
         },
        {
          tentheloai:'Tin sự kiện',
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          tentheloai:'Mẹo vặt cho chó',
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          tentheloai:'Mẹo vặt cho mèo',
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          tentheloai:'Thông tin hữu ích về các loài dộng vật khác',
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          tentheloai:'Câu hỏi thường gặp',
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          tentheloai:'Tin tuyển dụng',
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          tentheloai:'Nhận nuôi thú cưng',
          createdAt: new Date(),
          updatedAt: new Date()
         }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Tlbaiviets', null, {});
     
  }
};
