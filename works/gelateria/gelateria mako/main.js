function imageJustSize() {
  var fv_visual = document.getElementById('js_fv_visual');
  var winH = window.innerHeight;
  fv_visual.style.height = winH - 100 + 'px';
}

if ($(window).width() < 780) {
  function imageJustSize() {
    var fv_visual = document.getElementById('js_fv_visual');
    var winH = window.innerHeight;
    fv_visual.style.height = winH - 70 + 'px';
  }
}

imageJustSize();

window.addEventListener('resize', imageJustSize);

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