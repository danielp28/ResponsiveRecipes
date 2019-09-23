$(document).ready(function () {
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=random&app_id=${8e2c2e46}&app_key=${1d28c357078eeac64a36112540200b1a}";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    // var results = response.data;
    // console.log(response.hits[0].recipe.image)

    for (var i = 0; i < 3; i++) {
      $(".d-block" + [i]).attr("src", response.hits[i].recipe.image)
      $(".d-block" + [i]).addClass("slide-img")
    }


  });

  $("#search-button").on("click", function (event) {
    event.preventDefault()
    var search = $("#search-text").val().trim()
    var queryURLTwo = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q="+search+"&app_id=${8e2c2e46}&app_key=${1d28c357078eeac64a36112540200b1a}"
    
    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).then(function (response) {
      // console.log(queryURLTwo)
    //  var results = response.data;
     console.log(response)
      



    })
  })











})



