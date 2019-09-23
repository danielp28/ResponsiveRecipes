$(document).ready(function () {


  
  
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=random&app_id=${8e2c2e46}&app_key=${1d28c357078eeac64a36112540200b1a}";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // var results = response.data;
    // console.log(response.hits[0].recipe.image)


    for (var i = 0; i < 3; i++) {
      var image1 = $('<img>');
    image1.attr('src',response.hits[0].recipe.image );
      // var linkElement = $("<a>")
      // linkElement.attr("href", response.hits[i].recipe.url)
      // $(".d-block" + [i]).attr("src", response.hits[i].recipe.image)
      // $(".d-block" + [i]).addClass("slide-img")
      // linkElement.append(".d-block"+[i])
      function genrateSlideImages(){
        var outerDiv = $("<div>");
        outerDiv.addClass("carousel-item active");
        var imgEl = $("<img>");
        imgEl.attr("src", response.hits[i].recipe.image);
        imgEl.addClass("d-block"+[i]+"w-100");
        var innerDiv= $("<div>");
        innerDiv.addClass("carousel-caption d-none d-md-block");
        var slideMainText = $("<h5>");
        slideMainText.text("SLIDE LABEL");
        var slideSubText = $("<p>");
        slideSubText.text("SLIDE SUB TEXT");
        
    
    
    
        innerDiv.append(slideMainText);
        innerDiv.append(slideSubText);
        outerDiv.append(imgEl);
        outerDiv.append(innerDiv);
        $("#carousel-inner").html(outerDiv);
    
      }
     genrateSlideImages()
      
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



