$("img").hover(function(){
	console.log('Hover');

},
function(){
	var alt = $(this).attr('alt');
	console.log(alt);
}

);

$(".btn1").click(function(){
	$.getJSON( "https://swapi.co/api/people/1/?format=json", function( data ) {
	
  	//var formData = $(data).serializeArray(); // Create array of object
  	var jsonConvertedData = JSON.stringify(data);  // Convert to json
  	//console.log(data["name"]);

  	$(".allName").html("<h2>"+data["name"]+"</h2>")

  	//$("<h2>"+data["name"]+"</h2>").appendTo(".firstName");

	//console.log(data);
  //$("div.allName").val(jsonConvertedData);
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


$(".btn2").click(function(){
	$.getJSON( "https://swapi.co/api/people/?format=json", function( data ) {
	
  	//var formData = $(data).serializeArray(); // Create array of object
  	var jsonConvertedData = JSON.stringify(data);  // Convert to json
  	//console.log(data["name"]);

  	//$("<h2>"+data["name"]+"</h2>").appendTo(".allName");

	//console.log(data);
  //$("textarea").val(jsonConvertedData);
  var items = [];
  //console.log(data["results"]);
  $.each( data["results"], function( key, val ) {
	  
	  	items.push( "<li id='" + key + "'>" + val["name"] + "</li>" );
  	 
  	}),
  //console.log(items);

  $(".allName").html("<ul>" + items.join("") + "</ul>")

  //$("<ul>" + items.join("") + "</ul>").appendTo(".allName");
 
  // $( "<ul/>", {
  //   "class": "my-new-list",
  //   html: items.join( "" )
  // }).appendTo( "body" );
});
});
  var items = [];

$(".btn3").click(function(){
  console.log('btn 3 click');
  for (var i = 1; i <= 9; i++) {
    console.log('requete ' + i);
    requete(i);
    console.log('fin requete ' + i);
  }
  //console.log('btn 3 apres for');
  //console.log(items);
  //$(".allName").html("<ul>" + items.join("") + "</ul>");

  
});

function requete(i){
  $.getJSON( "https://swapi.co/api/people/?page="+i, function( data ) {
  
    var jsonConvertedData = JSON.stringify(data);  // Convert to json
    
    //console.log(data["results"]);
    $.each( data["results"], function( key, val ) {
      //console.log(val);
      items.push( "<button id='" + key + "' class= \'btn-modal\'>" + val["name"] + "</button>" );
      
    })
    $(".allName").append(items);
  });
}



$("<a>").appendTo("")
