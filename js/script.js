// Script for logotype to scroll top of the web site
function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 50);
}

// Script for blog to move another blog
$(document).on('scroll', function () {
    if ($(window).scrollTop() === 0)
        $('header').removeClass('fixed');
    else
        $('header').attr('class', 'fixed');
});

// Script for the navigation menu effect
$('.open-overlay').click(function() {
    var overlay_navigation = $('.overlay-navigation'),
        nav_item_1 = $('nav li:nth-of-type(1)'),
        nav_item_2 = $('nav li:nth-of-type(2)'),
        nav_item_3 = $('nav li:nth-of-type(3)'),
        nav_item_4 = $('nav li:nth-of-type(4)'),
        // nav_item_5 = $('nav li:nth-of-type(5)'),
        top_bar = $('.bar-top'),
        middle_bar = $('.bar-middle'),
        bottom_bar = $('.bar-bottom');

    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {

        top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
        middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
        bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
        nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
        nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
        nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
        nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
        // nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
    } else {
        top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
        middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
        bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
        nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
        nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
        nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
        nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
        // nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
    }
});

// Script for floating scroll of the website
(function ($) {
    $(window).load(function () {

        $("body").mCustomScrollbar({
            theme: "dark-thin"
        });

    });
})(jQuery);

// script for repeating the brand ribbon blocks - black line
let img = ''
for (var i = 0; i < 20; i++) {
    img += '<img alt="Suella Fashion Style" src="img/white.png">'
}
document.getElementById("repeat1").innerHTML = img;

$(function() {
    $('.suella-anim-b').marquee({
        duration: 20000,
        startVisible: true,
        duplicated: true,
        direction: 'left'
    });
});

// script for repeating the brand ribbon blocks - beige line
let img2 = ''
for (var j = 0; j < 20; j++) {
    img2 += '<img alt="Suella Fashion Style" src="img/black.png">'
}
document.getElementById("repeat2").innerHTML = img2;

$(function() {
    $('.suella-anim-w').marquee({
        duration: 20000,
        startVisible: true,
        duplicated: true,
        direction: 'right'
    });
});



