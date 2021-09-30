var kwApi = 'https://api.kanye.rest/';
var rsApi = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
searchBtnEl = document.querySelector("#getQuote");

var kwGif = 'https://api.giphy.com/v1/gifs/search?q=kanye-west&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
var rsGif = 'https://api.giphy.com/v1/gifs/search?q=ron-swanson&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
gifEl = document.querySelector("#gif");

// function to get quotes
var getQuote = function(event) {

    fetch(kwApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    });
    
    fetch(rsApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    });
};



var getGif = function(event) {

    fetch(kwGif).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                console.log(data.data[0].images.fixed_width.url);
                var westGifEl = document.querySelector(gifEl);
                westGifEl.innerHTML = "";
                var setGif = document.createElement('img');
                setGif.setAttribute('src', data.data[0].images.fixed_width.url);

                westGifEl.appendChild(setGif);
            })
        }
    });
    fetch(rsGif).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {

            })
        }
    });

    
};



// var getGif = function (event) {
//     fetch(kwGif).then(function(response) {
//         if(response.ok) {
//             response.json().then(function(data) {
//                 console.log(data);
//             })
//         }
//     });
    
//     fetch(rsGif).then(function(response) {
//         if(response.ok) {
//             response.json().then(function(data) {
//                 // console.log(data);
//             })
//         }
//     });
// };




// click button event
searchBtnEl.addEventListener("click", getQuote, getGif);