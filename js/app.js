//State Variables
let cards = ['fa-share-alt','fa-signal','fa-github','fa-facebook','fa-diamond','fa-cube','fa-bomb','fa-whatsapp','fa-share-alt','fa-signal','fa-github','fa-facebook','fa-diamond','fa-cube','fa-bomb','fa-whatsapp'];
let moves=0;
let flippedCards=[];
let gameStarted=false;
let stars = 3;
let match=0;
$(document).ready(function(){
createGrid();
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
	 $('.deck').append('<li class="card "><i class="fa '+cardArray[i]+'"</i></li>');
	 }	
 }
 //This function displays the symbol when card is flipped
 function displaySymbol(e){
 	if(!gameStarted)
 	startTimer();
 	gameStarted=true;
 	if(flippedCards.length===0)
	{
		$(this).addClass('animated flipInY open show');
	 	flippedCards.push($(this));
	 	disableClickEvent();
	 }
	 else if(flippedCards.length==1)
	 {
	 	$(this).addClass('animated flipInY open show');
	 	flippedCards.push($(this));
	 	updateMoves();
 		disableClickEvent();
 		setTimeout(checkMatch, 900);
	 }
 	
 }
 //Timer functionality
  	let s=0,m=0,h=0;
 	let interval;
 function startTimer(){
 	let timer = $('.timer');
 	interval = setInterval(function(){
 		if(h<=9 && m<=9 && s<=9)
 			timer.html('0'+h+':'+'0'+m+':'+'0'+s)
 		else if(h<=9 && m<=9)
 			timer.html('0'+h+':'+'0'+m+':'+s)
 		else if(h<=9)
 			timer.html('0'+h+':'+m+':'+s);
 		else
 			timer.html(h+':'+m+':'+s);
 		s++;
 		if(s==60)
 		{
 			m++;
 			s=0;
 		}
 		if(m==60)
 		{
 			h++;
 			m=0;
 		}
 	},1000)


 }
 //Funtion to stop the event click
 function disableClickEvent()
 {
 	flippedCards.forEach(function(card){
 		card.off('click');
 	})
 }
 //function to start click event
 function enableClickEvent()
 {
 	flippedCards.forEach(function(card){
 		card.on('click',displaySymbol);
 	})
 }
 //To Check whether user has won the game or not
function checkWinner(){
	if(match==8)
		console.log('won');
}
// To check whether the two flipped cards are same or not
 function checkMatch(){

 	if(flippedCards[0].children('i').attr('class')==flippedCards[1].children('i').attr('class')){
 		    match++;
 			flippedCards[0].removeClass('open show animated flipInY tada');
 			flippedCards[1].removeClass('open show animated flipInY tada');
 			flippedCards[0].addClass('match animated pulse');
 			flippedCards[1].addClass('match animated pulse');
 			disableClickEvent();
 			flippedCards = [];
 			checkWinner();
 		}
 	else
 		{
 			flippedCards[0].removeClass('open show animated flipInY');
 			flippedCards[1].removeClass('open show animated flipInY');
 			flippedCards[0].addClass('animated tada');
 			flippedCards[1].addClass('animated tada');
 			enableClickEvent();
 			flippedCards = [];
 		}

 }
 //Star Functionality
 function updateStars(){

 	if(moves==10 || moves==20)
 	{
 		$('.stars').children().first().remove();
 	}
 	
 	
 	
 }
//function to update moves
function updateMoves(){
	moves++;
	updateStars();
	if(moves==1)
		$('.moves').html(moves+' Move');
	else
		$('.moves').html(moves+' Moves');

}
//Stop Timer functionality:Will reload the page
function stopTimer(){
location.reload();
}
//Restart Game functionality
function RestartGame(){
	gameStarted=false;
	$('.card').removeClass('open show match animated flipInY tada shake');
 	$('.card').removeClass('open show match animated flipInY tada shake');
 	stopTimer();
}
//When Restart is Clicked
$('.restart').on('click',RestartGame);
 //Adding Click functionality to individual cards
 $('.card').on('click',displaySymbol);

})












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
