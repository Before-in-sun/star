$(function(){


    $('.pop_close').click(function(){
        $('.popup').fadeOut(700);
    });

    $('.pop_open').click(function(){
        $('.popup').fadeIn(700);
    });

    $('.sitemap').click(function(){
        $('#full_nav').fadeIn(700);
    });

    $('.f_close').click(function(){
        $('#full_nav').fadeOut();
    });

    $('.language').click(function(){
        $('.language ul').slideToggle();
    });


    $('.bxslider').bxSlider({
        captions:true,
        //slideWidth:600,  //수정
        auto:true,
        autoControls:false,
        stopAutoOnclick:true,

      });

      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000,
      });

      $(".regular2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000,
      });

      $('#notice_rolling1').vTicker({   
        // 스크롤 속도(default: 700)  
        speed: 500,  
        // 스크롤 사이의 대기시간(default: 4000)  
        pause: 2000,  
        // 스크롤 애니메이션  
        animation: 'fade',  
        // 마우스 over 일때 멈출 설정  
        mousePause: false,  
        // 한번에 보일 리스트수(default: 2)  
        showItems: 4,  
        // 스크롤 컨테이너 높이(default: 0)  
        height: 0,  
        // 아이템이 움직이는 방향, up/down (default: up)  
        direction: 'up'  

      });  

      $('#serch_rolling1').vTicker({   
        // 스크롤 속도(default: 700)  
        speed: 500,  
        // 스크롤 사이의 대기시간(default: 4000)  
        pause: 2000,  
        // 스크롤 애니메이션  
        animation: 'fade',  
        // 마우스 over 일때 멈출 설정  
        mousePause: false,  
        // 한번에 보일 리스트수(default: 2)  
        showItems: 4,  
        // 스크롤 컨테이너 높이(default: 0)  
        height: 0,  
        // 아이템이 움직이는 방향, up/down (default: up)  
        direction: 'up'  

      });  

       //퀵메뉴 이펙트
    $('#quick').effect('Puff',"",500);

    //스크롤시 퀵메뉴 고정위치 바꾸기
     $(window).scroll(function(){
      if($(document).scrollTop()>=300){
        $('#quick').stop().animate({top:250},500);
        //$('#quick').show(); [대체가능]
      }else{
        //$('#quick').fadeOut(); [대체가능]
         $('#quick').stop().animate({top:700},500);
      }
     });
});