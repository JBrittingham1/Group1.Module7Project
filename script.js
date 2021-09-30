var kwApi = 'https://api.kanye.rest/';
var rsApi = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
searchBtnEl = document.querySelector("#getQuote");

var westQuoteEl = document.querySelector("#westQuote");
var swansonQuoteEl = document.querySelector("#swansonQuote");

var kwGif = 'https://api.giphy.com/v1/gifs/search?q=kanye-west&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
var rsGif = 'https://api.giphy.com/v1/gifs/search?q=ron-swanson&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';

var westGifEl = document.querySelector("#westGiphy");
var swansonGifEl = document.querySelector("#swansonGiphy");




var btnHandler = function(event) {
    westQuoteEl.textContent = "";
    swansonQuoteEl.textContent = "";

    getQuote();
    getGif();
}

// function to get quotes
var getQuote = function(event) {

    // fetch kanye quote
    fetch(kwApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                // console.log(data.quote);
                var westQuote = data.quote;
                var displayWestQuote = document.createElement('p');
                displayWestQuote.textContent = westQuote + " - Kanye West";
                westQuoteEl.appendChild(displayWestQuote);
            })
        }
    });
    
    // fetch ron quote
    fetch(rsApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                // console.log(data[0]);
                var swansonQuote = data[0];
                var displaySwansonQuote = document.createElement('p');
                displaySwansonQuote.textContent = swansonQuote + " - Ron Swanson";
                swansonQuoteEl.appendChild(displaySwansonQuote);
            })
        }
    });
};

var getGif = function(event) {
    // fetch kanye gif
    fetch(kwGif).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                // // gets the same pic !! NEED_TO_RANDOMIZE
                // console.log(data.data[0].images.fixed_width.url);
                var randomWestGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_width.url;
                // console.log(randomKWArr.images.fixed_width.url);
                // console.log(randomWestGif);
                // var randomKWGif = randomKWArr.images.fixed_width.url;
                // console.log(randomKWGif);
                // var displayWestGif = document.createElement('span');
                // displayWestGif. = randomKWGif;
                // westGifEl.appendChild(displayWestGif);
                westGifEl.innerHTML = "";
                var westGifImg = document.createElement('img');
                westGifImg.setAttribute('src', randomWestGif);
                westGifEl.appendChild(westGifImg);

            })
        }
    });

    // fetch ron gif
    fetch(rsGif).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                // console.log(data.data[0].images.fixed_width.url);
                var randomSwansonGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_width.url;
                // console.log(randomSwansonGif);
                swansonGifEl.innerHTML = "";
                var swansonGifImg = document.createElement('img');
                swansonGifImg.setAttribute('src', randomSwansonGif);
                swansonGifEl.appendChild(swansonGifImg);
            })
        }
    });
};


// click button event
// searchBtnEl.addEventListener("click", btnHandler, getQuote);
searchBtnEl.addEventListener("click", btnHandler, getQuote, getGif);