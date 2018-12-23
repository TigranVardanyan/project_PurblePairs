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
		arr.forEach(function(item, j, arr) {
			if(rand == item) {
				count++;
				if(count > 2) {
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
		elem.style.backgroundImage = "url('img/"+Item+".jpg')";
	})
}

