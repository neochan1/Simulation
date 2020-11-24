function getStyle(element, attr) {
	if (element.currentStyle) {
		return element.currentStyle[attr];
	} else {
		return getComputedStyle(element, false)[attr];
	}
}

function move(obj, speed, target, attr, callback) {
	// var timer;
	clearInterval(obj.timer);
	var current = parseInt(getStyle(obj, attr));
	if (current > target) {
		speed = -speed;
	}
	obj.timer = setInterval(function() {
		//获取box当前的left值
		var oldv = parseInt(getStyle(obj, attr));

		var newv = oldv + speed;

		//在当前值的基础上增加
		if ((newv < target && speed < 0) || (newv > target && speed > 0)) {
			newv = target;
		}
		obj.style.left = newv + 'px';
		if (newv == target) {
			clearInterval(obj.timer);
			console.log(current);
			callback && callback();
		}
	}, 10)
}

function autoPrint(txt, speed) {
	if (typeof txt !== String) {
		txt.toString();
	}
	var arr = txt.split('');
	var arr1 = arr.slice();
	var index = 0;
	var text = document.getElementById('text');
	var timer = setInterval(function() {
		text.innerHTML += arr.shift();
		index++;
		if (index == arr1.length) {
			clearInterval(timer);
		}
	}, speed);
}
