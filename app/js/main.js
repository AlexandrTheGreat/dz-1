//Тест на подключение этого файла
$(document).ready(function() {
  console.log("Я на главной странице");
});

//Активация Placeholder
$(function() {
  $('input, textarea').placeholder({customClass:'my-placeholder'});
});

//Имитация Placeholder в input type="file"
function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("open-button-placeholder");
    uploaded.innerHTML = filename;
}

//Вызов PopUp
(function(){
  
  $(".add-work").on('click', function(){
    
    var popUp = $('.popup-wrap');
    popUp.removeClass('hide');

    var popUp = $('.popup-back');
    popUp.removeClass('hide');

    var popUp = $('.popup');
    popUp.removeClass('hide');

  });
  
  $('.popup-header:after').on('click', function() {
    
    var popUp = $(".popup");
    popUp.addClass('hide');

    var popUp = $(".popup-back");
    popUp.addClass('hide');

    var popUp = $(".popup-wrap");
    popUp.addClass('hide');
  });

}());