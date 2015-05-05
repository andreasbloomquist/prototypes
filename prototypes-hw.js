// Dice
// ===================================================================================
function Dice (numSides) {
    this.numberOfSides = numSides;
    this.lastRoll = 0;
}

Dice.prototype.roll = function () {
    return this.lastRoll = ((Math.floor(Math.random() * this.numberOfSides) + 1));
}

// Starship
// ===================================================================================

function StarShip (model, ownerName){
  this.model = model;
  this.ownerName = ownerName;
}

StarShip.prototype.setTopSpeed = function(speed) {
  this.topSpeed = speed;
}

StarShip.prototype.getTopSpeed = function() {
	return this.topSpeed;
}

StarShip.prototype.accelerateTo = function(acceleration) {
	if (acceleration <= this.topSpeed) {
		return this.currentSpeed = acceleration;
	}
}

// Radio
// ===================================================================================

function Radio (ownerName, signalType) {
	this.ownerName = ownerName;
	this.signalType = signalType;
	this.station = null;
}

Radio.prototype.setStation = function(station){
	if (this.signalType === "AM" && station >= 535 && station <= 1025) {
		return this.station = station;
	}
}

Radio.prototype.listen = function() {
	return (this.signalType === "AM" ? "Distorted music" : "Clear music");
}

Radio.prototype.toggle = function(){
	return (this.signalType === "AM") ? this.signalType = "FM" : this.signalType = "AM";
} 

// Card Deck
// ===================================================================================

function CardDeck () {
	this.cards = [];
	for (var i = 0; i<52; i++) {
		this.cards.push(i+1);
	}
}

CardDeck.prototype.deal = function() {
	var x = Math.floor(Math.random()*52);
	return this.cards.splice(x, 1);
}

CardDeck.prototype.isFull = function (){
	// TEST THIS AGAIN
	if (this.cards.length === 52){
		return "This deck is fulL!";
	} else {
		return "This deck is NOT full";
	}
}
