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
let arr = [];
let arrTest = [];
let arrImg = [];
start_game.addEventListener('click' , function() {
	hardly = document.forms[0];
	for(var i = 0; i < 2; i++) {
		if(hardly[i].checked == true) {
			hardly_number =  hardly[i].value;
		}
	}
	for(var i = 2; i < 4; i++) {
		if(hardly[i].checked == true) {
			cell_number =  hardly[i].value;
		}
	}
	// console.log(hardly_number +"+"+ cell_number)

	//
	cell_set();
	function setImgs() {
		for(var i = 0; i < cell_number*6; i++) {
			let arrCounter = 0;
			var randomImg = Math.round(Math.random()*(cell_number*6/hardly_number-1));
			arr.push(randomImg);
			arr.forEach(function(item, j, arr) { //Перебирает массив чтобы не было больше двух одинаковых элементов
				if(randomImg == item) {
					arrCounter++;
					if(arrCounter > hardly_number) { // если добавляется третий, удаляем последний элемент массива и понижает счетчик на 1
						arr.pop();
						--i;
					}
				}
			})
		}
		console.log(arr)
	}
	setImgs();
		arr.forEach(function(item,i,arr) {
			var div = document.createElement('div');
			div.className = "img";
			div.innerHTML = `<div class=\"cell\">
								<img class=\"cell_front\" src=\"./img/front.jpg\" width="70px" height="70px" alt=\"\">
								<img class=\"cell_back rotate\" src=\'./img/${item}.jpg\' name="${item}" width="70px" height="70px">
							</div>`;
			game_area.appendChild(div.cloneNode(true))	
		})
	sec_start.classList.add('hide');
	sec_game.classList.remove('hide');
	cells = document.querySelectorAll('.cell img');

})

//установка количества полей
function cell_set() {
	if (cell_number == 6) {
		game_area.classList.add('grid_6')
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
			arrTest.push(x.parentNode.children[1].name);
			arrImg.push(x.parentNode);
			if (domId == x.parentNode._DOMIndexerID) {
				counter = 0;
				arrTest = [];
				arrImg = [];
				domId = x.parentNode._DOMIndexerID;
			} else {
				domId = x.parentNode._DOMIndexerID;
				counter++;
			}
			if(counter >= 2) {
				if(arrTest[0] == arrTest[1]) {
					arrImg[0].classList.add('openClass')
					arrImg[0].innerHTML = "";
					arrImg[1].classList.add('openClass')
					arrImg[1].innerHTML = "";
					counter = 0;
					arrTest = [];
					arrImg = [];
				} else {
					game_area.style.pointerEvents = "none";
					setTimeout(() => {
						for(var i = 0; i < 2*cell_number*6 ; i++) {
							cells[i].classList.remove('rotate');
							cells[i].classList.remove('rotate1');
							game_area.style.pointerEvents = "";
						}
					} , 800)
					counter = 0;
					arrTest = [];
					arrImg = [];
				}

			}

		}
	})


