$(document).ready(function () {




  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=random&app_id=${8e2c2e46}&app_key=${1d28c357078eeac64a36112540200b1a}";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);



  });

  $("#search-button").on("click", function (event) {
    event.preventDefault()
    var search = $("#search-bar").val().trim()
    var queryURLTwo = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + search + "&app_id=${8e2c2e46}&app_key=${1d28c357078eeac64a36112540200b1a}"

    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).then(function (response) {
      
      console.log(response)
     
    })
  })











})



