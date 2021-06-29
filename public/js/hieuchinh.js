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