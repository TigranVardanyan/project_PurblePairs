var arr = [];
var count = 0;
document.getElementById('Container').style.pointerEvents = 'none';
function randomiser() {
	document.getElementById('Container').style.pointerEvents = 'auto';
	document.getElementById('randomiser').style.pointerEvents = 'none';
	var hh, gg, dd, aa;
	for(var i = 1; i!=37; i++) {
		var rand = Math.round(Math.random()*17)+1;
		arr.push(rand);
		count = 0;
		arr.forEach(function(item, j, arr) { //Перебирает массив чтобы не было больше двух одинаковых элементов
			if(rand == item) {
				count++;
				if(count > 2) { // если добавляется третий, удаляем последний элемент массива и понижает счетчик на 1
					arr.pop();
					--i;
				}
			}
		})
	}
	var i = 0;
	arr.forEach(function(Item, J, Arr) {
		i++;
		elem = document.getElementById('window'+i); 
		elem.style.backgroundImage = "url('img/"+Item+".jpg')"; //Берет из масива цифры и получает изображения
		elem.classList.add(Item); // Добавляет класс (только цифры) каждой карточке
	})
	
}

var count2 = 0; 
var arrTest = [];
function cl(n) {
	elem = document.getElementById('window'+n); // находит все елементы с id window(n)
	var classIsSet = elem.classList.contains('reverse');  //classList.contains('Z') ишет класс по имени Z у elem
	//var cardClass = elem.attr('class');
	let elemBack = document.getElementsByClassName('back');
	var cardClass = elem.className; 
	if(cardClass.length == 7) {
		cardClass = cardClass[6];
	}
	else if(cardClass.length == 8) {
		cardClass = cardClass[6]+cardClass[7];
	}
	if(classIsSet == false) { //проверяет наличие класса revers
		elem.classList.add('reverse'); //добавляет при отсуствовании
		count2++; //+1 к счетчику открытых карточек 
		arrTest.push(cardClass);
		elemBack[n-1].classList.add('backReverse');
	}
	else {
		elem.classList.remove('reverse'); //или удаляет при присутствовании класса
		count2--; //-1 с счетчику открытых карточек
		arrTest.pop();
		elemBack[n-1].classList.remove('backReverse');
	}
	if(count2 == 2) {
		if(arrTest[0] == arrTest[1]) {
			//alert('true');
			x = document.getElementsByClassName(arrTest[0]);
			x[0].style.backgroundImage = "";
			x[0].style.backgroundColor = "black";
			x[0].id = 'opened';
			x[1].style.backgroundImage = "";
			x[1].style.backgroundColor = "black";
			x[1].id = 'opened';

		}
		document.getElementById('Container').style.pointerEvents = 'none'; // после открытых 2 карточек, непозвольяет больше открывать карточки
		setTimeout(function() {
			for(i = 1; i != 37 ; i++) {
				if(document.getElementById('window'+i)) {
					document.getElementById('window'+i).classList.remove('reverse');
					elemBack[i-1].classList.remove('backReverse');
				}
			}
			document.getElementById('Container').style.pointerEvents = 'auto'; //снимает ограничение
			arrTest = [];
		} , 700)
		count2 = 0;

	}
	//alert(arrTest);
}


/*************/

// function soundClick() {
//   var audio = new Audio(); // 
//   audio.src = 'data/1.mp3'; //     тест
//   audio.autoplay = true; // 
// }