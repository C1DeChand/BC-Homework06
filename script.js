
// Current Cate //

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();
var year = d.getFullYear()

var output = "(" + month + "/" + day + "/" + year + ")";

$("button").on("click", function(event) {

  // prevent instante erase of console info //

  event.preventDefault();

  // Search Event and API query //

    var local = $(".location").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + local + "&appid=f6280ca2af0a8be90f64f283fa209936";

    console.log(queryURL);
    console.log(local);

    var btnName = $("<button>").html("<h5>" + local + "</h5>");
    btnName.attr("type", "submit")
    btnName.addClass("btn btn-danger my-1")

    var li = $("<li>");

    li.append(btnName);
    $("#localRecall").prepend(li)

    // AJAX call //

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        $("#resultsDiv").empty()

        console.log(response);

        // Results from response of AJAx call //

        var results = $("<div>")

        var resultName = $("<h2>").html(response.name + " " + output + " " + "<img id='wicon' src='http://openweathermap.org/img/w/" + (response.weather[0].icon) + ".png' alt='Weather icon'><br>");
        results.append(resultName)
        var resultTemp = $("<p>").html("Tempreture: " + (Math.floor((((response.main.temp)-273.15) * 1.8) + 32)) + " F°" + "<br>");
        results.append(resultTemp)
        var resultHum = $("<p>").html("Humidity: " + (response.main.humidity) + "%" + "<br>");
        results.append(resultHum)
        var resultHum = $("<p>").html("Wind Speed: " + (response.wind.speed) + " MPH" + "<br>");
        results.append(resultHum)

        $("#resultsDiv").append(results)

        var lat = (response.coord.lat)
        var lon = (response.coord.lon)

        // Second AJAX call for UV Index //

        var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi/forecast?appid=f6280ca2af0a8be90f64f283fa209936&lat=" + lat + "&lon=" + lon + "&cnt=1";

        $.ajax({
          url: queryURL2,
          method: "GET"
        }).then(function(response2) {

          console.log(response2)

          var resultUV = $("<p>").html("UV Index: <button class='btn btn-danger'>" + (response2[0].value) + "</button><br>");
          results.append(resultUV)

        });

        // Third AJAX call for 5 day forcast //

        var queryURL3 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=f6280ca2af0a8be90f64f283fa209936";

        $.ajax({
          url: queryURL3,
          method: "GET"
        }).then(function(response3) {

          console.log(response3)

          // Day One Forcast //

          $("#dayOne").empty()

          var resultsDayOne = $("<div>")

          var output = "(" + month + "/" + (day + 1) + "/" + year + ")";

          var dayOneDate = $("<h6>").html((output) + "<br>")
          resultsDayOne.append(dayOneDate)

          var dayOneIcon = $("<div>").html("<img id='wicon' src='http://openweathermap.org/img/w/" + (response3.daily[0].weather[0].icon) + ".png' alt='Weather icon'><br>");
          resultsDayOne.append(dayOneIcon)

          var dayOneTemp = $("<p>").html("Temp: " + (Math.floor((((response3.daily[0].temp.day)-273.15) * 1.8) + 32)) + " F°" + "<br>");
          resultsDayOne.append(dayOneTemp)

          var dayOneHum = $("<p>").html("Humidity: " + ((response3.daily[0].humidity) + "%" + "<br>"));
          resultsDayOne.append(dayOneHum)

          $("#dayOne").append(resultsDayOne)

          // Day Two Forcast //

          $("#dayTwo").empty()

          var resultsDayTwo = $("<div>")

          var output = "(" + month + "/" + (day + 2) + "/" + year + ")";

          var dayTwoDate = $("<h6>").html((output) + "<br>")
          resultsDayTwo.append(dayTwoDate)

          var dayTwoIcon = $("<div>").html("<img id='wicon' src='http://openweathermap.org/img/w/" + (response3.daily[1].weather[0].icon) + ".png' alt='Weather icon'><br>");
          resultsDayTwo.append(dayTwoIcon)

          var dayTwoTemp = $("<p>").html("Temp: " + (Math.floor((((response3.daily[1].temp.day)-273.15) * 1.8) + 32)) + " F°" + "<br>");
          resultsDayTwo.append(dayTwoTemp)

          var dayTwoHum = $("<p>").html("Humidity: " + ((response3.daily[1].humidity) + "%" + "<br>"));
          resultsDayTwo.append(dayTwoHum)

          $("#dayTwo").append(resultsDayTwo)

          // Day Three Forcast //

          $("#dayThree").empty()

          var resultsDayThree = $("<div>")

          var output = "(" + month + "/" + (day + 3) + "/" + year + ")";

          var dayThreeDate = $("<h6>").html((output) + "<br>")
          resultsDayThree.append(dayThreeDate)

          var dayThreeIcon = $("<div>").html("<img id='wicon' src='http://openweathermap.org/img/w/" + (response3.daily[2].weather[0].icon) + ".png' alt='Weather icon'><br>");
          resultsDayThree.append(dayThreeIcon)

          var dayThreeTemp = $("<p>").html("Temp: " + (Math.floor((((response3.daily[2].temp.day)-273.15) * 1.8) + 32)) + " F°" + "<br>");
          resultsDayThree.append(dayThreeTemp)

          var dayThreeHum = $("<p>").html("Humidity: " + ((response3.daily[2].humidity) + "%" + "<br>"));
          resultsDayThree.append(dayThreeHum)

          $("#dayThree").append(resultsDayThree)

          // Day Four Forcast //

          $("#dayFour").empty()

          var resultsDayFour = $("<div>")

          var output = "(" + month + "/" + (day + 4) + "/" + year + ")";

          var dayFourDate = $("<h6>").html((output) + "<br>")
          resultsDayFour.append(dayFourDate)

          var dayFourIcon = $("<div>").html("<img id='wicon' src='http://openweathermap.org/img/w/" + (response3.daily[3].weather[0].icon) + ".png' alt='Weather icon'><br>");
          resultsDayFour.append(dayFourIcon)

          var dayFourTemp = $("<p>").html("Temp: " + (Math.floor((((response3.daily[3].temp.day)-273.15) * 1.8) + 32)) + " F°" + "<br>");
          resultsDayFour.append(dayFourTemp)

          var dayFourHum = $("<p>").html("Humidity: " + ((response3.daily[3].humidity) + "%" + "<br>"));
          resultsDayFour.append(dayFourHum)

          $("#dayFour").append(resultsDayFour)

          // Day Five Forcast //

          $("#dayFive").empty()

          var resultsDayFive = $("<div>")

          var output = "(" + month + "/" + (day + 5) + "/" + year + ")";

          var dayFiveDate = $("<h6>").html((output) + "<br>")
          resultsDayFive.append(dayFiveDate)

          var dayFiveIcon = $("<div>").html("<img id='wicon' src='http://openweathermap.org/img/w/" + (response3.daily[4].weather[0].icon) + ".png' alt='Weather icon'><br>");
          resultsDayFive.append(dayFiveIcon)

          var dayFiveTemp = $("<p>").html("Temp: " + (Math.floor((((response3.daily[4].temp.day)-273.15) * 1.8) + 32)) + " F°" + "<br>");
          resultsDayFive.append(dayFiveTemp)

          var dayFiveHum = $("<p>").html("Humidity: " + ((response3.daily[4].humidity) + "%" + "<br>"));
          resultsDayFive.append(dayFiveHum)

          $("#dayFive").append(resultsDayFive)

          $(".d-none").removeClass("d-none")

        });

    });

});
  
// Local Storage Functions //

var localArray = []

$("button").on("click", function() {

  var locationName = $(".location").val()
  localArray.push(locationName);

});

$("#searchBtn").click(function() {
  var input = localArray
  localStorage.setItem("locationName", JSON.stringify(input))
});

// Button Rendering Function // 

function renderBtns() {

  $("#localRecall").html("");

  for (var i = 0; i < localArray.length; i++) {
    var indexAdd = localArray[i];

    var btnName = $("<button>").html("<h5>" + indexAdd + "</h5>");
    btnName.attr("type", "submit")
    btnName.addClass("btn btn-danger my-1 location")

    var li = $("<li>");

    li.append(btnName);
    $("#localRecall").prepend(li)
  }

};

// Initiation function //

function init() {

  var stored = JSON.parse(localStorage.getItem("locationName"));

  if (stored !== null) {
    localArray = stored;
  }

  renderBtns();
}

init()
