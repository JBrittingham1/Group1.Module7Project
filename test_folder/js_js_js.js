// kanye west quote api
const kwApi = 'https://api.kanye.rest/';
// ron swanson quote api
const rsApi = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
// kanye west giphy api
const kwGif = 'https://api.giphy.com/v1/gifs/search?q=kanye-west&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
// ron swanson giphy api
const rsGif = 'https://api.giphy.com/v1/gifs/search?q=ron-swanson&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
// get quote btn
const getQuoteBtn = document.querySelector("#getQuote");
// get score btn
// scoreBtnEl = document.querySelector("#getScore");

const westQuoteEl = document.querySelector("#westQuote");
// var swansonQuoteEl = document.querySelector("#swansonQuote");

// var westGifEl = document.querySelector("#westGiphy");
// var swansonGifEl = document.querySelector("#swansonGiphy");


// kanyeVoteBtnEl = document.querySelector("#kanyeVote");
// ronVoteBtnEl = document.querySelector("#ronVote");
// var kanyeWinsCounter = 0;
// var ronWinsCounter = 0;
// var vsCounter = [];

getQuoteBtn.addEventListener('click', function(){
    // fetch quotes for kanye and ron
    // kanye
    fetch(kwApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                // console.log(data.quote);
                var westQuote = data.quote;
                var displayWestQuote = document.createElement('p');
                displayWestQuote.textContent = westQuote;
                westQuoteEl.appendChild(displayWestQuote);
            })
        }
    });
    // ron
    fetch(rsApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                // console.log(data[0]);
                var swansonQuote = data[0];
                var displaySwansonQuote = document.createElement('p');
                displaySwansonQuote.textContent = swansonQuote;
                swansonQuoteEl.appendChild(displaySwansonQuote);
            })
        }
    });
});