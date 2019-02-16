document.addEventListener("DOMContentLoaded", function() {

// declare attack button
var attackButton = document.querySelector('#attack-button');
// add attack button
// $('.container').append(attackButton);	

// objects for characters 
var obiWan = {
	health: 120,
	attack: 1,
	defeated: 'no',
	image: '<img src="Assets/imgs/obiwan.jpg" alt="...">',
	object: '<div class="col"><div id="obi-wan" class="card"><img src="Assets/imgs/obiwan.jpg" class="card-img-top" alt="..."><div class="card-body"><h3>Obi-Wan Kenobi</h3><p class="card-text">Health: 120</p></div></div></div>'
};
var luke = {
	health: 100,
	attack: 1,
	defeated: 'no',
	image: '<img src="Assets/imgs/skywalker.jpeg"/>',
	object: '<div class="col"><div id="luke-skywalker" class="card"><img src="Assets/imgs/skywalker.jpeg" class="card-img-top" alt="..."><div class="card-body"><h3>Luke Skywalker</h3><p class="card-text">Health: 100</p></div></div></div>'
};
var sidious = {
	health: 150,
	attack: 1,
	defeated: 'no',
	image: '<img src="Assets/imgs/sidious.jpg"/>',
	object: '<div class="col"><div id="darth-sidious" class="card"><img src="Assets/imgs/sidious.jpg" class="card-img-top" alt="..."><div class="card-body"><h3>Darth Sidious</h3><p class="card-text">Health: 150</p></div></div></div>'
};
var maul = {
	health: 100,
	attack: 1,
	defeated: 'no',
	image: '<img src= "Assets/imgs/darthmaul.jpg"/>',
	object: '<div class="col"><div id="darth-maul" class="card"><img src="Assets/imgs/darthmaul.jpg" class="card-img-top" alt="..."><div class="card-body"><h3>Darth Maul</h3><p class="card-text">Health: 100</p></div></div></div>'
};

// base attack variable;
var baseAttack;


// adding character cards to html doc
$(".card").on('click', function () {

}) 
$(".character-container").append(obiWan.object, luke.object, sidious.object, maul.object);

// declare empty character and opponent objects
var character = {};
var opponent = {};

// click listeners for cards
$("#obi-wan").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").find('img').length === 0) {
		// place in character
		$(".your-character").append(obiWan.image);
		$("#obi-wan").remove();
		// push char object to character
		character.health = obiWan.health;
		character.attack = obiWan.attack;
		baseAttack = obiWan.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").find('img').length === 1 && $(".opponent").find('img').length === 0) {// else place in opponent
		$(".opponent").append(obiWan.image);
		$('#obi-wan').remove();
		// add obiwan traits to opponent object
		opponent.health = obiWan.health;
		opponent.attack = obiWan.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});
$("#luke-skywalker").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").find('img').length === 0) {
		// place in character
		$(".your-character").append(luke.image);
		$("#luke-skywalker").remove();
		// push char object to character
		character.health = luke.health;
		character.attack = luke.attack;
		baseAttack = luke.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").find('img').length === 1 && $(".opponent").find('img').length === 0) {// else place in opponent
		$(".opponent").append(luke.image);
		$("#luke-skywalker").remove();
		// add obiwan traits to opponent object
		opponent.health = luke.health;
		opponent.attack = luke.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});
$("#darth-sidious").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").find('img').length === 0) {
		// place in character
		$(".your-character").append(sidious.image);
		$("#darth-sidious").remove();
		// push char object to character
		character.health = sidious.health;
		character.attack = sidious.attack;
		baseAttack = sidious.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").find('img').length === 1 && $(".opponent").find('img').length === 0) {// else place in opponent
		$(".opponent").append(sidious.image);
		$('#darth-sidious').remove();
		// add obiwan traits to opponent object
		opponent.health = sidious.health;
		opponent.attack = sidious.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});
$("#darth-maul").on("click", function() {
	// if character hasn't been picked
	if ($(".your-character").find('img').length === 0) {
		// place in character
		$(".your-character").append(maul.image);
		$("#darth-maul").remove();
		// push char object to character
		character.health = maul.health;
		character.attack = maul.attack;
		baseAttack = maul.attack;
		// update ui with health
		$('.character-health').append('Health: ' + character.health);
	} else if ($(".your-character").find('img').length === 1 && $(".opponent").find('img').length === 0) {// else place in opponent
		$(".opponent").append(maul.image);
		$('#darth-maul').remove();
		// add obiwan traits to opponent object
		opponent.health = maul.health;
		opponent.attack = maul.attack;
		// update ui with health
		$('.opponent-health').append('Health: ' + opponent.health);
	};
});

// program attack button
// on click
$('#attack-button').on("click", function() {
	character.attack += baseAttack;
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
		$('.opponent-health').html('Health: ');
		$('.opponent').html('');
	};
});

});














