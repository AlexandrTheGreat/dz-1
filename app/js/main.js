$(document).ready(function() {
	console.log("Я на главной странице");
});

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