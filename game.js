var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset= document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		if(i<3){
			squares[i].style.backgroundColor = colors[i];
		} else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

reset.addEventListener("click", function(){
	//generate new clors
	colors = generateRandomColors(colors.length);
	//pick a random number from array
	pickedColor = pickColor();
	//change rgb display
	colorDisplay.textContent = pickedColor;

	message.textContent = "";
	//change quare color
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

	if(reset.textContent === "Play Again?"){
		reset.textContent = "New Game";
	}
});

for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(pickedColor === clickedColor){
			message.textContent = "Correct!";
			changeColor(pickedColor);
			reset.textContent = "Play Again?";
		} else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	h1.style.backgroundColor = color;
	message.style.color = color;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	//get random color and push it into array
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
