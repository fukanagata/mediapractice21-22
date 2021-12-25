
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('resize', function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
});




$(function() {





  $('.ac-parent').on('click', function() {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないac-parentのopenクラスを取る
    $('.ac-parent').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.ac-parent').not($(this)).next('.ac-child').slideUp();
  });

  //menu bar
  $("#title").click(function() {
    $(window).scrollTop(0);
  });
  $("#header-top").click(function() {
    $("html,body").animate({
      scrollTop: $('.top-wrapper').offset().top
    });
  });

  $("#header-statement").click(function() {
    $("html,body").animate({
      scrollTop: $('.statement-wrapper').offset().top - 100
    });
  });

  $("#header-about").click(function() {
    $("html,body").animate({
      scrollTop: $('.about-wrapper').offset().top - $('header').height() - 150
    });
  });
  $("#header-exhibitors").click(function() {
    $("html,body").animate({
      scrollTop: $('.exhibitors-wrapper').offset().top - $('header').height() - 150
    });
  });
  $("#header-event").click(function() {
    $("html,body").animate({
      scrollTop: $('.event-wrapper').offset().top - $('header').height() - 150
    });
  });
  $("#header-access").click(function() {
    $("html,body").animate({
      scrollTop: $('.access-wrapper').offset().top - $('header').height() - 150
    });
  });


  $(function() {
    var $header = $("#header");
    var scrollSize = $('.header-wrapper').width() / 3; //超えると表示
    $(window).on("load scroll", function() {
      var value = $(this).scrollTop();
      if (value > scrollSize) {
        $header.addClass("display");
        $header.removeClass("hide");
      } else {
        $header.removeClass("display");
        $header.addClass("hide");
      }
    });
  });

  jQuery(function($) {
      // $(window).scroll(function() {
      //     var offset = $(this).scrollTop()/$('body').width()*200*-1;
      //     $('.background').css( 'background-position', '0px ' + offset + 'px' );
      // });

      $(window).scroll(function() {
          var offset = $(this).scrollTop()/$('body').width()*2000*-1;
          $('.pc-title').css( 'left',  offset + 'px' );
          $('.pc-info').css( 'right', offset + 'px' );

          // $('.smartphone-title').css( 'right',  offset + 'px' );
          // $('.smartphone-info').css( 'left', offset + 'px' );
      });

  		$(window).scroll(function (){
  		$('.section-fadein').each(function(){
  			var elemPos = $(this).offset().top;
  			var scroll = $(window).scrollTop();
  			var windowHeight = $(window).height();
  			if (scroll > elemPos - windowHeight + 200){
  				$(this).addClass('scrollin');
  			}
  		});
  	});
  });



  //モーダル

  const modalWrapOpen = function(e) {
    const dataModalOpen = e.currentTarget.dataset.modalOpen;
    Array.from(document.querySelectorAll('.works_modal_wrapper')).forEach((e, i) => {
      if (e.getAttribute('data-modal') === dataModalOpen) {
        e.classList.toggle('is_open');
      }
    })
  }

  Array.from(document.querySelectorAll('.works_modal_open')).forEach((modalOpenElement) => {
    modalOpenElement.addEventListener('click', modalWrapOpen);
  })

  const modalCloseAction = function(e) {
    const targetModal = e.currentTarget.closest('.works_modal_wrapper');
    targetModal.classList.toggle('is_open')
  };

  Array.from(document.querySelectorAll('.modal_close')).forEach((modalCloseElement) => {
    modalCloseElement.addEventListener('click', modalCloseAction)
  })

  Array.from(document.querySelectorAll('.works_modal_mask')).forEach((modalCloseElement) => {
    modalCloseElement.addEventListener('click', modalCloseAction)
  })



  // var headerHeight = $('header').outerHeight();
  var headerHeight = $('#title').outerHeight();

  if (window.parent.screen.width <= 750) {
    $(window).on('load', function() {
      $('header').css('top', '-' + headerHeight + 'px');
    });
    $(window).on('scroll', function() {
      if ($(window).scrollTop() == 0) {
        $('header').css('top', '-' + headerHeight + 'px');
      } else {
        $('header').css('top', '0');
      }
    });
  } else {
    $('header').css('top', '0');
  }







  //footer
  $("#twitter-button").click(function() {
    window.location.href = "https://twitter.com/geidai_newmedia";
  });
  $("#facebook-button").click(function() {
    window.location.href = "https://www.facebook.com/Tokyo.Geidai.New.Media/";
  });
  $("#instagram-button").click(function() {
    window.location.href = "https://www.instagram.com/geidainewmedia/";
  });
});
