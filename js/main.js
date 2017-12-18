$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
                loop:false, //Зацикливаем слайдер
                nav:true, //Вкл навигацию
                navText: false,
                autoplay:true, //Автозапуск слайдера
                smartSpeed:3500, //Время движения слайда
                autoplayTimeout:6000, //Время смены слайда
                mouseDrag: false,
                touchDrag: false,
                margin: 20,
                items: 4
    });
});