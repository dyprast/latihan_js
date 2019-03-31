document.getElementById('btn-box1').onclick = function () {
	var box1 = document.getElementById('box1');

	box1.style.backgroundColor = '#b2bec3';
	box1.style.color = '#2d3436';
};

document.getElementById('box2').onmouseover = function () {
	updateBox2('Thank You');
};

document.getElementById('box2').onmouseout = function () {
	updateBox2('Mouse over me');
};

document.getElementById('btn-box3').onclick = changeImageBox3;
document.getElementById('btn-box4').onclick = changeParagraphColor;
var btnAction = document.getElementsByClassName('btn-action');
for (var i = 0; i < btnAction.length; i++) {
	btnAction[i].onclick = changeBtnActionText;
}

function updateBox2(message) {
	var box2 = document.getElementById('box2');

	box2.innerHTML = message;
	box2.classList.toggle('yellow');
}

function changeImageBox3() {
	var imgBox3 = document.getElementById('img-box3');

	imgBox3.src = 'assets/img/dom2.jpg';
}

function changeParagraphColor() {
	var paragraphBox = document.getElementsByClassName('paragraph-box');
	for (var i = 0; i < paragraphBox.length; i++) {
		var currentParagraphBox = paragraphBox[i];
		currentParagraphBox.classList.add('active');
	}
}

function changeBtnActionText() {
	var currentBtn = this;
	currentBtn.innerHTML = 'Button Clicked';
}