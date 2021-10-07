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

    getQuote();
    getGif();
}

var getScoreHandler = function(event) {
    getScores();
};

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
    // console.log(kanyeWinsCounter);
    // alert("Kanye wins this time! Who'll win next? Click 'Get Quote'");
    var kanyeWon = document.querySelector("#winnerName");
    kanyeWon.innerHTML = "Kanye";

    autoSave();
};

var ronWins = function(event) {
    ronWinsCounter++;
    // console.log(ronWinsCounter);
    // alert("Ron wins this time! Who'll win next? Click 'Get Quote'");
    var ronWon = document.querySelector("#winnerName");
    ronWon.innerHTML = "Ron";


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

    
    // var currentScore = document.querySelector("#score");
    // currentScore.vaLue = vsCounter;
    // console.log(currentScore);

    // var scoreModal = document.getElementById("scoreModal");
    // var scoreBtn = scoreBtnEl;
    // var scoreSpan = document.getElementsByClassName("close-2")[0];
    // scoreBtn.onlcick = function() {
    // scoreModal.style.display = "block";
    // // var showScore = document.querySelector("#score");
    // // showScore.innerHTML = vsCounter;
    // }
    // scoreSpan.onclick = function() {
    //     scoreModal.style.display = "none";
    // }
    // window.onclick = function(event) {
    //     if (event.target == scoreModal) {
    //         scoreModal.style.display = "none";
    //     }
    // }


    
};

// MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_
// MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_MODAL_
    // Get the modal
    var modal = document.getElementById("modal");

    // Get the KANYE button that opens the modal
    var btnKw = kanyeVoteBtnEl;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btnKw.onclick = function() {
    modal.style.display = "block";
    }

    // Get the RON button that opens the modal
    var btnRs = ronVoteBtnEl;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btnRs.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }








// click button event
searchBtnEl.addEventListener("click", btnHandler, getQuote, getGif);

scoreBtnEl.addEventListener("click", getScores);


kanyeVoteBtnEl.addEventListener("click", kanyeWins);
ronVoteBtnEl.addEventListener("click", ronWins);