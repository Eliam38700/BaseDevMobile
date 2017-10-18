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
  var lienApi = "";
$(".btn3").click(function(){
  
  requete("https://swapi.co/api/people/?page=1");
  //console.log('btn 3 apres for');
  //console.log(items);
  //$(".allName").html("<ul>" + items.join("") + "</ul>");
  
});

function requete(lien ){
  
  $.getJSON( (lienApi == "")?lien : lienApi, function( data ) {
    lienApi = data["next"];
    console.log(lienApi);
    var jsonConvertedData = JSON.stringify(data);  // Convert to json
    
    //console.log(data["results"]);
    $.each( data["results"], function( key, val ) {
      //console.log(val);
      items.push( "<button id='" + key + "' onclick=\"showModal()\" class= \'btn-modal\'>" + val["name"] + "</button>" );//création de mes buttons
      
    })
    $(".allName").html("<ul>" + items.join("") + "</ul>") //j'ecrase à chaque fois les données précedemment affichées
    
    if(lienApi != null){ // vérifie si la requette du prochain lien a été une réussite dans le cas contraire pas de récurssion
      requete(lien);
    }

  });
}

// Get the modal
var modal = document.getElementById('myModal');

function showModal(){
   modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
