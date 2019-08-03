// VARIABLES =================================
var topics = ["Rick and Morty", "Greys Anatomy", "Orange Is The New Black", "Stranger Things", "Supernatural", "The Simpsons", "Friends", "How I Met Your Mother", "Teen Wolf", "Vikings", "My Name Is Earl", "White Collar", "American Horror Story", "The Great British Baking Show"];
var num = 0;
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

// On button click, run ajax and get 10 gifs
function showGifs(){
  console.log("you clicked me");

  var showG = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showG + "&api_key=GMGkegz09o1ioCxZE030hZogINvqkb1e&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $(".gifs").empty();

    var results = response.data

    for (var i = 0; i < results.length; i++) {

      var gifDiv = $("<div>");
      gifDiv.addClass("gifDiv");

      // Show rating under gif
      var p = $("<p>");
      p.addClass("rating")
      p.text("TV " + results[i].rating.toUpperCase());

      // Show 10 static gifs
      var gifImg = $("<img>");
      gifImg.attr("src", results[i].images.fixed_height_still.url);
      gifImg.attr("data-still", results[i].images.fixed_height_still.url);
      gifImg.attr("data-animate", results[i].images.fixed_height.url);
      gifImg.attr("data-state", "still");
      gifImg.attr("data-name", showG);
      gifImg.addClass("gifImg");

      gifDiv.append(gifImg);
      gifDiv.append(p);
      $(".gifs").prepend(gifDiv);

    };
  });
}


function showMore(event){
  event.preventDefault();

  num += 10;
  console.log(num)

  var moreGif = $(".gifImg").attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + moreGif + "&api_key=GMGkegz09o1ioCxZE030hZogINvqkb1e&limit=10&offset=" + num;
  
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);


    var results = response.data

    for (var i = 0; i < results.length; i++) {

      var gifDiv = $("<div>");
      gifDiv.addClass("gifDiv");

      // Show rating under gif
      var p = $("<p>");
      p.text("Rating: " + results[i].rating);

      // Show 10 static gifs
      var gifImg = $("<img>");
      gifImg.attr("src", results[i].images.fixed_height_still.url);
      gifImg.attr("data-still", results[i].images.fixed_height_still.url);
      gifImg.attr("data-animate", results[i].images.fixed_height.url);
      gifImg.attr("data-state", "still");
      gifImg.attr("data-name", moreGif);
      gifImg.addClass("gifImg");

      gifDiv.append(gifImg);
      gifDiv.append(p);
      $(".gifs").prepend(gifDiv);
    };
  });
}

// On gif click...
function animate() {
  console.log($(this).attr("data-state"));

  var state = $(this).attr("data-state");

  // Animate
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }

  //Unanimate
  else if (state === "animate") {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}


// CALL FUNCTIONS ============================
$(document).on("click", ".show-btn", showGifs);

renderButtons();

$(document).on("click", ".gifImg", animate);

$(document).on("click", "#showMore", showMore);