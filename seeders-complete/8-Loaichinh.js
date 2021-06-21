'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Loaichinhs', [
        {
          name:"Thức ăn",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Quần áo",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Vòng cổ, dây dắt, rọ mõm",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Vật dụng ăn uống",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Y tế và thuốc",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Mỹ phẩm & làm đẹp",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Dụng cụ vệ sinh",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Chuồng, giường, nhà, túi",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Đồ chơi, phụ kiện, huấn luyện",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Sản phẩm chỉ bán online",
          loaitongId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Thức ăn",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Chuồng, giường, nhà, túi",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Vòng cổ, dây dắt, rọ mõm",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Vật dụng ăn uống",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Y tế & thuốc cho mèo",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Mỹ phẩm & làm đẹp",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Dụng cụ vệ sinh",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Quần áo",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Đồ chơi, phụ kiện huấn luyện",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Cát vệ sinh",
          loaitongId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Loaichinhs', null, {});
     
  }
};
