// function setBg () {
// 	var arr = [];
// 	var count = 0;
// 	for(i = 1; i!=37; i++) {
// 		var rand = Math.round(Math.random()*17)+1;
// 		arr.push(rand);
// 		// arr.forEach(function(item, i, arr) {
// 		// 	if(item == rand) {
// 		// 		count++;
// 		// 		if(count = 2) {
// 		// 			rand = "";
// 		// 		}
// 		// 	}
// 		// })
// 		document.getElementById('window'+i).style.backgroundImage = "url('img/"+rand+".jpg')";
// 		arr.forEach(function(item, j, arr) {
// 			// alert(j+':'+item);
// 		});
// 	}
// };
var arr = [];
var count = 0;
function randomiser() {
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
function cl(n) {
	elem = document.getElementById('window'+n); // находит все елементы с id window(n)
	var classIsSet = elem.classList.contains('reverse');  //classList.contains('Z') ишет класс по имени Z у elem
	if(classIsSet == false) { //проверяет наличие класса revers
		elem.classList.add('reverse'); //добавляет при отсуствовании
		count2++; //+1 к счетчику открытых карточек 
	}
	else {
		elem.classList.remove('reverse'); //или удаляет при присутствовании класса
		count2--; //-1 с счетчику открытых карточек
	}
	if(count2 == 2) {
		document.getElementById('Container').style.pointerEvents = 'none'; // после открытых 2 карточек, непозвольяет больше открывать карточки
		setTimeout(function() {
			for(i = 1; i != 37 ; i++) {
				document.getElementById('window'+i).classList.remove('reverse');
			}
			document.getElementById('Container').style.pointerEvents = 'auto'; //снимает ограничение

		} , 1500)
		count2 = 0;
	}
}