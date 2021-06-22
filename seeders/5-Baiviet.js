'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Baiviets', [
        {
          name:'Cơ hội cuối cùng săn hàng giá gốc',
          tlbaivietId:1,
          luotxem:0,
          title:'Với mỗi khách hàng phát sinh đơn hàng đầu tiên tại PetCity trong khoảng thời gian này, Sen sẽ nhận ngay 1 voucher mua hàng trị giá 50k, áp dụng cho các sản phẩm siêu hot tại cửa hàng nhé.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Hướng dã chi tiết về cách tắm cho chó',
          tlbaivietId:2,
          luotxem:0,
          title:'Sale 12% và tặng kèm voucher 10% mua đồ chơi/ đồ dùng khi mua 3 bao cát vệ sinh cùng nhãn hiệu',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Câu chuyện cảm đông về chó mèo',
          tlbaivietId:3,
          luotxem:0,
          title:'Thức ăn và cát, mua càng nhiều giảm càng sâu',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lợi ích không ngờ khi nuôi thú cưng',
          tlbaivietId:4,
          luotxem:0,
          title:'Giảm tới 15% các sản phẩm cát, thức ăn, đồ dùng cho thú cưng cùng hàng ngàn món quà tặng hấp dẫn cho mỗi đơn hàng phát sinh',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nuôi mèo con như thé nào',
          tlbaivietId:5,
          luotxem:0,
          title:'phẩm cát, thức ăn, đồ dùng cho thú cưng cùng hàng ngàn món ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Các giống mèo quý hiếm nhất trên thế giới',
          tlbaivietId:6,
          luotxem:0,
          title:'Giảm 5% khi mua 1 gói, 8% khi mua 3 gói , 10% mua 5 gói thức ăn trên 1kg tất cả các nhãn (Royal canin, Smart heart, Me-o. Catsrang, Dogmaina...)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tẩy giun sáng cho mèo như thế nào',
          tlbaivietId:7,
          luotxem:0,
          title:'Giảm 10% khi mua 1 gói, 12% khi mua 3 gói và 15% khi mua 5 gói các thương hiệu cát vệ sinh cho mèo ( Sanicat, Cature, Me-O,...)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tuyển dụng vị trí làm part-time',
          tlbaivietId:8,
          luotxem:0,
          title:'Giảm 10% đồ chơi và dụng cụ huấn luyện các nhãn. Với hóa đơn đồ chơi 159k tặng pate ciao hoặc pate smartheart, với hóa đơn 259k tặng 2 pate ciao hoặc pate smartheart',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tìm chó bị lạc ở Tp Hồ Chí Minh',
          tlbaivietId:9,
          luotxem:0,
          title:'Cùng hàng ngàn gói thức ăn nhỏ xinh dành tặng khách hàng phát sinh hóa đơn trong 3 ngày này.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cơ hội cuối cùng săn hàng giá gốc22',
          tlbaivietId:1,
          luotxem:0,
          title:'Rủ ngay 1 người bạn mới đến mua hàng cùng tại PetCity và cùng nhau "chia sẻ" voucher này nhé.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Hướng dã chi tiết về cách tắm cho chó22',
          tlbaivietId:2,
          luotxem:0,
          title:'Sale 10% khi mua 2 bao cát vệ sinh cùng nhãn hiệu: Catsan, Sanicat, Me-o, Cature, Kit kat...',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Câu chuyện cảm đông về chó mèo22',
          tlbaivietId:3,
          luotxem:0,
          title:'Giảm 5% khi mua 1 gói, 8% khi mua 3 gói , 10% mua 5 gói thức ăn mọi trọng lượng tất cả các nhãn (Royal canin, Smart heart, Me-o. Catsrang, Dogmaina...)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lợi ích không ngờ khi nuôi thú cưng22',
          tlbaivietId:4,
          luotxem:0,
          title:'Giảm 10% đồ chơi và dụng cụ huấn luyện các nhãn. Với hóa đơn đồ chơi 159k tặng pate ciao hoặc pate smartheart, với hóa đơn 259k tặng 2 pate ciao hoặc pate smartheart',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nuôi mèo con như thé nào22',
          tlbaivietId:5,
          luotxem:0,
          title:'Ngày hội mua sắm- tham gia là có quà',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Các giống mèo quý hiếm nhất trên thế giới22',
          tlbaivietId:6,
          luotxem:0,
          title:'Chương trình cụ thể tại cửa hàng',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tẩy giun sáng cho mèo như thế nào22',
          tlbaivietId:7,
          luotxem:0,
          title:'Facebook "Tặng 50k cho bạn mới" ở chế độ công khai. Số lượng sản phẩm áp dụng mã voucher có hạn, Sen tranh thủ g',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tuyển dụng vị trí làm part-time22',
          tlbaivietId:8,
          luotxem:0,
          title:'1 gói Me-O 350gm tặng 1 gói thức ăn Me-O 80gm',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tìm chó bị lạc ở Tp Hồ Chí Minh22',
          tlbaivietId:9,
          luotxem:0,
          title:'1 gói Me-O 1.2kg/1.1kg tặng 1 gói pate Me-O Delite 70gm',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cơ hội cuối cùng săn hàng giá gốc33',
          tlbaivietId:1,
          luotxem:0,
          title:'Sen cần phải share và like post Facebook "Tặng 50k cho bạn mới" ở chế độ công khai. Số lượng sản phẩm áp dụng mã voucher có hạn, Sen tranh thủ ghé cửa hàng mua sớm để có nhiều sự lựa chọn nhé!!!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Hướng dã chi tiết về cách tắm cho chó33',
          tlbaivietId:2,
          luotxem:0,
          title:'Sale 6% và tặng kèm voucher 10% mua đồ chơi/ đồ dùng khi mua 3 sản phẩm thức ăn hoặc 3 sản phẩm sữa tắm',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Câu chuyện cảm đông về chó mèo33',
          tlbaivietId:3,
          luotxem:0,
          title:'Đến hẹn lại lên, vào mỗi thứ 4 hàng tuần, Petcity tưng bừng ưu đãi cho các sản phẩm thức ăn và cát vệ sinh.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lợi ích không ngờ khi nuôi thú cưng33',
          tlbaivietId:4,
          luotxem:0,
          title:'Giảm ngay 3% cho các sản phẩm thức ăn, áp dụng đối với các loại thức ăn khô, ướt, pate của các nhãn hiệu Royalcanin, Morando, Tellme, Pedigree,  Catsrang, Dog mania, Me-o, Whiskas, Smartheart,...',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nuôi mèo con như thé nào33',
          tlbaivietId:5,
          luotxem:0,
          title:'Giảm ngay 5% các loại cát vệ sinh: Me-o, Cature,  Sanicat, Cats- eye,....',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Các giống mèo quý hiếm nhất trên thế giới33',
          tlbaivietId:6,
          luotxem:0,
          title:'Giảm ngay 5% các loại hóa mỹ phẩm cho boss  JD, SHD, SOS...',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tẩy giun sáng cho mèo như thế nào33',
          tlbaivietId:7,
          luotxem:0,
          title:'Thời gian: thứ 4 hàng tuần trong tháng 05 năm 2021',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tuyển dụng vị trí làm part-time33',
          tlbaivietId:8,
          luotxem:0,
          title:'Địa điểm: Hệ thống cửa hàng Petcity toàn quốc',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tìm chó bị lạc ở Tp Hồ Chí Minh33',
          tlbaivietId:9,
          luotxem:0,
          title:'Lưu ý: Gía trên website chưa áp dụng khuyến mãi trên.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cơ hội cuối cùng săn hàng giá gốc44',
          tlbaivietId:1,
          luotxem:0,
          title:'Còn Sen nào đã từng mua hàng tại PetCity nhưng vẫn muốn nhận ưu đãi này thì phải làm sao?',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Hướng dã chi tiết về cách tắm cho chó44',
          tlbaivietId:2,
          luotxem:0,
          title:'Sale 5% khi mua 2 sản phẩm sữa tắm cho Boss bất kỳ: SOS, JD, SHD,...',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Câu chuyện cảm đông về chó mèo44',
          tlbaivietId:3,
          luotxem:0,
          title:'Tặng quà free cho khách hàng Nữ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lợi ích không ngờ khi nuôi thú cưng44',
          tlbaivietId:4,
          luotxem:0,
          title:'Chào mừng ngày 8/3 PetCity SALE S.Ố.C dây dắt, sữa tắm, quần áo...',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nuôi mèo con như thé nào44',
          tlbaivietId:5,
          luotxem:0,
          title:'Bill sp khuyến mãi trị giá 199k tặng bánh thưởng phô mai trị giá 55k/ smartheart treat shiny',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Các giống mèo quý hiếm nhất trên thế giới44',
          tlbaivietId:6,
          luotxem:0,
          title:'Tặng bao thức ăn royal Canin xinh xắn cho bill bất kỳ.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tẩy giun sáng cho mèo như thế nào44',
          tlbaivietId:7,
          luotxem:0,
          title:'Tại Hà Nội và TP Hồ Chí Minh',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tuyển dụng vị trí làm part-time44',
          tlbaivietId:8,
          luotxem:0,
          title:'Sale up to 15% dây dắt, vòng cổ, sữa tắm',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tìm chó bị lạc ở Tp Hồ Chí Minh44',
          tlbaivietId:9,
          luotxem:0,
          title:'Sale 10 % quần áo phụ kiện + mua 1 tặng 1 các nhãn Petstar, LHK, ABC.',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name:'Cơ hội cuối cùng săn hàng giá gốc55',
          tlbaivietId:1,
          luotxem:0,
          title:'Sự thật đấy nhé! Nhưng chỉ áp dụng từ 13/05 - 23/05/2021 thôi ạ. ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Hướng dã chi tiết về cách tắm cho chó55',
          tlbaivietId:2,
          luotxem:0,
          title:'Sale 5% khi mua 2 bao thức ăn (khô, ướt, pate, bánh thưởng,..) của tất cả các thương hiệu hiện có tại cửa hàng: Tellme, Me-o, SmartHeart, Morando, Pedigree, Whiskat, Catsrang.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Câu chuyện cảm đông về chó mèo55',
          tlbaivietId:3,
          luotxem:0,
          title:'Tại Đà Nẵng',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lợi ích không ngờ khi nuôi thú cưng55',
          tlbaivietId:4,
          luotxem:0,
          title:'Bill sp khuyến mãi trị giá 199k tặng nhỏ mắt Genta drop hoặc gel dinh dưỡng/ men tiêu hóa Bio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nuôi mèo con như thé nào55',
          tlbaivietId:5,
          luotxem:0,
          title:'Tặng túi vải thân thiện môi trường với bill bất kỳ. Tặng Gối hình khúc xương xin xò trị giá 230k với bill từ 250k',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Các giống mèo quý hiếm nhất trên thế giới55',
          tlbaivietId:6,
          luotxem:0,
          title:'Năm mới gõ cửa bằng những trận rét liên hồi. Làm sao để cho boss chó mèo một năm mới ấm áp, xinh đẹp mà không lo cháy ví sen?',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tẩy giun sáng cho mèo như thế nào55',
          tlbaivietId:7,
          luotxem:0,
          title:'Ưu đãi freeship khu vực nội thành khi mua online với hóa đơn có giá trị sau khi đã chiết khấu >200k.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tuyển dụng vị trí làm part-time55',
          tlbaivietId:8,
          luotxem:0,
          title:'Làm sạch tai là một khía cạnh của việc chăm sóc lông thú cưng không nên bỏ qua. Nếu con chó của bạn thường xuyên cắt tỉa từ một chuyên gia chăm sóc chuyên nghiệp, có khả năng tai của nó đượ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tìm chó bị lạc ở Tp Hồ Chí Minh55',
          tlbaivietId:9,
          luotxem:0,
          title:'Hãy tìm một giải pháp làm sạch thương mại được bác sĩ thú y khuyên dùng. Tránh các chất tẩy rửa có chứa cồn hoặc hydro peroxide, có thể gây kích ứng cho đôi tai nhạy cảm của chú chó của bạn,',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Cơ hội cuối cùng săn hàng giá gốc66',
          tlbaivietId:1,
          luotxem:0,
          title:'Thời gian từ: 13/05 - 23/05/2021.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Hướng dã chi tiết về cách tắm cho chó66',
          tlbaivietId:2,
          luotxem:0,
          title:'Sen ơi!!! Siêu bão SALE lớn nhất trong tháng 4 đã ập đến PetCity rồi đây ạ! Cơ hội duy nhất để mua đồ cho Boss giá cực tốt.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Câu chuyện cảm đông về chó mèo66',
          tlbaivietId:3,
          luotxem:0,
          title:'Trước khi bạn bắt đầu, hãy dành một chút thời gian để kiểm tra tai con chó của bạn. Nếu chúng xuất hiện màu đỏ hoặc bị viêm, chúng có mùi khó chịu hoặc con chó của bạn có dấu hiệu bị ngứa, hãy dừng việc bạn đang làm và liên hệ với bác sĩ thú y của bạn. Con chó của bạ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Lợi ích không ngờ khi nuôi thú cưng66',
          tlbaivietId:4,
          luotxem:0,
          title:'Con chó của bạn có thể bị nhiễm trùng hoặc nhiễm ve tai , một trong hai sẽ cần phải được điều trị. Nếu con chó của bạn có nhiều lông, hãy sử dụng nhíp để làm sạch lông ra khỏi ống tai. Một khi tai đã rõ và mọi thứ có vẻ bình thường, hãy đọc hướng dẫn trên chất tẩy rửa tai. Bạn cũng có thể làm theo quy trình từng bước này để làm sạch tai của chú chó của bạn',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Nuôi mèo con như thé nào66',
          tlbaivietId:5,
          luotxem:0,
          title:'Sau khi cho con bạn ngồi, thưởng cho nó một chút gì đó và cho phép nó kiểm tra chai nước rửa tai.Nếu tai của con chó chưa cương cứng, hãy giữ nắp tai thẳng và cẩn thận làm đầy ống tai bằng dung dịch vệ sinh',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Các giống mèo quý hiếm nhất trên thế giới66',
          tlbaivietId:6,
          luotxem:0,
          title:'Sử dụng một quả bóng bông hoặc một miếng bông quấn quanh ngón trỏ của bạn để lau nhẹ phần có thể nhìn thấy của ống tai chó và tai ngoài của bạn. Chỉ sử dụng tăm bông nếu cần thiết và chỉ trên phần có thể nhìn thấy của tai chó của bạn.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tẩy giun sáng cho mèo như thế nào66',
          tlbaivietId:7,
          luotxem:0,
          title:'Mặc dù các bước liên quan đến cách làm sạch tai chó có thể khá đơn giản, nhưng đây là một vài mẹo sẽ giúp nó dễ dàng hơn cho cả bạn và chú chó của bạn.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tuyển dụng vị trí làm part-time66',
          tlbaivietId:8,
          luotxem:0,
          title:'Trừ khi bạn muốn có nước ở mọi nơi, hãy chắc chắn rằng con chó của bạn đang ở trong một khu vực hạn chế. Đặt con chó của bạn trong một bồn tắm hoặc mang nó ra bên ngoài. Hãy chắc chắn rằng bạn đang mặc quần áo cũ sẽ không bị hỏng nếu dung dịch tẩy rửa dính vào nó.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Tìm chó bị lạc ở Tp Hồ Chí Minh66',
          tlbaivietId:9,
          luotxem:0,
          title:'Ngoài ra, đừng tiết kiệm dung dịch vệ sinh. Có rất nhiều thứ cho ống tai chó của bạn hơn những gì bạn có thể thấy. Làm đầy toàn bộ ống tủy bằng dung dịch sẽ giúp đảm bảo toàn bộ tai được làm sạch. Bất kỳ chất tẩy rửa dư thừa nào không bị xóa sổ sẽ bị trụ',
          createdAt: new Date(),
          updatedAt: new Date()
        }   
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Baiviets', null, {});
     
  }
};
