var prompt = require('sync-prompt').prompt;

var generateCards = function(){
	
	var deck = [];
	
	//generate number cards
	for(var i = 2; i < 11; i++){
		var j  = i + "";
		deck.push({face: j, suit:'♠'}, {face: j, suit:'♥'}, {face: j, suit:'♦'}, {face: j, suit:'♣'});
	}

	//generate face cards
	for(var k = 1; k < 5; k++){
		if(k===1){
			var face = "J"
			deck.push({face: face, suit:'♠'}, {face: face, suit:'♥'}, {face: face, suit:'♦'}, {face: face, suit:'♣'});
		}
		else if(k===2){
			var face = "Q"
                        deck.push({face: face, suit:'♠'}, {face: face, suit:'♥'}, {face: face, suit:'♦'}, {face: face, suit:'♣'});
		}
		else if(k===3){
			var face = "K"
                        deck.push({face: face, suit:'♠'}, {face: face, suit:'♥'}, {face: face, suit:'♦'}, {face: face, suit:'♣'});
		}
		else{
			var face = "A"
                        deck.push({face: face, suit:'♠'}, {face: face, suit:'♥'}, {face: face, suit:'♦'}, {face: face, suit:'♣'});
		}
	}

	return deck;

	//console.log(deck);
	console.log("There are " + deck.length + " cards in the deck.");

}

//REMEMBER TO REMOVE OLD CARDS USING SLICE!
var shuffle = function(Array){

	var unShuffled = generateCards();

	//new deck
	var shuffledDeck = [];
	
	for(var i = 0; i < 52; i++){
		var randomCard = unShuffled[Math.floor(Math.random() * 52)];
		shuffledDeck.push(randomCard);
	}

	console.log("There are " + shuffledDeck.length + " cards in the shuffled deck.");

	return shuffledDeck;

}

var calculateHand = function(Array){
	var cards = generateCards();

	var handTotal = 0;

	switch(cards.face){
		case "2":
			handTotal += 2;
			break;
		case "3":
			handTotal += 3;
			break;
		 case "4":
			handTotal += 4;
			break;
		case "5":
			handTotal += 5;
			break;
		case "6":
			handTotal += 6;
			break;
		case "7":
			handTotal += 7;
			break;
		case "8":
			handTotal += 8;
			break;
		case "9":
			handTotal += 9;
			break;
		case "A":
			handTotal += 10;
			if(handTotal >= 21){
				handTotal -= 9;
			}
			break;
		default:
			handTotal += 10;
	}
	return handTotal;
}

var determineWinner = function(Number1, Number2){

	var playerTotal = Number1;
	var computerTotal = Number2;

	console.log("Your hand's total is " + playerTotal);
	console.log("The computer's hand's total is " + computerTotal);

	if(playerTotal > computerTotal && playerTotal <= 21){
		console.log("Congratulations! You beat the computer!");
	}
	else if(computerTotal >= playerTotal && computerTotal <= 21){
		console.log("Too bad, the computer beat you!");
	}
	else if(computerTotal === playerTotal || playerTotal > 21 && computerTotal > 21){
		console.log("It's a tie!");
	}
}

//PLAY THE GAME

var deal = function(){
	var unShuffled = generateCards();
	var cards = shuffle(cards);

	var playerHand = [];
	var computerHand = [];

	for(var i = 0; i < cards.length; i++){
		
		playerHand.push(cards[0]);
		playerHand.push(cards[1]);
		computerHand.push(cards[2]);
		computerHand.push(cards[3]);
		cards.splice(0,4);

		//player
		var playerTotal = calculateHand(playerHand);
		console.log("Your hand is: " + playerHand + "for a total of " + playerTotal + ".");
		
		if(playerTotal < 21){
			var selection = prompt("Please choose to (h)it or (s)stay.", "");
			if(selection==="h"){
				playerHand.push(cards[0]);
				cards.splice(0,1);
			}
			else{
				break;
			}
		}

		//computer
		var computerTotal = calculateHand(computerHand);
		while(computerTotal < 17){
			computerHand.push(cards[0]);
			cards.splice(0,1);
			computerTotal = calculateHand(computerHand);
		}
		
	}

	determineWinner(playerTotal, computerTotal);
}

deal();




