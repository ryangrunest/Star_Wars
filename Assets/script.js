document.addEventListener("DOMContentLoaded", function() {

// declare attack button
var attackButton = '<button type="button" id="attack-button" class="btn btn-dark text-center">Attack!</button>';
// add attack button
$('body').append(attackButton);	

// objects for characters 
var obiWan = {
	health: 120,
	attack: 9,
	defeated: 'no',
	object: '<div class="col-3"><div id="obi-wan" class="card"><img src="Assets/imgs/obiwan.jpg" class="card-img-top" alt="..."><div class="card-body"><h3>Obi-Wan Kenobi</h3><p class="card-text">Health: 120</p></div></div></div>'
};
var luke = {
	health: 100,
	attack: 10,
	defeated: 'no',
	object: '<div class="col-3"><div id="luke-skywalker" class="card"><img src="Assets/imgs/skywalker.jpeg" class="card-img-top" alt="..."><div class="card-body"><h3>Luke Skywalker</h3><p class="card-text">Health: 100</p></div></div></div>'
};
var sidious = {
	health: 150,
	attack: 7,
	defeated: 'no',
	object: '<div class="col-3"><div id="darth-sidious" class="card"><img src="Assets/imgs/sidious.jpg" class="card-img-top" alt="..."><div class="card-body"><h3>Darth Sidious</h3><p class="card-text">Health: 150</p></div></div></div>'
};
var maul = {
	health: 100,
	attack: 10,
	defeated: 'no',
	object: '<div class="col-3"><div id="darth-maul" class="card"><img src="Assets/imgs/darthmaul.jpg" class="card-img-top" alt="..."><div class="card-body"><h3>Darth Maul</h3><p class="card-text">Health: 100</p></div></div></div>'
};

$(".character-container").append(obiWan.object, luke.object, sidious.object, maul.object);

// declare empty character and opponent objects
var character = {};
var opponent = {};


// click listeners for cards
$("#obi-wan").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").text() === "") {
		// place in character
		$(".your-character").append("Obi-Wan Kenobi");
		// push char object to character
		character.health = obiWan.health;
		character.attack = obiWan.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").text() != "Obi-Wan Kenobi" && $(".opponent").text() === ""){// else place in opponent
		$(".opponent").append("Obi-Wan Kenobi");
		// add obiwan traits to opponent object
		opponent.health = obiWan.health;
		opponent.attack = obiWan.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});
$("#luke-skywalker").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").text() === "") {
		// place in character
		$(".your-character").append("Luke Skywalker");
		// push luke traits to char objects
		character.health = luke.health;
		character.attack = luke.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").text() != "Luke Skywalker" && $(".opponent").text() === ""){// else place in opponent
		$(".opponent").append("Luke Skywalker");
		// add luke traits to opponent object
		opponent.health = luke.health;
		opponent.attack = luke.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});
$("#darth-sidious").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").text() === "") {
		// place in character
		$(".your-character").append("Darth Sidious");
		// push sidious traits to char objects
		character.health = sidious.health;
		character.attack = sidious.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").text() != "Darth Sidious" && $(".opponent").text() === ""){// else place in opponent
		$(".opponent").append("Darth Sidious");
		// add sidious traits to opponent object
		opponent.health = sidious.health;
		opponent.attack = sidious.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});
$("#darth-maul").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").text() === "") {
		// place in character
		$(".your-character").append("Darth Maul");
		// push maul traits to char objects
		character.health = maul.health;
		character.attack = maul.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").text() != "Darth Maul" && $(".opponent").text() === ""){// else place in opponent
		$(".opponent").append("Darth Maul");
		// add maul traits to opponent object
		opponent.health = maul.health;
		opponent.attack = maul.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});

// program attack button
// on click
$('#attack-button').on("click", function() {
	// disabling button functionality if health is less than 1
	if (opponent.health < 1 || character.health < 1) {
		$('#attack-button').on("click", function() {

		});
		// updating button ui to look disabled
		$('#attack-button').addClass('disabled');
	} else {
	// update variables
	opponent.health = opponent.health - character.attack;
	character.health = character.health - opponent.attack;
	// update ui
	$('.character-health').text('');
	$('.character-health').append('Health: ' + character.health);
	$('.opponent-health').text('');
	$('.opponent-health').append('Health: ' + opponent.health);
	};
	if (opponent.health < 1 && character.health < 1) {
	alert("it's a tie!");
	} else if (character.health < 1) {
		alert("you lost :(");
	} else if (opponent.health < 1) {
		alert("you won!");
	};
});

});














