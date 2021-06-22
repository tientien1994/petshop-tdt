'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Chinhanhs', [
     {
        name:'Hải Phòng',
        lat:20.865139,
        long:106.683830,
        diachi:"1, Đặng Văn Ngữ, Phường 6, Quận 1, Hải Phòng",
        vungId:1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'Sóc Trăng',
        lat:9.602521,
        long:105.973907,
        diachi:"1, Lê Lợi, Phường 4, Quận 2, Sóc Trăng",
        vungId:3,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'Huế',
        lat:16.463713,
        long:107.590866,
        diachi:"23, Hải Triều, Phường 5, Tp Huế",
        vungId:2,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'Bình Dương',
        lat:10.924067,
        long:106.713028,
        diachi:"3, Tôn Thất Thuyết, Phường 3, Bình Dương",
        vungId:3,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name:'Vinh',
        lat:18.679585,
        long:105.681335,
        diachi:"123, Trần Huy Liệu, Phường 10, Vinh, Nghệ An",
        vungId:2,
        createdAt: new Date(),
        updatedAt: new Date(),

      }  
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Chinhanhs', null, {});
     
  }
};
