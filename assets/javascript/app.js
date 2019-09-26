$(document).ready(function () {

  $("#search-button").on("click", function (event) {
    event.preventDefault()


    function dumpInArray(){
      var arr = [];
      $('.form-check input[type="checkbox"]:checked').each(function(){
         arr.push($(this).val());
      });
      console.log(arr)
      return arr; 
   }

   
      var result = dumpInArray().join("");
   
   console.log(result)

    var search = $("#recipe-search").val().trim();
    
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + search + "&app_id=${8e2c2e46}&app_key=${1d28c357078eeac64a36112540200b1a}"+result
    
   
    
     console.log(queryURL)
      
   
    


    
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)

     
      var newRow = $("<div>");
      newRow.addClass("row");
      
      
      for (var i=0; i<response.hits.length - 1; i++){
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



