var cards = ["🐶", "🐱", "🦄", "🐮", "🐷", "🐔", "🐸", "🦊", "🐵", "🦁", "🐺", "🦓"];
var doubles = cards.slice();
var totalCards = cards.concat(doubles);
var shuffledCards = shuffleArray(totalCards);

var board = document.getElementById("board");
let cardsHtml = "";
for (var i = 0; i < shuffledCards.length; i++) {
    cardsHtml += "<div class='card'>" + shuffledCards[i] + "</div>";
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
