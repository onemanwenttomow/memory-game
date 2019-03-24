var cards = ["🐶", "🐱", "🦄", "🐮", "🐷", "🐔", "🐸", "🦊", "🐵", "🦁", "🐺", "🦓"];
var doubles = cards.slice();
var totalCards = cards.concat(doubles);
var shuffledCards = shuffleArray(totalCards);
// var shuffledCards = totalCards;
var numberOfCards, isInMotion;

var board = document.getElementById("board");
let cardsHtml = "";
for (var i = 0; i < shuffledCards.length; i++) {
    cardsHtml +=`<div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back">
                            ${shuffledCards[i]}
                        </div>
                    </div>
                </div>`;
}

function checkForPair() {
    numberOfCards = document.querySelectorAll(".hightlighted");
    if (numberOfCards.length > 1 && numberOfCards[0].innerText == numberOfCards[1].innerText) {
        isInMotion = true;
        setTimeout(function(){
            for (var i = 0; i < numberOfCards.length; i++) {
                numberOfCards[i].classList.remove('hightlighted');
                numberOfCards[i].parentNode.classList.add('pair');
                isInMotion = false;
            }
        }, 1000);
    } else if (numberOfCards.length > 1 && numberOfCards[0].innerText != numberOfCards[1].innerText){
        isInMotion = true;
        setTimeout(function(){
            for (var i = 0; i < numberOfCards.length; i++) {
                numberOfCards[i].classList.remove('hightlighted');
                isInMotion = false;
            }
        }, 1000);
    }

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

board.innerHTML= cardsHtml;

document.addEventListener("click", function(e) {
    if (isInMotion) {
        return;
    }
    if (e.target.parentNode.className == "flip-card-inner hightlighted") {
        console.log("no cheating!");
        return;
    }
    if (e.target && e.target.className == 'flip-card-front') {
        e.target.parentNode.classList.add("hightlighted");
    }
    if (e.target && e.target.className == 'flip-card-back') {
        e.target.parentNode.classList.remove("hightlighted");
    }
    checkForPair();
});
