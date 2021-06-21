
$(function(){
    $(window).scroll(function(e){
      var y=$('html, body').scrollTop();
      
      if(y>0){
        if(y>$('.nd1').offset().top-600){
          $('.nd1').addClass('nd1-ani');
          $('.nd1 h3.title, .nd1 .nd .item').addClass('anibot').one('animationend', function(){
            $(this).addClass('o1')
          })
          $('.nd1 .nd .item-2 p').addClass('anileft').one('animationend', function(){
            $(this).addClass('o1')
          })
        }
        
        
        if(y>$('.nd2').offset().top-900){
          $('.nd2').addClass('nd2-ani');
          $('.img-top, .img-bot,.nd2,.nd2-text .title').addClass('anileft').one('animationend', function(){
            $(this).addClass('o1')
          })
          $('.nd2-text .title,.nd2-text .color-text,.nd2-text p.text-nomal, .nd2-text .tow-text,.nd2 .button button').addClass('aniright').one('animationend', function(){
            $(this).addClass('o1')
          })
          
        }
        if(y>$('.nd3').offset().top-600){
          $('.nd3').addClass('nd3-ani');
          $('.nd3 h3,.nd3 .noidung').addClass('anibot').one('animationend', function(){
            $(this).addClass('o1')
          })
          $('.nd3 .ancy-parent, .nd3 .noidung .agency, .nd3 .noidung .agency p,.nd3 .noidung .agency a,.nd3 .video').addClass('aniright').one('animationend', function(){
            $(this).addClass('o1')
          })
        }
        if(y>$('.nd4-bg').offset().top-600){
          $('.nd4-bg').addClass('nd4-ani');
          $('.nd4 h2.wedo-title, .wedo-text, .wedo-img').addClass('anileft').one('animationend', function(){
            $(this).addClass('o1')
           //$('.wedo-label').addClass('wedo-label-trans')
          })
          $('.wedo-per').addClass('anileft').one('animationend', function(){
            $(this).addClass('o1')
            let per=$('.wedo-per').attr('data-per')
            var percent=0;
            const per_interval=setInterval(function(){
              $('.wedo-label p').html((percent++)+'%')
              if(percent===parseInt(per)+1){
                clearInterval(per_interval)
              }
            },3000/per)
            console.log("per: "+ per)
            $('.wedo-label').addClass('wedo-label-trans')
            
            $('.wedo-percent').addClass('wedo-percent-trans')
          })
          $('.wedotap').addClass('aniright').one('animationend', function(){
            $(this).addClass('o1')
          })
        }
        if(y>$('.nd5').offset().top-600){
          $('.nd5').addClass('nd5-ani');
        }
        if(y>$('.nd6').offset().top-600){
          $('.nd6').addClass('nd6-ani');
        }
        if(y>$('.nd7').offset().top-600){
          $('.nd7').addClass('nd7-ani');
        }
        if(y>$('.nd9').offset().top-600){
          $('.nd9').addClass('nd9-ani')
           
        }
        if(y>$('.nd10').offset().top-600){
          $('.nd10').addClass('nd10-ani');
        }
        if(y>$('.nd9-2').offset().top-600){
          $('.nd9-2').addClass('nd9-2-ani');
        }
        if(y>$('.nd11').offset().top-600){
          $('.nd11').addClass('nd11-ani');
        }
        if(y>$('.nd12').offset().top-600){
          $('.nd12').addClass('nd12-ani');
        }
        if(y>$('.nd13').offset().top-600){
          $('.nd13').addClass('nd13-ani');
        }

      }
   })
  })