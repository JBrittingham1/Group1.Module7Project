const kwApi = 'https://api.kanye.rest/';
const rsApi = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const kwGif = 'https://api.giphy.com/v1/gifs/search?q=kanye-west&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
const rsGif = 'https://api.giphy.com/v1/gifs/search?q=ron-swanson&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
const clearScoresBtn = document.querySelector('#clear-scores');
const searchBtnEl = document.querySelector("#getQuote");
const westQuoteEl = document.querySelector("#westQuote");
const swansonQuoteEl = document.querySelector("#swansonQuote");
const westGifEl = document.querySelector("#westGiphy");
const swansonGifEl = document.querySelector("#swansonGiphy");
const kanyeVoteBtnEl = document.querySelector("#kanyeVote");
const ronVoteBtnEl = document.querySelector("#ronVote");
const kanyeScoreEl = document.querySelector('#kanye-score');
const ronScoreEl = document.querySelector('#ron-score');

let kanyeWinsCounter = 0;
let ronWinsCounter = 0;

searchBtnEl.addEventListener('click', function() {
    getQuotesAndGifs();
})

function getQuotesAndGifs() {
    searchBtnEl.classList.add('hidden');

    // fetch kanye quote
    fetch(kwApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                let westQuote = data.quote;
                let displayWestQuote = document.createElement('p');
                displayWestQuote.textContent = '"' + westQuote + '"';
                westQuoteEl.appendChild(displayWestQuote);
            })
        }
    });
    
    // fetch ron quote
    fetch(rsApi).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                let swansonQuote = data[0];
                let displaySwansonQuote = document.createElement('p');
                displaySwansonQuote.textContent = '"' + swansonQuote + '"';
                swansonQuoteEl.appendChild(displaySwansonQuote);
            })
        }
    });

    // fetch kanye gif
    fetch(kwGif).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                let randomWestGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_height.url;
                westGifEl.innerHTML = "";
                let westGifImg = document.createElement('img');
                westGifImg.setAttribute('src', randomWestGif);
                westGifImg.setAttribute('width', '175');
                westGifEl.appendChild(westGifImg);
            })
        }
    });

    // fetch ron gif
    fetch(rsGif).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                let randomSwansonGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_height.url;
                swansonGifEl.innerHTML = "";
                let swansonGifImg = document.createElement('img');
                swansonGifImg.setAttribute('src', randomSwansonGif);
                swansonGifImg.setAttribute('width', '175');
                swansonGifEl.appendChild(swansonGifImg);
            })
        }
    });

    kanyeVoteBtnEl.classList.remove('hidden');
    ronVoteBtnEl.classList.remove('hidden');
    clearScoresBtn.classList.remove('hidden');
};

function kanyeWins(){
    kanyeWinsCounter++;
    console.log(kanyeWinsCounter);
    kanyeScoreEl.innerHTML = kanyeWinsCounter;
    clearContent();
};

function ronWins(){
    ronWinsCounter++;
    console.log(ronWinsCounter);
    ronScoreEl.innerHTML = ronWinsCounter;
    clearContent();
};

function clearContent(){
    westQuoteEl.textContent = "";
    westGifEl.innerHTML = "";
    swansonQuoteEl.textContent = "";
    swansonGifEl.innerHTML = "";
    getQuotesAndGifs();
};

clearScoresBtn.addEventListener('click', function(){
    kanyeWinsCounter = 0;
    kanyeScoreEl.innerHTML = "";
    ronWinsCounter = 0;
    ronScoreEl.innerHTML = "";
});

kanyeVoteBtnEl.addEventListener('click', kanyeWins);
ronVoteBtnEl.addEventListener('click', ronWins);