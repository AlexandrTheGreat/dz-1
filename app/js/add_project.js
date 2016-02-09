var myModule = (function (){

	var init = function(){
		_setUpListners();
		//то что должно происходить сразу
	};

	var _setUpListners = function() {
		$(".add-work").on('click', _showModal);
		$('.close').on('click', _closeModal);
		}

	var _showModal = function(ev) {
			
		ev.preventDefault();
		var popUp = $('.popup-wrap');
		popUp.removeClass('hide');
  		
  	};
  	
  var _closeModal = function(ev) {
  	ev.preventDefault();
	  var popUp = $('.popup-wrap');
	  popUp.addClass('hide');
  	}

	return {
		init: init
	};

})();

myModule.init();