'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Loaisanphams', [
        {
        name:'Pate',
        loaichinhId:1,
        loaitongId:1,
        link:"pate",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name:'Thức ăn khô',
          loaichinhId:1,

          loaitongId:1,
          link:"thucankho",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thức ăn ướt',
          loaichinhId:1,

          loaitongId:1,
          link:"thucanuot",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thức ăn dặm huấn luyện',
          loaichinhId:1,

          loaitongId:1,
          link:"thucandam",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thức ăn tươi sống',
          loaichinhId:1,

          loaitongId:1,
          link:"thucantuoisong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Snack, xương, bánh',
          loaichinhId:1,

          loaitongId:1,
          link:"snackxuongbanh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Bình sữa',
          loaichinhId:1,

          loaitongId:1,
          link:"binhsua",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Quần áo',
          loaichinhId:2,

          loaitongId:1,
          link:"quanao",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Váy đầm',
          loaichinhId:2,

          loaitongId:1,
          link:"vaydam",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Phụ kiện',
          loaichinhId:2,

          loaitongId:1,
          link:"phukien",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Vòng cố',
          loaichinhId:3,

          loaitongId:1,
          link:"phukien",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Dây thắt',
          loaichinhId:3,

          loaitongId:1,
          link:"daythat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Rọ mõm',
          loaichinhId:3,

          loaitongId:1,
          link:"romom",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Bát, chén ăn',
          loaichinhId:4,

          loaitongId:1,
          link:"romom",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Bình nước',
          loaichinhId:4,

          loaitongId:1,
          link:"binhnuoc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Canxi & vitamin',
          loaichinhId:5,

          loaitongId:1,
          link:"vitamin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thuốc trị nội ngoại',
          loaichinhId:5,

          loaitongId:1,
          link:"thuocnoingoai",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chăm sóc da, lông, móng',
          loaichinhId:5,

          loaitongId:1,
          link:"chamsocdalongmong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:' Chăm sóc răng miệng',
          loaichinhId:5,

          loaitongId:1,
          link:"chamsocrangmieng",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chăm sóc răng miệng',
          loaichinhId:5,

          loaitongId:1,
          link:"chamsocsinhsan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Sữa tắm, dầu',
          loaichinhId:6,

          loaitongId:1,
          link:"suatam",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chăm sóc tai & miệng',
          loaichinhId:6,

          loaitongId:1,
          link:"chamsoctaimieng",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Khử mùi hôi, sạch nhà',
          loaichinhId:6,

          loaitongId:1,
          link:"khumui",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cắt tỉa, chăm sóc da',
          loaichinhId:7,

          loaitongId:1,
          link:"cattiachamsocda",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Dụng cụ hót phân, các',
          loaichinhId:7,

          loaitongId:1,
          link:"dungcu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chai vệ sinh',
          loaichinhId:7,

          loaitongId:1,
          link:"chai",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tã quần, tấm lót',
          loaichinhId:7,

          loaitongId:1,
          link:"ta",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nhà, đệm, giường',
          loaichinhId:8,

          loaitongId:1,
          link:"nhademgiuong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lồng, túi vận chuyển',
          loaichinhId:8,

          loaitongId:2,
          loaitongId:1,
          link:"longtuivanchuyen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Giỏ xách',
          loaichinhId:8,

          loaitongId:2,
          loaitongId:1,
          link:"gioxach",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Xương cao su',
          loaichinhId:9,

          loaitongId:2,
          loaitongId:1,
          link:"xuongcaosu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Bình nước cho chó',
          loaichinhId:10,

          loaitongId:2,
          loaitongId:1,
          link:"binhnuoc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thức ăn khô',
          loaichinhId:11,

          loaitongId:2,
          link:"thucankho",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thức ăn ướt',
          loaichinhId:11,

          loaitongId:2,
          link:"thucanuot",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Pate',
          loaichinhId:11,

          loaitongId:2,
          link:"pate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thức ăn dặm huấn luyện',
          loaichinhId:11,

          loaitongId:2,
          link:"thucandam",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thức ăn tươi sống',
          loaichinhId:11,

          loaitongId:2,
          link:"thucantuoisong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Snack, xương, bánh',
          loaichinhId:11,

          loaitongId:2,
          link:"snackxuongbanh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Sửa, bình sữa',
          loaichinhId:11,

          loaitongId:2,
          link:"binhsua",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nhà, đệm, giường',
          loaichinhId:12,

          loaitongId:2,
          link:"nhademgiuong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lồng, túi vận chuyển',
          loaichinhId:12,

          loaitongId:2,
          link:"longtuivanchuyen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Giỏ xách',
          loaichinhId:12,

          loaitongId:2,
          link:"gioxach",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Vòng cổ',
          loaichinhId:13,

          loaitongId:2,
          link:"vongco",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Dây dắt',
          loaichinhId:13,

          loaitongId:2,
          link:"daydat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Bát, chén ăn',
          loaichinhId:14,

          loaitongId:2,
          link:"chenan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Bình nước',
          loaichinhId:14,

          loaitongId:2,
          link:"binhnuoc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Canxi & vitamin',
          loaichinhId:15,

          loaitongId:2,
          link:"vitamins",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thuốc trị nội ngoại',
          loaichinhId:15,

          loaitongId:2,
          link:"thuocnoingoai",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chăm sóc da, lông, móng',
          loaichinhId:15,

          loaitongId:2,
          link:"chamsocdalongmong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chăm sóc răng miệng',
          loaichinhId:15,

          loaitongId:2,
          link:"chamsocrangmieng",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chăm sóc tai mắt',
          loaichinhId:15,

          loaitongId:2,
          link:"chamsoctaimat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thuốc gây mê',
          loaichinhId:15,

          loaitongId:2,
          link:"thuocgayme",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Thuốc sát trùng',
          loaichinhId:15,

          loaitongId:2,
          link:"thuocsattrung",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Kích dục tố',
          loaichinhId:15,

          loaitongId:2,
          link:"khichducto",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Sữa tắm, dầu xả',
          loaichinhId:16,

          loaitongId:2,
          link:"suatam",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chăm sóc tai, miệng',
          loaichinhId:16,

          loaitongId:2,
          link:"chamsoctaimieng",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Khử mùi kháng khuẩn',
          loaichinhId:17,

          loaitongId:2,
          link:"khumui",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cắt, tỉa, chăm sóc da',
          loaichinhId:17,

          loaitongId:2,
          link:"cattia",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cát vệ sinh',
          loaichinhId:17,

          loaitongId:2,
          link:"catvesinh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chai vệ sinh',
          loaichinhId:17,

          loaitongId:2,
          link:"chaivesinh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Áo',
          loaichinhId:18,

          loaitongId:2,
          link:"ao",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Bóng nhựa',
          loaichinhId:19,

          loaitongId:2,
          link:"bongnhua",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cát hữu cơ',
          loaichinhId:20,

          loaitongId:2,
          link:"bongnhua",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cát vệ sinh',
          loaichinhId:20,

          loaitongId:2,
          link:"catvesinh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cát đất sét',
          loaichinhId:20,

          loaitongId:2,
          link:"catdatset",
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Loaisanphams', null, {});
     
  }
};
