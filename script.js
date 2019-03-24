var cards = ["🐶", "🐱", "🦄", "🐮", "🐷", "🐔", "🐸", "🦊", "🐵", "🦁", "🐺", "🦓"];
var doubles = cards.slice();
var totalCards = cards.concat(doubles);
var shuffledCards = shuffleArray(totalCards);

var board = document.getElementById("board");
let cardsHtml = "";
for (var i = 0; i < shuffledCards.length; i++) {
    // cardsHtml += '<div class="flip-card">';
    // cardsHtml += '<div class="flip-card-inner">';
    // cardsHtml += '<div class="flip-card-front"></div>';
    // cardsHtml += '<div class="flip-card-back">';
    // cardsHtml += shuffledCards[i];
    // cardsHtml += '</div></div>';
    cardsHtml +=`<div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back">
                            ${shuffledCards[i]}
                        </div>
                    </div>
                </div>`;
    // cardsHtml += "<div class='card'>" + shuffledCards[i] + "</div>";

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
    console.log(e);
    if (e.target && e.target.className== 'flip-card-front'){
        e.target.classList.add('hightlighted');
    }
});
