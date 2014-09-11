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
		} else if(k===2){
			var face = "Q"
                        deck.push({face: face, suit:'♠'}, {face: face, suit:'♥'}, {face: face, suit:'♦'}, {face: face, suit:'♣'});
		} else if(k===3){
			var face = "K"
                        deck.push({face: face, suit:'♠'}, {face: face, suit:'♥'}, {face: face, suit:'♦'}, {face: face, suit:'♣'});
		} else{
			var face = "A"
                        deck.push({face: face, suit:'♠'}, {face: face, suit:'♥'}, {face: face, suit:'♦'}, {face: face, suit:'♣'});
		}
	}

	return deck;
}

var shuffle = function(Array){

	var shuffledDeck = [];
	
	for(var i = 0; i < 52; i++){
		var chosen = Math.floor(Math.random() * Array.length);
		var randomCard = Array[chosen];
		shuffledDeck.push(randomCard);
		Array.splice(chosen, 1);
	}

	return shuffledDeck;

}

var calculateHand = function(Array){

	var handTotal = 0;

	for(var i = 0; i < Array.length; i++){
		switch(Array[i].face){
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
	}

	return handTotal;
}

var determineWinner = function(Number1, Number2){

	var playerTotal = Number1;
	var computerTotal = Number2;

	console.log("Your hand's total is " + playerTotal + ".");
	console.log("The computer's hand's total is " + computerTotal + ".");

	if(playerTotal > 21 && computerTotal > 21){
		console.log("You and the computer bust! Sorry, no winner!");
	}else if(playerTotal > 21 && !(computerTotal > 21)){
		console.log("You bust! Sorry, the computer wins!");
	}else if(!(playerTotal > 21) && computerTotal > 21){
		console.log("The computer busts! You win!");
	}else if(playerTotal > computerTotal){
		console.log("You win!");
	}else if(computerTotal > playerTotal){
		console.log("The computer wins! Sorry!");
	} else{
		console.log("It's a tie! No winner!");
	}
}

//PLAY THE GAME

var deal = function(){
	
	debugger;

	var cards = shuffle(generateCards());
		
	while(cards.length >= 26){

		console.log("New Game:");

		var playerHand = [];
		var computerHand = [];

		playerHand.push(cards[0]);
		playerHand.push(cards[1]);
		var playerTotal = calculateHand(playerHand);

		computerHand.push(cards[2]);
		computerHand.push(cards[3]);
		var computerTotal = calculateHand(computerHand);

		cards.splice(0,4);

		console.log("Your hand is " + playerHand[0].face + playerHand[0].suit + "  " + playerHand[1].face + playerHand[1].suit + " for a total of " + playerTotal + ".");
		
		while(playerTotal < 21){

			var selection = prompt("Please choose 'h' to hit or 's' to stay.", "");

			if(selection==="h"){

				playerHand.push(cards[0]);
				console.log("You drew a " + cards[0].face + cards[0].suit + " .");
				cards.splice(0,1);
				playerTotal = calculateHand(playerHand);

				if(playerTotal < 21){
					console.log("Your new total is " + playerTotal + ".");
				}

			}else if(selection==="s"){

				break;

			} else{

				selection = prompt("Selection not valid.", "");

			}
		}
		
		while(computerTotal < 17){
			computerHand.push(cards[0]);
			cards.splice(0,1);
			computerTotal = calculateHand(computerHand);
		}
			
		determineWinner(playerTotal, computerTotal);
		console.log("There are " + cards.length + " cards in the deck.")
	}
	console.log("There are less than 26 cards in the deck. Game over!");
}

deal();




