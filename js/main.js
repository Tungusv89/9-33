document.addEventListener('DOMContentLoaded', function () {
  $('.header-menu__icon').click(function (event) {
    // debugger;
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    // if ($(this).hasClass('active')) {
    //   $('body').data('scroll', $(window).scrollTop());
    //   $('.header-menu').show(1000);
    // } else {
		// $('.header-menu').hide();
	// }
    // $('body').toggleClass('lock');
    // if (!$(this).hasClass('active')) {
    //   $('body,html').scrollTop(parseInt($('body').data('scroll')));
    // }
  });
});
