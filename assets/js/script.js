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

$("textarea").val("name: ");
  $("textarea").val(data["name"]);
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
