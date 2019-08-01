// VARIABLES =================================
var topics = ["Rick and Morty", "Greys Anatomy", "Orange Is The New Black", "Stranger Things", "Supernatural", "The Simpsons", "Friends", "How I Met Your Mother", "Teen Wolf", "Vikings", "My Name Is Earl", "White Collar", "American Horror Story", "The Great British Baking Show"]

// FUNCTIONS =================================
// On load, create and display buttons on screen
function renderButtons() {
  $(".btns").empty();

  // Loop through the array
  for (var i = 0; i < topics.length; i++) {

    var b = $("<button>");

    b.addClass("show-btn");

    b.attr("data-name", topics[i]);

    b.text(topics[i]);

    $(".btns").append(b);
  }
}

// On submit of topic, create new button
$("#add-show").on("click", function(event) {
  event.preventDefault();

  var show = $("#user-show").val().trim();

  topics.push(show);

  renderButtons();

  $("#user-show").val('')
});



// TODO On button click, run ajax and get 10 gifs
function showGifs(){
  console.log("you clicked me");

  var showG = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    showG + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    
    $(".gifs").empty();
    
    var results = response.data

    for (var i = 0; i < results.length; i++) {

    var gifDiv = $("<div>");
    var p = $("<p>");
    p.text("Rating: " + results[i].rating);

    var gifImg = $("<img>");
    gifImg.attr("src", results[i].images.fixed_height.url);



    gifDiv.append(p);
    gifDiv.append(gifImg);
    $(".gifs").prepend(gifDiv);
    };
  });
}

// TODO Show 10 static gifs

// TODO Show rating under gif

// TODO On gif click, animate.

// TODO On second gif click, unanimate


// CALL FUNCTIONS ============================
$(document).on("click", ".show-btn", showGifs);

renderButtons();