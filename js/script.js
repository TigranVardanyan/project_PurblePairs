'use strict'
const start_game = document.querySelector(".start_game");
const sec_start = document.querySelector('.sec_start');
const sec_game = document.querySelector('.sec_game');
const game_area = document.querySelector('.game_area');
let cells;
let difficulty;
let difficulty_level;
let difficulty_level_value;
let arena;
let arena_type;
let arena_type_value;
let cell_number;
let counter = 0;
let domId;
let arr = [];
let arrTest = [];
let arrImg = [];
var clickWav = new Audio('data/click.wav');
var openWav = new Audio('data/open.wav');
start_game.addEventListener('click', function () {
  difficulty = document.querySelectorAll("[name=difficulty_level]");
	arena = document.querySelectorAll("[name=arena_type]");
  for (const val of difficulty) {
    if (val.checked) {
      difficulty_level = val.value;
      break;
    }
  }
  for (const val of arena) {
    if (val.checked) {
      arena_type = val.value;
      break;
    }
  }
  cell_set(arena_type);
  difficulty_set(difficulty_level);
  setImgs();
  arr.forEach(function (item, i, arr) {
    var div = document.createElement('div');
    div.className = "img";
    div.innerHTML = `<div class=\"cell\">
								<img class=\"cell_front\" src=\"./img/front.jpg\" width="70px" height="70px" alt=\"\">
								<img class=\"cell_back rotate\" src=\'./img/ (${item + 1}).jpg\' name="${item}" width="70px" height="70px">
							</div>`;
    game_area.appendChild(div.cloneNode(true))
  })
  sec_start.classList.add('hide');
  sec_game.classList.remove('hide');
  cells = document.querySelectorAll('.cell img');
})

//set game arena
function cell_set(arena_type) {
  switch (arena_type) {
    case ('arena_easy'):
      game_area.classList.add('grid_4');
      arena_type_value = [4, 6];
      break
    case ('arena_normal'):
      game_area.classList.add('grid_6');
      arena_type_value = [6, 8];
      break
    case ('arena_hard'):
      game_area.classList.add('grid_12');
      arena_type_value = [8, 12];
      break
    default:
      game_area.classList.add('grid_4');
  }
}

function difficulty_set(difficulty_level) {
	switch (difficulty_level) {
		case ('game_easy'):
			difficulty_level_value = 4;
			break
		case ('game_normal'):
			difficulty_level_value = 6;
			break
		case ('game_hard'):
			difficulty_level_value = 12;
			break
		default:
			difficulty_level_value = 4;
	}
}

function setImgs() {
  for (let i = 0; i < arena_type_value[0] * arena_type_value[1]; i++) {
    let arrCounter = 0;
    let randomImg = Math.round(Math.random() * (arena_type_value[0] * arena_type_value[1] / difficulty_level_value - 1));
    arr.push(randomImg);
    arr.forEach(function (item, j, arr) { //Перебирает массив чтобы не было больше двух одинаковых элементов
      if (randomImg == item) {
        arrCounter++;
        if (arrCounter > difficulty_level_value) { // если добавляется третий, удаляем последний элемент массива и понижает счетчик на 1
          arr.pop();
          --i;
        }
      }
    })
  }
  console.log(arr)
}

document.querySelector('.game_area').addEventListener('click', function (event) {
  var x = event.target;
  clickWav.play();
  if (x.nodeName == 'IMG') {
    x.parentNode.children[0].classList.toggle('rotate');
    x.parentNode.children[1].classList.toggle('rotate1');
    arrTest.push(x.parentNode.children[1].name);
    arrImg.push(x.parentNode);
    if (domId == x.parentNode._DOMIndexerID) {
      counter = 0;
      arrTest = [];
      arrImg = [];
      domId = x.parentNode._DOMIndexerID;
    }
    else {
      domId = x.parentNode._DOMIndexerID;
      counter++;
    }
    if (counter >= 2) {
      if (arrTest[0] == arrTest[1]) {
        game_area.style.pointerEvents = "none";
        setTimeout(() => {
          openWav.play();
          arrImg[0].classList.add('openClass')
          arrImg[0].innerHTML = "";
          arrImg[1].classList.add('openClass')
          arrImg[1].innerHTML = "";
          counter = 0;
          arrTest = [];
          arrImg = [];
          game_area.style.pointerEvents = "";
        }, 800)
      }
      else {
        game_area.style.pointerEvents = "none";
        setTimeout(() => {
          for (var i = 0; i < 2 * cell_number * 6; i++) {
            cells[i].classList.remove('rotate');
            cells[i].classList.remove('rotate1');
            game_area.style.pointerEvents = "";
          }
        }, 800)
        counter = 0;
        arrTest = [];
        arrImg = [];
      }
    }
  }
})


