$(function () {
  $("div.awesome img").mousemove(function () {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $(".overlay").hide();
  });

  $(".first").click(function () {
    $(".one").show();
  });
  $(".second").click(function () {
    $(".two").show();
    $(".one").hide();
  });

  //   $(Window).scroll(function () {
  //     var scroll = $(this).scrollTop();
  //     if (scroll > 500) {
  //       $(".header").show();
  //     } else {
  //       $(".header").hide();
  //     }
  //   });

  $(".fancybox").fancybox();

  $(".one").css("display", "block");

  $("div.acordion h3").click(function () {
    $(this).next().slideToggle();

    $("div.acordion p").not($(this).next()).slideUp();
  });

  $(".download").click(function () {
    $(".timer").countTo();
  });

  $(".all-imges").mixItUp();

  $("html").niceScroll();
});
