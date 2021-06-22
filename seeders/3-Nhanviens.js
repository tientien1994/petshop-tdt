'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Nhanviens', [
        {
          name:"Đỗ Trung Giang",
          vitriId:1,
          chinhanhId:1,
          phone:"87879842342",
          diachi:"Ngẫu nhiên",
          luong:223134,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name:"Nguyễn Hải Đăng",
          vitriId:2,
          chinhanhId:3,
          phone:"87879842342",
          diachi:"Ngẫu nhiên",
          luong:14123141,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name:"Trần Quốc Tuấn",
          vitriId:4,
          chinhanhId:1,
          phone:"87879842342",
          diachi:"Ngẫu nhiên",
          luong:14131,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name:"Pham Minh Phúc",
          vitriId:2,
          chinhanhId:4,
          phone:"87879842342",
          diachi:"Ngẫu nhiên",
          luong:23424,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name:"Cao Trung Hiếu",
          vitriId:3,
          chinhanhId:2,
          phone:"87879842342",
          diachi:"Ngẫu nhiên",
          luong:23425,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name:"Nguyền Tuấn Anh",
          vitriId:1,
          chinhanhId:3,
          phone:"87879842342",
          diachi:"Ngẫu nhiên",
          luong:23425,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name:"Trần Thanh Mai",
          vitriId:1,
          chinhanhId:2,
          phone:"87879842342",
          diachi:"Ngẫu nhiên",
          luong:234532,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Nhanvien', null, {});
     
  }
};
