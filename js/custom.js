
jQuery(function($) {
    'use strict';
    /*============================================
	Page Preloader
    ==============================================*/
    $(window).on('load', function () {
        $('#page-loader').fadeOut(500);
    });
    /*============================================
	Navigation Functions
     ==============================================*/
    //mean menu
    $(document).ready(function () {
        $('#main-navigation nav').meanmenu({
            meanScreenWidth: "991"
        });
    });
    //menu resizing on hover
    if ($(window).scrollTop()< ($(window).height()-600)){
        $('#main-navigation').removeClass('scrolled');
        $('.main-logo img').attr('src','images/logo.png');
    }
    else{
        $('#main-navigation').addClass('scrolled'); 
        $('.main-logo img').attr('src','images/logo-alt.png');
    }

    $(window).on('scroll', function () {
        if ($(window).scrollTop()< ($(window).height()-600)){
            $('#main-navigation').removeClass('scrolled');
            $('.main-logo img').attr('src','images/logo.png');
        }
        else{
            $('#main-navigation').addClass('scrolled'); 
            $('.main-logo img').attr('src','images/logo-alt.png');
        }
    });
    
    /*============================================
	Video Player
     ==============================================*/
    if ($('.virtual-video').length)
    {
        $('.virtual-video').mediaelementplayer({
            alwaysShowControls: false
        }

        );
    }
    /*============================================
	Video Background
     ==============================================*/
    if ($('.video-background').length)
    {
					   
        $('.video-background').videoBG({
            mp4:'assets/videobg/assets/laptop-video.mp4',
            ogv:'assets/videobg/assets/laptop-video.ogv',
            webm:'assets/videobg/assets/laptop-video.webm',
            poster:'assets/videobg/assets/laptop-video.png',
            scale:true,
            zIndex:0
        });
    }
    
    
    /*============================================
	Testimonials Carousel
     ==============================================*/
    if ($('#testimonials-carousel').length)
    {
        $("#testimonials-carousel").owlCarousel({
            autoPlay: 5000, //Set AutoPlay to 3 seconds
            paginationSpeed : 800,
            slideSpeed : 200,
            rewindSpeed : 1000,
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,2]
        });
    }
    /*============================================
	Testimonials Carousel
     ==============================================*/
    if ($('#about-carousel').length)
    {
        $("#about-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

        });
    }
    /*============================================
	Text Rotator
     ==============================================*/
    if ($('.rotate').length)
    {
        $(".rotate").textrotator({
            animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 2000 // How many milliseconds until the next word show.
        });
    }
    /*============================================
	Flex Slider
     ==============================================*/
    
    if ($('.flexslider').length)
    {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: false,
            slideshowSpeed:5000
        }); 
        $('.flex-next').on('click', function(e){ 
            e.preventDefault();
            $('.flexslider').flexslider("play")
        });
        $('.flex-next').on('click', function(e){ 
            e.preventDefault();
            $('.flex-prev').flexslider("play")
        });
    }
    /*============================================
	Counter
     ==============================================*/
    if ($('.count').length)
    {
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
    }
    /*============================================
	Accordion
     ==============================================*/
    function toggleIcon(e) {
        $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
    
    /*============================================
	FAQ
     ==============================================*/
    
    $('#faq-categories a').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        $('#faq-categories li').removeClass('active');
        $(this).parent().addClass('active');
    });
});