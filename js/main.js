$(document).ready(function(){
    document.body.onload = function () {
        setTimeout( function () {
            var preloader = jQuery('#preloader');
            if (!preloader.hasClass('done')){
                preloader.addClass('done');
            }
        }, 1000);
    }
	$('.owl-carousel.office-slider').owlCarousel({
                loop:true, //Зацикливаем слайдер
                nav:true, //Вкл навигацию
                navText: false,
                autoplay:true, //Автозапуск слайдера
                smartSpeed:3500, //Время движения слайда
                autoplayTimeout:6000, //Время смены слайда
                mouseDrag: false,
                touchDrag: true,
                margin: 20,
                items: 4,
                dots: false,
                center: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    767:{
                        items: 4
                    }
                }
    });

    $('.owl-carousel.review-slider').owlCarousel({
                loop:false, //Зацикливаем слайдер
                nav:false, //Вкл навигацию
                navText: false,
                autoplay:true, //Автозапуск слайдера
                smartSpeed:3500, //Время движения слайда
                autoplayTimeout:6000, //Время смены слайда
                mouseDrag: false,
                touchDrag: true,
                margin: 20,
                dots: false, 
                responsive:{
                    0:{
                        items: 1
                    },
                    600:{
                        items: 2,
                        margin: 100
                    },
                    991:{
                        items: 3
                    }
                }
    });

    $(".toggle-mnu").click(function() {
        $(".toggle-mnu").toggleClass("on");
        $(".nav").toggleClass("active");
        return false;
    });

    $("body").on("click","a.nav__link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var objToStick = $(".nav");
    var topOfObjToStick = 35;
    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop();
        if (windowScroll > topOfObjToStick) {
            $(objToStick).addClass("topWindow");
        } else {
            $(objToStick).removeClass("topWindow");
        };
    });

    $(".info-map__check").on("click", function (e) {
        var arrCity = $(".info-maps").find(".info-maps__text .info-maps__city");
        for (var i = 0; i < arrCity.length; i++) {
            arrCity.eq(i).animate({
                    fontSize: "0.875em"
                }, 300);
            arrCity.eq(i).css('color', 'rgba(255, 255, 255, 0.7)');
            if ($(this).text() == arrCity.eq(i).text())
            {
                arrCity.eq(i).animate({
                    fontSize: "1.25em"
                }, 1000);
                arrCity.eq(i).css('color', '#fff');
            } 
        }
        $("info-maps").find("info-maps__text").text();
    });

    $(".contact-form__input").on("focus", function (e) {
        var arrName = $(".contact-form__form").find("label");
        for (var a = 0; a < arrName.length; a++){
            if($(this).attr('name') == arrName.eq(a).attr('for')){
                arrName.eq(a).animate({
                    opacity: 0
                }, 600);
            }
        }
    });
});