//Array to hold all Cards
let cards = ['fa-share-alt','fa-signal','fa-github','fa-facebook','fa-diamond','fa-cube','fa-bomb','fa-whatsapp','fa-share-alt','fa-signal','fa-github','fa-facebook','fa-diamond','fa-cube','fa-bomb','fa-whatsapp'];
$(document).ready(function(){
createGrid();
})


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

 //Dynamically populating the grid after getting the cards shuffled by calling shuffle() function
 function createGrid(){
	 let cardArray = shuffle(cards);
	 for(let i=0;i<cardArray.length;i++){
	 $('.deck').append('<li class="card"><i class="fa ${cardClass}"</i></li>');
	 }	
 }







/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
