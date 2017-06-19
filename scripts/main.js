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

 
function appendData(data){
    console.log(data)
    //  for(var count = 0; count < data.length; count++ ){

        putWeather =$(".hourly-weather").html();
        putWeather +=`
        <p class="weather">Hello!</p>
        <p class="weather">${data.currently.cloudCover}</p>


        `;
        $(".hourly-weather").html(putWeather);

    //  };


};

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