$("img").hover(function(){
	console.log('Hover');

},
function(){
	var alt = $(this).attr('alt');
	console.log(alt);
}

);
