// VARIABLES =================================
var topics = ["Rick and Morty", "Greys Anatomy", "Orange Is The New Black", "Stranger Things", "Supernatural", "The Simpsons", "Friends", "How I Met Your Mother", "Teen Wolf", "Vikings", "My Name Is Earl", "White Collar", "American Horror Story", "The Great British Baking Show"]

// FUNCTIONS =================================
// TODO On load, create and display buttons on screen
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

/*
// This function handles events where a movie button is clicked
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});
*/

// TODO On submit of topic, create new button

// TODO On button click, run ajax and get 10 gifs

// TODO Show 10 static gifs

// TODO Show rating under gif

// TODO On gif click, animate.

// TODO On second gif click, unanimate


// CALL FUNCTIONS ============================
// $(document).on("click", ".show-btn", showGifs);

renderButtons();