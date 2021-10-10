var kwApi = 'https://api.kanye.rest/';
var rsApi = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
var kwGif = 'https://api.giphy.com/v1/gifs/search?q=kanye-west&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
var rsGif = 'https://api.giphy.com/v1/gifs/search?q=ron-swanson&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';

searchBtnEl = document.querySelector("#getQuote");
scoreBtnEl = document.querySelector("#getScore");

var westQuoteEl = document.querySelector("#westQuote");
var swansonQuoteEl = document.querySelector("#swansonQuote");

var westGifEl = document.querySelector("#westGiphy");
var swansonGifEl = document.querySelector("#swansonGiphy");


kanyeVoteBtnEl = document.querySelector("#kanyeVote");
ronVoteBtnEl = document.querySelector("#ronVote");
var kanyeWinsCounter = 0;
var ronWinsCounter = 0;
var vsCounter = [];


var btnHandler = function(event) {
    westQuoteEl.textContent = "";
    swansonQuoteEl.textContent = "";
    displayVoteButtons();
    getQuote();
    getGif();
}

var getScoreHandler = function(event) {
    getScores();
};

//function to display vote buttons
var displayVoteButtons = function(event) {
    kanyeVoteBtnEl.classList.remove('hidden');
    ronVoteBtnEl.classList.remove('hidden');
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
                // console.log(data.data[0].images.fixed_width.url);
                var randomWestGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_height.url;
                // console.log(randomWestGif);
                westGifEl.innerHTML = "";
                var westGifImg = document.createElement('img');
                westGifImg.setAttribute('src', randomWestGif);
                westGifImg.setAttribute('width', '100');
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
                var randomSwansonGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_height.url;
                // console.log(randomSwansonGif);
                swansonGifEl.innerHTML = "";
                var swansonGifImg = document.createElement('img');
                swansonGifImg.setAttribute('src', randomSwansonGif);
                swansonGifImg.setAttribute('width', '100');
                swansonGifEl.appendChild(swansonGifImg);
            })
        }
    });
};

var kanyeWins = function(event) {
    kanyeWinsCounter++;
    var kanyeWon = document.querySelector("#winnerName");
    autoSave();
};

var ronWins = function(event) {
    ronWinsCounter++;
    var ronWon = document.querySelector("#winnerName");
    autoSave();
};

var autoSave = function(event) {
    // event.preventDefault();

    var userScore = {
        kanye: kanyeWinsCounter,
        ron: ronWinsCounter
    };

    vsCounter.pop();
    vsCounter.push(userScore);
    // console.log(vsCounter);
    localStorage.setItem("score", JSON.stringify(userScore));
};

var getScores = function(event) {

    // var getPrevScores = localStorage.getItem("score");
    var getPrevScores = JSON.parse(localStorage.getItem("score"));
    // console.log(getPrevScores.kanye);

    if (getPrevScores === null) {
        alert("No Scores!")
        vsCounter = [];
    } else {
        alert(
            "Kanye West has " + getPrevScores.kanye + " pts!" + 
            " Ron Swanson has " + getPrevScores.ron + " pts!"
        );
    }


};


// click button event
searchBtnEl.addEventListener("click", btnHandler, getQuote, getGif);

//scoreBtnEl.addEventListener("click", getScores);


kanyeVoteBtnEl.addEventListener("click", kanyeWins);
ronVoteBtnEl.addEventListener("click", ronWins);