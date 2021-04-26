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

function resetSearchField() {
  navSearchField.css('display', '');
  navSearchIcon.removeClass('x active').addClass('search');
}

$(window).resize(resetSearchField).resize(); //trigger the resize event on page load.
$(window).on('orientationchange', resetSearchField);

$("section.shoulder > aside.widget.newsletter > input[type='text']")
  .focus(function () {
    $(this).attr('placeholder', 'Enter Your Email');
  })
  .blur(function () {
    $(this).attr('placeholder', 'Join Our Newsletter');
  });

$('section.shoulder > aside.widget.popular > .more').click(function (e) {
  $(
    'section.shoulder > aside.widget.popular > ol > li:nth-child(n + 6)'
  ).show();
  $(this).hide();
  e.preventDefault();
});
