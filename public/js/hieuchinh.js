// function xoanhanvien(){
    
//     // if(confirm('Bạn có muốn xóa hết giỏ hàng không???')){
//     //     $.ajax({
//     //         url: '/giohang/all',
//     //         type: 'GET',
//     //         success: function(){
                
//     //             $('#sluong').html(0);
//     //             $('#khungsanpham').html("<div class='saukhixoahetsanpham'>Giỏ hàng được dọn dẹp, <a href='/'>Quay về trang chủ và chọn sản phẩm</a></div>");   
//     //         }
//     //     })
//     // }
    
// }
$('.xoanhanvien').click(function(){
    let url=$(this).data('href')
    let name=$(this).data('name')
    let id=$(this).data('id')
    if(confirm(`Bạn có muốn xóa nhân viên ${name} có Id là ${id}  không???`)){
        location.href = url
    }
})
$('.xoasanpham').click(function(){
    let url=$(this).data('href')
    let name=$(this).data('name')
    let id=$(this).data('id')
    if(confirm(`Bạn có muốn xóa sản phẩm ${name} có Id là ${id}  không???`)){
        location.href = url
    }
})
$(document).ready(function(){
    $('.suanhanvien-b1').addClass('acc')
    $('.suanhanvien-tructiep').hide()
    $('.suanhanvien-b1').click(function(){
        $('.suanhanvien-file').show()
        $('.suanhanvien-tructiep').hide()
        $(this).addClass('acc')
        $('.suanhanvien-b2').removeClass('acc')
    })
    $('.suanhanvien-b2').click(function(){
        $('.suanhanvien-file').hide()
        $('.suanhanvien-tructiep').show()
        $(this).addClass('acc')
        $('.suanhanvien-b1').removeClass('acc')
    })
})

function kiemtragiasanpham() {
    let x = document.forms["formsuansanpham"]["giasanpham"].value;

    if (x>0) {
      
      return true;
    }
    else{
        alert("Giá sản phẩm chưa đúng");
        return false;
    }
  }

  function previewImg(event){ 
    // Gán giá trị các file vào biến files
var files = document.getElementById('img_file').files;
// Show khung chứa hình nhìn thấy trước
$('#formUpload .box-preview-img').show();
// Thêm chữ "Xem trước" vào khung
$('#formUpload .box-preview-img').html('Xem trước');

// sử dụng vòng lặp for để thêm các thẻ img vào khung chứa hình xem trước
for (i = 0; i < files.length; i++)
// Thêm thẻ img theo i
$('#formUpload .box-preview-img').append('');
// Thêm src vào mỗi thẻ img theo id = i
$('#formUpload .box-preview-img img:eq('+i+')').attr('src', URL.createObjectURL(event.target.files[i]));
  }
