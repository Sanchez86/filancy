  $(document).ready(function () {
      /*   $('.dev_active').on('touchstart', function(){
            alert(0)
        });

  $('.dev_active').on('tap', function(){
      if($(this).hasClass('active')){
          $(this).removeClass('active');
      }else{
          $(this).addClass('active');
      }
  });
  $('.dev_active').on('mouseleave', function(){
    if($(this).hasClass('active')){
        $(this).addClass('active');
    }else{
        $(this).removeClass('active');

    }
  });
  */

  $('.pr').on('mouseenter', function(){
      $(this).addClass('active')
  })


      var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
      var explorer = navigator.userAgent.indexOf('MSIE') > -1;
      var firefox  = navigator.userAgent.indexOf('Firefox') > -1;
      var safari   = navigator.userAgent.indexOf("Safari") > -1;
      var camino   = navigator.userAgent.indexOf("Camino") > -1;
      var opera    = navigator.userAgent.toLowerCase().indexOf("op") > -1;
      if ((chrome) && (safari)) safari = false;
      if ((chrome) && (opera)) chrome = false;
      if (safari) $('body').addClass('is_safari');

    new WOW().init(); //connect to library wow.js
    $('.projects_body .read_more').on('click', function(){
        $('.prs2').addClass('active');
        $('.discuss_read_more').addClass('hidden');
        $('.discuss_read_more2').addClass('active');

        var benefitsBlock = $('#prs2').offset().top;
        $('body, html').animate({
            scrollTop: benefitsBlock+50
        }, 1000);
    });
      $('.owl-carousel_about_us').on('initialized.owl.carousel changed.owl.carousel', function(e) {
          if (!e.namespace)  {
              return;
          }
          var carousel = e.relatedTarget;
          $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
      }).owlCarousel({
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          smartSpeed: 1000,
          loop:true,
          margin:0,
          nav:true,
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:3
              },
              992:{
                  items:3
              },
              1500:{
                  items:4
              },
              1600:{
                  items:5
              }
          }
      })
  });