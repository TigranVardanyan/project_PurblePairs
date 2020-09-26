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
let arena_cells_number;
let counter = 0;
let domId;
let arr = [];
let arrTest = [];
let arrImg = [];
var clickWav = new Audio('data/click.wav');
var openWav = new Audio('data/open.wav');

document.querySelector('#game-settings').addEventListener('submit', (e) => {
  e.preventDefault()
})

document.querySelector('#game_restart').addEventListener('click', () => {
  difficulty = 0;
  difficulty_level = 0;
  difficulty_level_value = 0;
  arena = 0;
  arena_type = 0;
  arena_type_value = 0;
  counter = 0;
  domId = null;
  arr = [];
  arrTest = [];
  arrImg = [];
  game_area.innerHTML = null;
  for (var i = 0; i < 2 * arena_cells_number; i++) {
    cells[i].classList.remove('rotate');
    cells[i].classList.remove('rotate1');
  }
  cells = 0;
  sec_start.classList.remove('hide');
  sec_game.classList.add('hide');
})
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
  arena_cells_number = arena_type_value[0] * arena_type_value[1]
  setImgs();
  arr.forEach(function (item, i, arr) {
    var div = document.createElement('div');
    div.className = "img";
    div.innerHTML = `<div class=\"cell\" data-imageid="${item}" data-cellId="${i}">
								<img class=\"cell_front\" src=\"./img/front.jpg\" alt=\"\">
								<img class=\"cell_back rotate\" src=\'./img/ (${item + 1}).jpg\' name="${item}">
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
			difficulty_level_value = 8;
			break
		case ('game_normal'):
			difficulty_level_value = 6;
			break
		case ('game_hard'):
			difficulty_level_value = 4;
			break
		default:
			difficulty_level_value = 4;
	}
}

function setImgs() {
  for (let i = 0; i < arena_cells_number; i++) {
    let arrCounter = 0;
    let randomImg = Math.round(Math.random() * (arena_cells_number / difficulty_level_value - 1));
    arr.push(randomImg);
    arr.forEach(function (item, j, arr) {
      if (randomImg == item) {
        arrCounter++;
        if (arrCounter > difficulty_level_value) {
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
  if (x.nodeName == 'IMG') {
    counter++;
    clickWav.play();
    x.parentNode.children[0].classList.toggle('rotate');
    x.parentNode.children[1].classList.toggle('rotate1');

    if (domId == x.parentNode.attributes[2].value) {//click to close image

    }
    else /* click to open image */{
      if (counter == 2) /* compare images */{
        arrTest.push(x.parentNode.children[1].name);
        arrImg.push(x.parentNode);
        domId = x.parentNode.attributes[2].value
        if (arrTest[0] === arrTest[1]) /* equal */{
          counter = 0;
          arrTest = [];
          game_area.style.pointerEvents = "none";
          setTimeout(() => {
            openWav.play();
            arrImg[0].classList.add('openClass')
            arrImg[0].innerHTML = "";
            arrImg[1].classList.add('openClass')
            arrImg[1].innerHTML = "";
            arrImg = [];
            game_area.style.pointerEvents = "";
          }, 800)
        }
        else /* equal */{
          game_area.style.pointerEvents = "none";
          counter = 0;
          arrTest = [];
          domId = null;
          const arrImgNew = arrImg.concat();
          arrImg = [];
          setTimeout(() => {
            arrImgNew.forEach((img) => {
              img.children[0].classList.remove('rotate', 'rotate1');
              img.children[1].classList.remove('rotate', 'rotate1');
            })
            game_area.style.pointerEvents = "";
          }, 800)
        }
      }
      else if (counter == 1) {
        arrTest.push(x.parentNode.children[1].name);
        arrImg.push(x.parentNode);
        domId = x.parentNode.attributes[2].value
      }
    }

    if (counter == 2) {
      if (arrTest[0] == arrTest[1]) {
        counter = 0;
        arrTest = [];
        game_area.style.pointerEvents = "none";
        setTimeout(() => {
          openWav.play();
          arrImg[0].classList.add('openClass')
          arrImg[0].innerHTML = "";
          arrImg[1].classList.add('openClass')
          arrImg[1].innerHTML = "";
          arrImg = [];
          game_area.style.pointerEvents = "";
        }, 800)
      }
      else {
        game_area.style.pointerEvents = "none";
        counter = 0;
        arrTest = [];
        domId = null;
        const arrImgNew = arrImg.concat();
        arrImg = [];
        setTimeout(() => {
          arrImgNew.forEach((img) => {
            img.children[0].classList.remove('rotate', 'rotate1');
            img.children[1].classList.remove('rotate', 'rotate1');
          })
          game_area.style.pointerEvents = "";
        }, 800)
      }
    }
    else if (counter == 1) {
      arrTest.push(x.parentNode.children[1].name);
      arrImg.push(x.parentNode);
      domId = x.parentNode.attributes[2].value
    }
    else if (counter == 0) {
      arrTest.push(x.parentNode.children[1].name);
      arrImg.push(x.parentNode);
      if (domId == x.parentNode.attributes[2].value) {
        arrTest = [];
        arrImg = [];
        domId = x.parentNode.attributes[2].value;
      }
    }

    if (domId == x.parentNode.attributes[2].value) {
      counter <= 0 ? counter = 0 : counter--;
      counter == 0 ? arrImg = [] : arrImg
      arrTest = [];
      domId = x.parentNode.attributes[2].value;
    }
    else {
      domId = x.parentNode.attributes[2].value;
      counter++;
    }
    if (counter >= 2) {
      //if (arrTest[0] == arrTest[1]) {
      //  counter = 0;
      //  arrTest = [];
      //  game_area.style.pointerEvents = "none";
      //  setTimeout(() => {
      //    openWav.play();
      //    arrImg[0].classList.add('openClass')
      //    arrImg[0].innerHTML = "";
      //    arrImg[1].classList.add('openClass')
      //    arrImg[1].innerHTML = "";
      //    arrImg = [];
      //    game_area.style.pointerEvents = "";
      //  }, 800)
      //}
      //else {
      //  game_area.style.pointerEvents = "none";
      //  counter = 0;
      //  arrTest = [];
      //  domId = null;
      //  const arrImgNew = arrImg.concat();
      //  arrImg = [];
      //  setTimeout(() => {
      //    arrImgNew.forEach((img) => {
      //      img.children[0].classList.remove('rotate', 'rotate1');
      //      img.children[1].classList.remove('rotate', 'rotate1');
      //    })
      //    game_area.style.pointerEvents = "";
      //  }, 800)
      //}
    }
  }
})


