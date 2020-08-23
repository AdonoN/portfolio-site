$('.btn_trigger').on('click', function () {
  $('.btn_trigger').toggleClass('close');
  $('.nav_wrapper').fadeToggle(300);
  $('body').toggleClass('noscroll');
});

if ($(window).width() < 780) {
  $('.nav-item>a').on('click', function () {
    $('.nav_wrapper').fadeOut(300);
    $('.btn_trigger').removeClass('close');
    $('body').removeClass('noscroll')
  });
}

$('nav-item').hover(
  function () {
    $('button').css('border-bottom', '#1621aa');
  },

);