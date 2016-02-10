var myModule = (function (){

  //Инициализация
	var init = function(){
		_setUpListners();
		//то что должно происходить сразу
	};

  // Прослушивает события
	var _setUpListners = function() {
		$('.add-work').on('click', _showModal);
		
    $('.close').on('click', _closeModal);
    $('.popup-back').on('click', _closeModal);
		
    $('.popup-form').on('submit', _addProject);
	};

  // Показывает модальное окно
	var _showModal = function(ev) {
			
		ev.preventDefault();
		var popUp = $('.popup-wrap');
		popUp.removeClass('hide');
  };
  
  // Скрывает модальное окно
  var _closeModal = function(ev) {
  	ev.preventDefault();
	  var popUp = $('.popup-wrap');
	  popUp.addClass('hide');
    $('.popup-back').addClass('hide');
    $('.popup-wrap').addClass('hide');
    $('.server-mes').text('').hide();
    $('.popup').height(494);
  };

  // Добавляет проект
  var _addProject = function(ev) {
  	console.log('submit');
  	ev.preventDefault();

  	var form = $(this),
  			url = '../php/add_project.php',
        myServerGiveMeAnAnswer = _ajaxForm(form, url);

        myServerGiveMeAnAnswer.done(function(ans) {
  		  console.log(ans);
      
        var successBox = form.find('.success-mes'),
            errorBox = form.find('.error-mes');

    		if(ans.status ==='OK') {
          form.find('.error-mes').text(ans.text).hide();
          successBox.text(ans.text).show();
          $('.popup').height( 508+$('.success-mes').outerHeight() );
        }else{
          form.find('.success-mes').text(ans.text).hide();
          errorBox.text(ans.text).show();
          $('.popup').height( 508+$('.error-mes').outerHeight());
        }
  	})
  };

  // Универсальная функция
  // Для ее работы используются:
  // @form - форма
  // @url - адрес .php файла к которому мы обращаемся;
  // 1.Собирает данные из формы
  // 2. Проверяет форму
  // 3. Делает запрос на сервер и возвращает oтвет с сервера
  var _ajaxForm = function(form, url){

    //if(!valid) return false;
    data = form.serialize();

    var result = $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data,
    }).fail( function(ans){
      console.log('Проблемы в PHP');
      form.find('.error-mes').text('На сервере произошла ошибка').show();
    });

    return result;
  };

  // Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

myModule.init();