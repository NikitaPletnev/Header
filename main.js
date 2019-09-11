$(document).ready(function(){
	$('.slide').on('click',function(){
		//Проверка через классы, я решил что так сделать удобнее, чем toggle
		if($('.slide').hasClass('done')){
    //Скрытие элементов внутри блока 
	$('.item_4').fadeOut(500);

	setTimeout(function(){
		$('.item_3').fadeOut(500);
	},500);

	setTimeout(function(){
		$('.item_2').fadeOut(500);
	},1000);

	setTimeout(function(){
		$('.item_1').fadeOut(500);
	},1500)
    //Отложенное скрытие основного блока
     setTimeout(function(){
     	//Запуск вращения
	$('.slider-popup-row').css({
	   		"animation": "0.5s linear 0s normal none infinite running rot",
            "-webkit-animation": "0.5s linear 0s normal none infinite running rot"
	   	});

	//Закрытие окна
	$('.slider-popup-container').animate({
	   	"left":"-1000px"
	   },1000);
    },2000)
	
	//Удаление класса
	$('.slide').removeClass('done');

		}else{

	//"Прилет" окна из-за границ страницы
    $('.slider-popup-container').animate({
	   	"left":"75%"
	   },2000,function(){

	//Остановка вращения
	$('.slider-popup-row').css({
	   		"animation": "none",
            "-webkit-animation": "none"
	   	});
	$('.load').css({"display":"block"})
	   });
   //Элемент загрузки (для аутентичности)
    setTimeout(function(){
    	$('.load').css({"display":"none"})
    },3000);
   //Появление элементов внутри окна
    setTimeout(function(){
    	$('.item_1').fadeIn(500);
    },3000);

     setTimeout(function(){
    	$('.item_2').fadeIn(500);
    },3500);

    setTimeout(function(){
    	$('.item_3').fadeIn(500);
    },4000);

    setTimeout(function(){
    	$('.item_4').fadeIn(500);
    },4500) 

    //добавление класса
	$('.slide').addClass('done');
	   }
   });
});