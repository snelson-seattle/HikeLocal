<<<<<<< HEAD
  



var lat = "47.6062";
var lon = "-122.3321";
var maxDistance = "1"; // in mile
var apiKey = "200940876-5be905d45fc6163d6540d3be7aff0c86";
var queryURL = "https://www.hikingproject.com/data/get-trails?lat="+lat+"&lon="+lon+"&maxDistance="+maxDistance+"&key=" + apiKey;
// var queryURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200940876-5be905d45fc6163d6540d3be7aff0c86";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // console.log(JSON.stringify(response));
    console.log(response);



});

function buildQueryURL () {
    var queryParams = 
}
=======
$(document).ready(function () {

// Access UI
var resultPageEl = $(".resultPage");

// Declare Global variables
var address = "";
var trailRating = 0;
var latitude = "";
var longitude = "";
var maxDistance = 0;
var maxResults = 50;  // test value
var sortBy = "distance"; // test value
var locations;


// Click event when clicking To trails button
$("#toTrails").on("click", function () {    
    address = $("#address").val();
    // console.log(address);

    // Capture User Input
    trailRating = $("#trail-rating").val();
    console.log(trailRating);
    maxDistance = parseInt($("#search-radius").val());

    $(".searchPage").css("display", "none");

    // Geolocation API transfer address to lat/lng
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyCPgJjyXg3QM3W6eJlHAtQGhct26ZY8pEI";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        latitude = response.results[0].geometry.location.lat;
        longitude = response.results[0].geometry.location.lng;
        console.log("latitude: " + latitude+" longitude:"+longitude);

        // Call Hiking API
        queryHikingProject(latitude, longitude, maxDistance, maxResults, sortBy, trailRating).then(data => {
          // Store returned trails array
          locations = data;
        });
        // hiking(latitude, longitude);
      });

     

});

// Go back to search page
$("#home").on("click", function() {
  $(".searchPage").css("display", "block");
  $(".resultPage").text("");
});




});
>>>>>>> develop
