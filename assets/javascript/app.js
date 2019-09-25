$(document).ready(function () {

  $("#search-button").on("click", function (event) {
    event.preventDefault()
    var search = $("#recipe-search").val().trim();
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + search + "&app_id=${8e2c2e46}&app_key=${1d28c357078eeac64a36112540200b1a}"
    
    
    
      var param = $(".custom-control-input:checked").val()
      queryURL = queryURL + param
   
    


    
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      

     
      var newRow = $("<div>");
      newRow.addClass("row");
      console.log(newRow)
      
      for (var i=0; i<9; i++){
        var newCol = $("<div>");
        newCol.addClass("col-md-4");
        var newCard = $("<div>");
        newCard.addClass("card");
        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        var cardImg = $("<img>");
        cardImg.attr("src", response.hits[i].recipe.image);
        cardImg.addClass("card-img-top");
        var cardTitle = $("<h5>");
        cardTitle.text(response.hits[i].recipe.label)
        cardTitle.addClass("card-title");
        var cardText = $("<p>");
        cardText.addClass("card-text");
        cardText.text("Source: "+response.hits[i].recipe.source)
        var cardLink = $("<a>");
        cardLink.attr("href", response.hits[i].recipe.url);
        cardLink.addClass("btn btn-primary");
        cardLink.text("Click here to see the recipe!")


       
        cardBody.append(cardImg);
        cardBody.append(cardTitle);
        cardBody.append(cardText);
        cardBody.append(cardLink);

        
        newCol.append(cardBody);
        newRow.append(newCol);
        $(".cards-div").empty()
        
      }
      $(".cards-div").prepend(newRow);
      

    })
  })









})



