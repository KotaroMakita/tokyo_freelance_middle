const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // 追記
  slidesPerView: 1,
  breakpoints: {
    980: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    767: {
      slidesPerView: 2,
    },

    375: {
      slidesPerView: 1.2,
      spaceBetween: 20,

    }
  },



  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// sp-nav
$(function () {
  $('.nav-open-icon').click(function () {
    $(this).toggleClass('is-active');
    $('.nav-open-contents').toggleClass('is-active');
    $('.nav-open-bg').toggleClass('is-active');
  });


  // hover action
  $('.news-contents-item').hover(function () {
    $(this).toggleClass('is-active');
  });

  // scroll
  $('a[href^="#"]').click(function () {
    let header = $('.header').innerHeight();
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - header;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    $('.nav-open-icon').removeClass('is-active');
    $('.nav-open-contents').removeClass('is-active');
    $('.nav-open-bg').removeClass('is-active');
    return false;
  });

  // スクロール検知
  $(window).on("scroll", function () {
    // トップから100px以上スクロールしたら
    if (200 < $(this).scrollTop()) {
      // is-showクラスをつける
      $('.totop').addClass('is-show');
    } else {
      // 100pxを下回ったらis-showクラスを削除
      $('.totop').removeClass('is-show');
    }
  });

// faq-toggle
$('.faq-question').click(function(){
  $(this).next('.faq-answer').slideToggle();
  $(this).toggleClass('is-open');
});






  // form validation
  $(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('.-submit').prop("disabled", true);
    
    
    //入力欄の操作時
    $('form input:required').change(function () {
        //必須項目が空かどうかフラグ
        let flag = true;
        //必須項目をひとつずつチェック
        $('form input:required').each(function(e) {
            //もし必須項目が空なら
            if ($('form input:required').eq(e).val() === "") {
                flag = false;
            }
        });
        //全て埋まっていたら
        if (flag) {
            //送信ボタンを復活
            $('.-submit').prop("disabled", false);
        }
        else {
            //送信ボタンを閉じる
            $('.-submit').prop("disabled", true);
        }
    });
});

});
