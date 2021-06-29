$(document).ready(() => {
    $('.themvaogiohang').on('click',themvaogiohang)
})
function themvaogiohang(){
    var id = $(this).data('id')
    var soluong;
        if($('#sll').length>0){
            soluong=parseInt($('#sll').val())
        }
        else{
            soluong=1;
        } 
        //console.log($('#sll').length)
        //console.log(soluong)
        if(soluong>0){
            $.ajax({
                url: '/giohang',
                type: 'POST',
                data: { id, soluong },
                success: function(result){
                    $('#sluong').html(result.toanbosoluong);
                }
            }) 
        }     
}
function suasanpham(id, soluong){
        if(soluong<=0){
            xoakhoigiohang(id)
        }
        else{
            capnhatgiohang(id, soluong)
        }
    }
function xoakhoigiohang(id){
        $.ajax({
            url: '/giohang',
            type: 'DELETE',
            data: { id },
            success: function(result){
                $('#sluong').html(result.toanbosoluong+" vnd");
                $('#toanbogia').html(result.toanbogiaformat+" vnd");
                if(result.toanbosoluong>1){
                    $(`#item${id}`).remove();
                }
                else{
                    $('#khungsanpham').html("<div class='saukhixoahetsanpham'>Giỏ hàng được dọn dẹp, <a href='/'>Quay về trang chủ và chọn sản phẩm</a></div>");
                }
                
            }
        })
    }
function capnhatgiohang(id,soluong){
        
        $.ajax({
            url: '/giohang',
            type: 'PUT',
            data: { id, soluong},
            
            success: function(result){
                $('#sluong').html(result.toanbosoluong);
                $('#toanbogia').html(result.toanbogiaformat +" vnd");
                $(`#tonggia${id}`).html(result.item.tonggiaformat +" vnd");
            }
        })
    }
function xoahetgiohang(){
        if(confirm('Bạn có muốn xóa hết giỏ hàng không???')){
            $.ajax({
                url: '/giohang/all',
                type: 'DELETE',
                success: function(){
                    
                    $('#sluong').html(0);
                    $('#khungsanpham').html("<div class='saukhixoahetsanpham'>Giỏ hàng được dọn dẹp, <a href='/'>Quay về trang chủ và chọn sản phẩm</a></div>");   
                }
            })
        }
        
    }

$(document).ready(function() {

    var galery=$('.asp-galley-item')
    galery.eq(0).addClass('active')
   
    var image=$('#asp-img')
    var crschinh=image.find('img').attr('src')
    
        galery.mouseover(function(){     
            image.find('img').attr('src',$(this).find('img').attr('src'))
        })
        galery.mouseout(function(){
            image.find('img').attr('src',crschinh)
        })

    galery.click(function(){
        image.find('img').attr('src',$(this).find('img').attr('src'))
        crschinh=$(this).find('img').attr('src')
        galery.removeClass('active')
        $(this).addClass('active')
        
    })

 
    




   
    $(document).ready(function(){
        
        var native_width = 0;
        var native_height = 0;
        $(".asp-img").mousemove(function(e){
                var crschinh=image.find('img').attr('src')
                $(".asp-anhzoom").css("background-image", "url(" +crschinh+ ")");
            if(!native_width && !native_height)
            {
                var image_object = new Image();
                image_object.src = $(".asp-anhchinh").attr("src");
                native_width = image_object.width;//thong so buc anh trong file
                native_height = image_object.height;//thong so buc anh trong file 
            }
            else
            {
                
                
                var vitrianhchinh = $(this).offset();
                ///////vi tri con tro trong anh
                var mx = e.pageX - vitrianhchinh.left;
                var my = e.pageY - vitrianhchinh.top;
                
                // neu  vi tri con tro trong anh be hon vi tri cau div co class la $(this) vaf phia lon hon 0
                if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
                {
                    //thi hien len
                    $(".asp-anhzoom").fadeIn(100);
                }
                else
                {
                    // thi an di
                    $(".asp-anhzoom").fadeOut(100);
                }
                //neu co visibility:visible, opaciy:1, display:block, thi thuc hien
                if($(".asp-anhzoom").is(":visible"))
                {
                    var rx = Math.round(mx/$(".asp-anhchinh") .width()*native_width- $(".asp-anhzoom").width()/2)*-1;
                    var ry = Math.round(my/$(".asp-anhchinh").height()*native_height - $(".asp-anhzoom").height()/2)*-1;
                    var bgp = rx + "px " + ry + "px";
                    //vi tri cua div anh zoom
                    var px = mx - $(".asp-anhzoom").width()/2;
                    var py = my - $(".asp-anhzoom").height()/2
                    $(".asp-anhzoom").css({left: px, top: py, backgroundPosition: bgp});
                }
            }
        })
        
        
    }) 
})
$(document).ready(function() {
    $(".motsp-tenthuonghieu h5").each(function() {
    var text = $(this).html();
    if(text.length > 10){
    text = text.substring(0,10);
    $(this).html(text+'...');
    }
})
})
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
function kiemtragiatri() {
    let x = document.forms["formsuanhanvien"]["sodienthoainhanvien"].value;

    if (isNumber(x)&& x.length==10) {
      
      return true;
    }
    else{
        alert("Số điện thoai chưa đúng");
        return false;
    }
  }

//   $('.thanhtoan').click(function(){
//     $.ajax({
//         url: '/thanhtoan/hoanthanh',
//         type: 'UPDATE',
//         data: {  },
//         success: function(result){
//             $('#sluong').html(result.toanbosoluong+" vnd");
//             $('#toanbogia').html(result.toanbogiaformat+" vnd");
//             if(result.toanbosoluong>1){
//                 $(`#item${id}`).remove();
//             }
//             else{
//                 $('#khungsanpham').html("<div class='saukhixoahetsanpham'>Giỏ hàng được dọn dẹp, <a href='/'>Quay về trang chủ và chọn sản phẩm</a></div>");
//             }
            
//         }
//     })
//   })