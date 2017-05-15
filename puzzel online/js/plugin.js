$(function () {
    'use strict';
    
    var header = $('.header'),
        intro = $('.intro');
    
    
    //set header background
    
    header.height($(window).height());
    
    //adjust header's background and elements
    
    $(window).resize(function () {
        header.height($(window).height());
        intro.css("paddingTop", ($(window).height() - intro.height()) / 2);
            
    });
    
    //center header element
    
    intro.css("paddingTop", ($(window).height() - intro.height()) / 2);
    
    //smooth scrool
    
    $('.header .arr ').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    //scroll to hire us
    
    $('.header .buttons .hire-us').click(function () {
        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 1000);
    });
    
    //scroll to our work
    
     $('.header .buttons .our-work').click(function () {
        $('html, body').animate({
            scrollTop: $('.work').offset().top
        }, 1000);
    });
    
    //show hiden photos
    
    $('.show-more').click(function () {
        $('.work .hidden').fadeIn(2000);
    });
    
    //make slider
    
    var leftArrow = $('.test .fa-chevron-left'),
        rightArrow = $('.test .fa-chevron-right');
    
    function checkClient() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut(50) : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut(50) : rightArrow.fadeIn();
    }
    checkClient();
    
    $('.test i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.test .active').fadeOut(1000, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(1500);
                checkClient();
            });
        } else {
            $('.test .active').fadeOut(1000, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(1500);
                checkClient();
            });
        }
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    