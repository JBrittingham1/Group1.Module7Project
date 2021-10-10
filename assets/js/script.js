var kwApi = 'https://api.kanye.rest/';
var rsApi = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
searchBtnEl = document.querySelector("#getQuote");
scoreBtnEl = document.querySelector("#getScore");

var westQuoteEl = document.querySelector("#westQuote");
var swansonQuoteEl = document.querySelector("#swansonQuote");

var kwGif = 'https://api.giphy.com/v1/gifs/search?q=kanye-west&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';
var rsGif = 'https://api.giphy.com/v1/gifs/search?q=ron-swanson&api_key=p8XQjyndOC4ycMWcXs2q7C3OCZks2J92';

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
                var randomWestGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_height.url;
                westGifEl.innerHTML = "";
                var westGifImg = document.createElement('img');
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
                var randomSwansonGif = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_height.url;
                swansonGifEl.innerHTML = "";
                var swansonGifImg = document.createElement('img');
                swansonGifImg.setAttribute('src', randomSwansonGif);
                swansonGifImg.setAttribute('width', '175');
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
    var userScore = {
        kanye: kanyeWinsCounter,
        ron: ronWinsCounter
    };

    vsCounter.pop();
    vsCounter.push(userScore);
    localStorage.setItem("score", JSON.stringify(userScore));
};

var getScores = function(event) {
    var getPrevScores = JSON.parse(localStorage.getItem("score"));

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

// MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_

    // Get the modal
    var modal = document.getElementById("modal");

    // Get the KANYE button that opens the modal
    var btnKw = kanyeVoteBtnEl;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btnKw.onclick = function() {
    }

    // Get the RON button that opens the modal
    var btnRs = ronVoteBtnEl;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btnRs.onclick = function() {
    }

// click button event
searchBtnEl.addEventListener("click", btnHandler, getQuote, getGif);
kanyeVoteBtnEl.addEventListener("click", kanyeWins);
ronVoteBtnEl.addEventListener("click", ronWins);