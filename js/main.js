const navSearchButton = $('nav > .search.button');
const navSearchIcon = $('nav > .search.button > .icon');
const navSearchField = $('nav > div.ui.search');

$('nav > .sidebar-menu.button').click(() => {
  $('.ui.sidebar').sidebar('toggle');
});

$('nav > .search.button').click(function () {
  navSearchField.toggle('slide');
  navSearchIcon.toggleClass('x').toggleClass('search');
  navSearchButton.toggleClass('active');
  navSearchButton.blur();
});

$(window).on('orientationchange', function () {
  navSearchField.css('display', '');
  navSearchIcon.removeClass('x active').addClass('search');
});
