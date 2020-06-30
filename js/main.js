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
        slidesToScroll: 3
      });

      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
});