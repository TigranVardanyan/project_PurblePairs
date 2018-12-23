'use strict'

const start_game = document.querySelector(".start_game");
const sec_start = document.querySelector('.sec_start');
const sec_game = document.querySelector('.sec_game');
const game_area = document.querySelector('.game_area');
let cells;
let hardly;
let cell;
let hardly_number;
let cell_number;
let counter = 0;
let domId;

start_game.addEventListener('click' , function() {
	hardly = document.forms[0];
	for(var i = 0; i < 3; i++) {
		if(hardly[i].checked == true) {
			hardly_number =  hardly[i].value;
		}
	}
	for(var i = 3; i < 6; i++) {
		if(hardly[i].checked == true) {
			cell_number =  hardly[i].value;
		}
	}
	// console.log(hardly_number +"+"+ cell_number)

	//
	cell_set();
	var div = document.createElement('div');
	div.className = "img";
	div.innerHTML = `<div class=\"cell\">
						<img class=\"cell_front\" src=\"./img/0.jpg\" width="70px" height="70px" alt=\"\">
						<img class=\"cell_back rotate\" src=\'./img/1.jpg\' width="70px" height="70px">
					</div>`;
	for(var i = 0; i < cell_number*cell_number; i++) {
		game_area.appendChild(div.cloneNode(true))
	}
	sec_start.classList.add('hide');
	sec_game.classList.remove('hide');
	cells = document.querySelectorAll('.cell img');

})

//установка количества полей
function cell_set() {
	if (cell_number == 6) {
		game_area.classList.add('grid_6')
	}
	if (cell_number == 7) {
		game_area.classList.add('grid_7')
	}
	if (cell_number == 8) {
		game_area.classList.add('grid_8')
	}	
}
	document.querySelector('.game_area').addEventListener('click' , function() {
		var x = event.target;
		if(x.nodeName == 'IMG') {
			x.parentNode.children[0].classList.toggle('rotate');
			x.parentNode.children[1].classList.toggle('rotate1');
			if (domId == x.parentNode._DOMIndexerID) {
				counter = 0;
				domId = x.parentNode._DOMIndexerID;
			} else {
				domId = x.parentNode._DOMIndexerID;
				counter++;
			}
			if(counter >= 2) {
				game_area.style.pointerEvents = "none";
				setTimeout(() => {
					for(var i = 0; i < 2*cell_number*cell_number ; i++) {
						cells[i].classList.remove('rotate');
						cells[i].classList.remove('rotate1');
						game_area.style.pointerEvents = "";
					}
				} , 800)
				counter = 0;

			}

		}
	})
