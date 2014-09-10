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

	//console.log(deck);
	console.log("There are " + deck.length + " cards in the deck.");

}

var shuffle = function(Array){

}

var calculateHand = function(Array){

}

var determineWinner = function(Number, Number){

}

var cards = generateCards();


