$("img").hover(function(){
	console.log('Hover');

},
function(){
	var alt = $(this).attr('alt');
	console.log(alt);
}

);

$("button").click(function(){
	$.getJSON( "https://swapi.co/api/people/1/", function( data ) {
	
  	//var formData = $(data).serializeArray(); // Create array of object
  	var jsonConvertedData = JSON.stringify(data);  // Convert to json
  	console.log(jsonConvertedData);


	//console.log(data);
  $("textarea").val(jsonConvertedData);
  // var items = [];
  // $.each( data, function( key, val ) {
  //   items.push( "<li id='" + key + "'>" + val + "</li>" );
  // });
 
  // $( "<ul/>", {
  //   "class": "my-new-list",
  //   html: items.join( "" )
  // }).appendTo( "body" );
});
});
