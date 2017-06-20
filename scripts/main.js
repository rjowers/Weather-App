// import $ from 'jquery';
// import token from "./token.js"

// console.log("Hello World from Main Javascript")


 function getData(data, callback) {
    $.ajax({
        url: `https://api.darksky.net/forecast/d8fc3b794588208348c3f592cb9ce424/37.8267,-122.4233`,
        dataType: "jsonp",
        data: {
            q: data
        },
        success: appendData
    })

};

// var getWeather= getData();

getData()

var searchBox = new google.maps.places.SearchBox();
var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
searchBox.addListener('places_changed', function() {});

searchBox.addListener('places_changed', function() {
    var locale = searchBox.getPlaces()[0];
});

document.querySelector("#latitude").value = place.geometry.location.lat();
document.querySelector("#longitude").value = place.geometry.location.lng();

 
function appendData(data){
    console.log(data)
    //  for(var count = 0; count < data.length; count++ ){

        putWeather =$(".current-weather").html();
        putWeather +=`
        <span class="temp">${data.currently.temperature}°F<span> 
        <span class="skies">The skies are ${data.currently.summary} and there is a ${data.currently.visibility} mile visibility <span> 


        `;
        $(".current-weather").html(putWeather);

    putDaily =$(".daily-weather").html();
        putDaily +=`
         <div class="weather-box">
            <p>Sunday</p>
            <p>${data.daily.data[0].summary}</p>
            <p>${data.daily.data[0].apparentTemperatureMax}°F High</p>
            <p>${data.daily.data[0].apparentTemperatureMin}°F Low</p>
            <p>${data.daily.data[0].precipProbability}% chance for rain</p>
            <p>${data.daily.data[0].humidity}%humidity</p>
         </div>

         <div class="weather-box">
            <p>Monday</p>
            <p>${data.daily.data[1].summary}</p>
            <p>${data.daily.data[1].apparentTemperatureMax}°F High</p>
            <p>${data.daily.data[1].apparentTemperatureMin}°F Low</p>
            <p>${data.daily.data[1].precipProbability}% chance for rain</p>
            <p>${data.daily.data[1].humidity}%humidity</p>
         </div>

         <div class="weather-box">
            <p>Tuesday</p>
            <p>${data.daily.data[2].summary}</p>
            <p>${data.daily.data[2].apparentTemperatureMax}°F High</p>
            <p>${data.daily.data[2].apparentTemperatureMin}°F Low</p>
            <p>${data.daily.data[2].precipProbability}% chance for rain</p>
            <p>${data.daily.data[2].humidity}%humidity</p>
         </div>

         <div class="weather-box">
            <p>Wednesday</p>
            <p>${data.daily.data[3].summary}</p>
            <p>${data.daily.data[3].apparentTemperatureMax}°F High</p>
            <p>${data.daily.data[3].apparentTemperatureMin}°F Low</p>
            <p>${data.daily.data[3].precipProbability}% chance for rain</p>
            <p>${data.daily.data[3].humidity}%humidity</p>
         </div>

         <div class="weather-box">
            <p>Thursday</p>
            <p>${data.daily.data[4].summary}</p>
            <p>${data.daily.data[4].apparentTemperatureMax}°F High</p>
            <p>${data.daily.data[4].apparentTemperatureMin}°F Low</p>
            <p>${data.daily.data[4].precipProbability}% chance for rain</p>
            <p>${data.daily.data[4].humidity}%humidity</p>
         </div>

         <div class="weather-box">
            <p>Friday</p>
            <p>${data.daily.data[5].summary}</p>
            <p>${data.daily.data[5].apparentTemperatureMax}°F High</p>
            <p>${data.daily.data[5].apparentTemperatureMin}°F Low</p>
            <p>${data.daily.data[5].precipProbability}% chance for rain</p>
            <p>${data.daily.data[5].humidity}%humidity</p>
         </div>

         <div class="weather-box">
            <p>Saturday</p>
            <p>${data.daily.data[6].summary}</p>
            <p>${data.daily.data[6].apparentTemperatureMax}°F High</p>
            <p>${data.daily.data[6].apparentTemperatureMin}°F Low</p>
            <p>${data.daily.data[6].precipProbability}% chance for rain</p>
            <p>${data.daily.data[6].humidity}%humidity</p>
         </div>

      

        `;
        $(".daily-weather").html(putDaily);
     };


var x=document.getElementById("demo");
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
        document.getElementById("demo").innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    displayLocation(lat,lon);
    console.log(lat);
    console.log(lon);

}

function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            document.getElementById("demo").innerHTML="User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("demo").innerHTML="Location information is unavailable."
        break;
        case error.TIMEOUT:
            document.getElementById("demo").innerHTML="The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
            document.getElementById("demo").innerHTML="An unknown error occurred."
        break;
    }
}

function displayLocation(latitude,longitude){
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode(
        {'latLng': latlng}, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var add= results[0].formatted_address ;
                    var  value=add.split(",");

                    count=value.length;
                    country=value[count-1];
                    state=value[count-2];
                    city=value[count-3];
                    document.getElementById("demo").innerHTML = "city name is: " + city;
                            console.log(latlng);
                 }
                else  {
                    document.getElementById("demo").innerHTML = "address not found";
                }
            }
            else {
                document.getElementById("demo").innerHTML = "Geocoder failed due to: " + status;
            }
        }
    );
}

// appendData();

// function appendData(data) {
//     console.log(data)
//     $(".info").append(
//         `
//             <div class="columns">
//             <div class="column">
//             <ul>
//             <li class="Name"><span>Name: </span>${data.name}</li>
//             <li class="phone"><span>Phone Number: </span>803-719-6681</li>
//             <li class="email"><span>Email: </span>${data.email}</li>
//             <li class="url"><span>Github URL: </span><a href="${data.html_url}">${data.html_url}</a></li>
//             <li class="location"><span>Location: </span>${data.location}</li>
//             </ul>
//             </div>
//             <div class="column">
//             <h1> ABOUT ME </h1>
//             <p>${data.bio}</p>
//             </div>
//             <div class="column">
//             <img src="${data.avatar_url}"/>
//             </div>
//             </div>
//             `)
// }

// function holdData(data, callback) {
//     $.ajax({
//         url: `https://api.darksky.net/forecast/d8fc3b794588208348c3f592cb9ce424/37.8267,-122.4233`,
//         dataType: "jsonp",
//         data: {
//             q: data
//         },
//         success: callback
//     })
// };



// function name() {
//    console.log('hello')
// };
 
// name()



// holdData()
// var putWeather;
// function appendData(){
//     console.log(inside)
//     for(var count = 0; count < data.currently.length; count++ ){
//         putWeather =$(".hourly-weather").html();
//         putWeather +=`
//         <p class="weather">$${data.currently.length}</p>

//         `;
//         $(".hourly-weather").html(putWeather);

//     }


// };


// var putImages;
// for (var count = 0; count < items.results.length; count++) {
//     putImages = $(".alltheitems").html();
//     putImages +=
//         `<div class="image">
//     <div class="icons">
//     <img class="heart" src="heart.png"/>
//     <img class="hamburger" src="hamburger.png"/>
//     </div>
//     <a href = "${items.results[count].url}"><img src="${items.results[count].Images[0].url_170x135}" width = "225"/></a>
//     <p class="title">${items.results[count].title}</p>
//     <p class="shopname">${items.results[count].Shop.shop_name}</p>
//     <p class="money">$${items.results[count].price}</p>
//    </div>`;
//     $(".alltheitems").html(putImages);
// };

// $.getJSON('http://api.darksky.net/forecast/d8fc3b794588208348c3f592cb9ce424/37.8267,-122.4233', function(forecast) {});

// $.getJSON( function(forecast) {
//     console.log(forecast);
// });