$(function () {
  $('.nav-nut').click(function (e) {
    $('.nav').addClass('nav-apper');
    $('.nav-nav').addClass('nav-nav-apper');
    $('.main').addClass('scale_300');
    $('.main-2').addClass('scale_300');
  })

  $('.nav').click(function (e) {
    $('.nav').removeClass('nav-apper');
    $('.nav-nav').removeClass('nav-nav-apper');
    $('.main').removeClass('scale_300');
    $('.main-2').removeClass('scale_300');
  })
})

$(function () {
  $('.acc-btn').click(function () {

    if ($(this).next().hasClass('active')) {
      $(this).next().removeClass('active').slideUp();
      $(this).removeClass('cong');
    }
    else {
      $('.wedotap .acc-curent').removeClass('active').slideUp();
      $('.acc-btn').removeClass('cong');
      $(this).next().addClass('active').slideDown();
      $(this).addClass('cong');
    }


  })
})



$(function () {
  $(window).scroll(function (e) {
    var x = $('html, body').scrollTop();
    if (x > 0) {
      $('.first').addClass('disapper').one("webkitTransitionEnd", function () {

      })
      $('.main.container-fluid').addClass('bienmat')
      //$('.container-fluid.main-2').addClass('main-2-fix')
    }
    else {
      $('.first').removeClass('disapper').one("webkitTransitionEnd", function () {

      })
      //$('.container-fluid.main-2').removeClass('main-2-fix')
      $('.main.container-fluid').removeClass('bienmat')
    }
    if (x > 200) {
      $('.giohang').addClass('giohang-fixed')
    }
    else {
      $('.giohang').removeClass('giohang-fixed')
    }
    if (x > 800) {
      $('#back-to-top').css({ "display": "block" })
    }
    else {
      $('#back-to-top').css({ "display": "none" })
    }


  })
})
$(function () {
  $('.nd5-nav ul li').click(function (e) {
    const value = $(this).data('fit');
    $('.nd5-nav ul li').removeClass(("nd5-active"))
    $(this).addClass("nd5-active")
    if (value == 'All') {
      $('.g-item').show('1000');
    }
    else {
      $('.g-item').not('.' + value).hide('1000');
      $('.g-item').filter('.' + value).show('1000');
    }
  })
})

var myVar = setInterval(myTimer, 0.01);
i = 1;
function myTimer() {


  if (i <= 5114) {
    $('.nd6-item:nth-child(1) .nd6-num').html('<p>' + i + '</p>')

  }
  if (i <= 231) {
    $('.nd6-item:nth-child(2)  .nd6-num').html('<p>' + i + '</p>')

  }
  if (i <= 30) {
    $('.nd6-item:nth-child(3) .nd6-num').html('<p>' + i + '</p>')

  }
  if (i <= 121) {
    $('.nd6-item:nth-child(4) .nd6-num').html('<p>' + i + '</p>')

  }
  i++

}
// paralax
$(function () {
  const para = document.getElementById('para');
  //console.log(para)
  if (para) {
    window.addEventListener('scroll', function () {
      let offset2 = window.pageYOffset;
      // console.log("o2: "+offset2)
      // console.log("o3: "+offset2*0.9)
      //para.style.backgroundPositionY=offset2*0.7+"px";
      para.style.backgroundPositionY = offset2 * 0.7 + "px";
    })
  }

})
$(function () {
  $('.tab-content div:first').show();
  $('.nd11-tab-nav li:first').addClass('tab-acc');
  $('.nd11-tab-nav li').click(function () {
    i = $(this).index();
    //console.log(i)
    $('.nd11-tab-nav li').removeClass('tab-acc');
    $(this).addClass('tab-acc');
    $('.tab-content div').hide();
    $('.tab-content div').hide();
    $('.tab-content div').eq(i).show();
    //$('.nd11-tab-nav li:before').eq(i).css("background-color", "yellow");
    //console.log($('.nd11-tab-nav li:before'))

  })

    ;
})
$(document).ready(function () {

});
$(function () {
  $('.v1').click(function () {
    $('.video-you-back').addClass('video-act');
  })
  $('.overlay-you, .video-you').click(function () {
    $('.video-you-back').removeClass('video-act');

    $('.youtube-video').each(function (index) {
      $(this).attr('src', $(this).attr('src'));
      return false;
    });

  })
})

$(function () {
  $(window).scroll(function (e) {
    var vt = $('html').scrollTop();
    //console.log(vt);
    if (vt > 300) {
      $('.nav-main').addClass('nav-bar-fix')

      setTimeout(function () {
        $('.main-2').removeAttr('style');
      }, 6800)
    }
    else {
      $('.nav-main').removeClass('nav-bar-fix')
    }
  })
});

/////////////////////////////////////////////////////////
const slide = (reponsive, slideParent, SlideConatiner, slideItem, interval, transitionTime, next, prev, node, nodeContainer, bien) => {
  const slideContainer = document.querySelector(slideParent)
  const slide = document.querySelector(SlideConatiner)
  const nextBtn = document.getElementById(next)
  const prevBtn = document.getElementById(prev)
  const stickNavContainer = document.querySelector(nodeContainer)
  let stickNavItem = document.querySelectorAll(node)
  const getSlides = () => document.querySelectorAll(slideItem)
  let slides = getSlides()
  let node2 = $(node)





  let auto;
  let p = new Promise((resolve, reject) => {

  })
  let index = 1;

  let item = 0;//



  //tim so item theo man hinh
  const load = () => {

    for (let i = 0; i < reponsive.length; i++) {//
      if (window.innerWidth > reponsive[i].breakPoint.width) {//
        item = reponsive[i].breakPoint.item
      }
    }


    return item;
  }
  item = load();
  index = item;
  const start = () => {
    slides = getSlides();
    for (let i = 0; i < slides.length; i++) {//
      slides[i].style.minWidth = slideContainer.clientWidth / item + 'px';
    }
  }
  start()


  const tinhtoan = () => {
    const addClone = () => {
      for (i = 0; i < item; i++) {
        slide.append(slides[i].cloneNode(true))
        slide.prepend(slides[slides.length - 1 - i].cloneNode(true))

      }
      slides = getSlides();
      //slides[0].id='last-clone';--------------------------------
      //slides[slides.length-item].id='first-clone'---------------------------------
    }
    addClone();
    const slideWidth = slideContainer.clientWidth / item;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    const startSlide = () => {
      auto = setInterval(() => {
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = transitionTime
        //console.log(slides[index].id + 'id cua index')
        //console.log([index] + ' index')

        allslide()
        stickMove()
      }, interval);
    }
    startSlide();
    slideContainer.addEventListener('mouseenter', () => {
      clearInterval(auto);
    })
    slideContainer.addEventListener('mouseleave', () => {
      startSlide();
    })
    slides = getSlides();

    const allslide = () => {
      slide.addEventListener('transitionend', () => {
        if (index >= slides.length - item) {
          //if(slides[index].id==='first-clone'){
          slide.style.transition = "none";
          index = item;
          slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
        if (index <= item - 1) {
          slide.style.transition = "none";
          //index=slides.length-item-1;
          //index=item+1;
          index = slides.length - item * 2;
          slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
      })
    }
    const stickMove = () => {

      $(node).removeClass('nd9-active')

      $(node).eq(index % (item + 1) - item).addClass('nd9-active')
    }
    const moveToNextSlide = () => {
      //slides=getSlides();
      if (index >= slides.length - 1) return;
      index++;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
      slide.style.transition = transitionTime
      //console.log([index] + ' index')
      stickMove()
    }
    const moveToPrevSlide = () => {
      //slides=getSlides();
      if (index <= 0) {
        index = slides.length - item * 2;
        //console.log("chi so cua item" +item)
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = 'none';
      } else {
        index--;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = transitionTime;
      }
      stickMove()

      //console.log([index] + ' index')
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', moveToNextSlide)
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', moveToPrevSlide)
    }


    if (node) {
      for (i = 0; i <= slides.length - item * 2 - 2; i++) {
        stickNavContainer.append(node2[0].cloneNode(true))
      }

      stickNavItem = $(node)
      stickNavItem[0].classList.add('nd9-active');
      $(node).click(function () {
        $(node).removeClass('nd9-active')
        $(this).addClass('nd9-active')
        let stt = $(this).index()
        index = stt + item;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = transitionTime
      })
    }


  }
  tinhtoan()







}



reponsiv = [//
  { breakPoint: { width: 0, item: 1 } },//
  { breakPoint: { width: 375, item: 2 } },//
  { breakPoint: { width: 600, item: 3 } },//
  { breakPoint: { width: 1200, item: 4 } }//
]
function slideNhanvien() {
  if ($('.nd9-slides').length != 0) {

    let slideParent = '.nd9-nd'
    let slideItem = '.box'
    let slideContainer = '.nd9-slides'
    let interval = 1000;
    let tranTime = '0.3s'
    let nextbtn = 'next-btn'
    let prevbtn = 'prev-btn'
    let node = '.nd9-node'
    let nodeContainer = '.nd9-slide-node'
    slide(reponsiv, slideParent, slideContainer, slideItem, interval, tranTime, nextbtn, prevbtn, node, nodeContainer, bien);
  }
}

let bien = false;
slideNhanvien();
$(window).bind('resize', function () {

});








if ($('.nd9-slides-2').length != 0) {
  reponsiv_2 = [//
    { breakPoint: { width: 0, item: 1 } },//
    { breakPoint: { width: 600, item: 2 } },//
    { breakPoint: { width: 1024, item: 4 } },//
    { breakPoint: { width: 1200, item: 5 } }//
  ]
  let slideParent_2 = '.nd9-nd-2'
  let slideItem_2 = '.box-2'
  let slideContainer_2 = '.nd9-slides-2'
  let interval_2 = 2500;
  let tranTime_2 = '0.3s'
  let nextbtn_2 = 'next-btn-2'
  let prevbtn_2 = 'prev-btn-2'
  let node_2 = '.nd9-node-2'
  let nodeContainer_2 = '.nd9-slide-node-2'
  slide(reponsiv_2, slideParent_2, slideContainer_2, slideItem_2, interval_2, tranTime_2, nextbtn_2, prevbtn_2, node_2, nodeContainer_2, bien);

}
if ($('.dem-banber-slider').length != 0) {
  reponsiv_3 = [//
    { breakPoint: { width: 0, item: 1 } },//
    { breakPoint: { width: 600, item: 1 } },//
    { breakPoint: { width: 1024, item: 1 } },//
    { breakPoint: { width: 1200, item: 1 } }//
  ]
  let slideParent_3 = '.dem-banner'
  let slideItem_3 = '.dem-banner-item'
  let slideContainer_3 = '.dem-banber-slider'
  let interval_3 = 3000;
  let tranTime_3 = '0.3s'
  let nextbtn_3 = null
  let prevbtn_3 = null
  let node_3 = null
  let nodeContainer_3 = null
  slide(reponsiv_3, slideParent_3, slideContainer_3, slideItem_3, interval_3, tranTime_3, nextbtn_3, prevbtn_3, node_3, nodeContainer_3, bien);
}








$(function () {
  $('.nut').click(function () {
    $('.nav-mask').addClass('mask-active')
    $('.nav-bar-2 nav').addClass('nav2-active')
  })
  $('.nav-mask').click(function () {
    $('.nav-mask').removeClass('mask-active')
    $('.nav-bar-2 nav').removeClass('nav2-active')
  })
  $('.nutx').click(function () {
    $('.nav-mask').removeClass('mask-active')
    $('.nav-bar-2 nav').removeClass('nav2-active')
  })

})
$('.nav-bar-2 nav>ul>li>div.nav-chitiet2').slideUp()

$('.nav-bar-2 nav>ul>li>i').click(function () {
  if ($(this).next().hasClass('chitiet-active')) {
    $(this).next().slideUp()
    $(this).removeClass('nav-xoay')
    $(this).next().removeClass('chitiet-active')
  }
  else {
    $('.nav-bar-2 nav>ul>li>div.nav-chitiet2').slideUp()
    $('.nav-bar-2 nav>ul>li>i').removeClass('nav-xoay')
    $('.nav-bar-2 nav>ul>li>div.nav-chitiet2').removeClass('chitiet-active')
    $(this).next().slideDown()
    $(this).addClass('nav-xoay')
    $(this).next().addClass('chitiet-active')
  }

})


const rutgontext = (selector, dodaichuoi) => {
  $(document).ready(function () {
    $(selector).each(function () {
      var text = $(this).html();
      if (text.length > dodaichuoi) {
        text = text.substring(0, dodaichuoi);
        $(this).html(text + ' ...');
      }
    })
  })
}

rutgontext('.nav-bar nav ul li a h5', 10)
rutgontext('.nav-chitiet-col-item ul.a li a', 15)
rutgontext('.tintuc-hot-text p', 100)
rutgontext('.nd13-col-nd-detail p', 30)
rutgontext('.sp-1-menu-tintuc-item-text>p', 30)

$(document).ready(function () {
  $("#back-to-top").on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 1,
    }, 3000
    );
  });

})

$(document).ready(function () { 
$('.thongbaodautrang-dong').click(function (event) {
  $('.thongbaodautrang').slideUp()
})
})






