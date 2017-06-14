// import $ from 'jquery';
// import token from "./token.js"

console.log("Hello World from Main Javascript")

function getData(data) {
    $.ajax({
        url: `https://api.darksky.net/forecast/d8fc3b794588208348c3f592cb9ce424/37.8267,-122.4233`,
        dataType: "jsonp",
        data: {
            q: data
        },
        success: console.log
    })
};

getData()


// $.getJSON('http://api.darksky.net/forecast/d8fc3b794588208348c3f592cb9ce424/37.8267,-122.4233', function(forecast) {});

// $.getJSON( function(forecast) {
//     console.log(forecast);
// });