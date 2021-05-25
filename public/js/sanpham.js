$(function() {
    var asptab=$('.asp-tab-head ul li')
    var aspcontent=$('.asp-tab-item')
    asptab.click(function() {
        asptab.removeClass('asp-active')
        $(this).addClass('asp-active')
        console.log("chi so index la"+  $(this).index())
        aspcontent.hide()
        aspcontent.removeClass('asp-item-ative')
        aspcontent.eq($(this).index()).show("1000").addClass('asp-item-ative')
    })
})
$(function() {
    var inputsl=$('#inputsl');
    var inputcong=$('#inputc')
    var inputtru=$('#inputt')
    //console.log(inputsl)
    inputcong.click(function(){
        let inputmun=parseInt(inputsl.val())
        
        
        inputsl.val(function(){
            return inputmun+1;
        });
        
    })
    inputtru.click(function(){
        let inputmun=parseInt(inputsl.val())
        if(inputmun>0){
            inputsl.val(function(){
                return inputmun-1;
            });
        }
        else{
            inputsl.val(function(){
                return 0;
            });
        }
        
    })
})