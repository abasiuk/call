$(document).ready(function(){

	$('.owl-carousel.office-slider').owlCarousel({
                loop:true, //Зацикливаем слайдер
                nav:true, //Вкл навигацию
                navText: false,
                autoplay:true, //Автозапуск слайдера
                smartSpeed:3500, //Время движения слайда
                autoplayTimeout:6000, //Время смены слайда
                mouseDrag: false,
                touchDrag: false,
                margin: 20,
                items: 4,
                dots: false,
                center: true
    });

    $('.owl-carousel.review-slider').owlCarousel({
                loop:false, //Зацикливаем слайдер
                nav:false, //Вкл навигацию
                navText: false,
                autoplay:true, //Автозапуск слайдера
                smartSpeed:3500, //Время движения слайда
                autoplayTimeout:6000, //Время смены слайда
                mouseDrag: true,
                touchDrag: false,
                margin: 20,
                dots: false, 
                items: 3
    });
});