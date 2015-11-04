console.log('link check');

// var allSquare = 
// 	document.querySelectorAll('.square');
// 	console.log(allSquare)


var box1 = document.querySelector('.one.square');
var box2 = document.querySelector('.two.square');
var box3 = document.querySelector('.three.square');
var box4 = document.querySelector('.four.square');
var box5 = document.querySelector('.five.square');
var box6 = document.querySelector('.six.square');
var box7 = document.querySelector('.seven.square');
var box8 = document.querySelector('.eight.square');
var box9 = document.querySelector('.nine.square');
var whosTurn = document.querySelector('.whosTurn');


var winningCombos = function(){
	if (box1.classList.contains('x-box') && box2.classList.contains('x-box') && box3.classList.contains('x-box')){
		return window.alert("X Wins") 
	} else if (box4.classList.contains('x-box') && box5.classList.contains('x-box') && box6.classList.contains('x-box')){
		return window.alert("X Wins");
	} else if (box7.classList.contains('x-box') && box8.classList.contains('x-box') && box9.classList.contains('x-box')){
		return window.alert("X Wins");
	} else if (box1.classList.contains('x-box') && box4.classList.contains('x-box') && box7.classList.contains('x-box')){
		return window.alert("X Wins");
	} else if (box2.classList.contains('x-box') && box5.classList.contains('x-box') && box8.classList.contains('x-box')){
		return window.alert("X Wins");
	} else if (box3.classList.contains('x-box') && box6.classList.contains('x-box') && box9.classList.contains('x-box')){
		return window.alert("X Wins");
	} else if (box1.classList.contains('x-box') && box5.classList.contains('x-box') && box9.classList.contains('x-box')){
		return window.alert("X Wins");
	} else if (box3.classList.contains('x-box') && box5.classList.contains('x-box') && box7.classList.contains('x-box')){
		return window.alert("X Wins");
	} else if (box1.classList.contains('o-box') && box2.classList.contains('o-box') && box3.classList.contains('o-box')){
		return window.alert("O Wins");
	} else if (box4.classList.contains('o-box') && box5.classList.contains('o-box') && box6.classList.contains('o-box')){
		return window.alert("O Wins");
	} else if (box7.classList.contains('o-box') && box8.classList.contains('o-box') && box9.classList.contains('o-box')){
		return window.alert("O Wins");
	} else if (box1.classList.contains('o-box') && box4.classList.contains('o-box') && box7.classList.contains('o-box')){
		return window.alert("O Wins");
	} else if (box2.classList.contains('o-box') && box5.classList.contains('o-box') && box8.classList.contains('o-box')){
		return window.alert("O Wins");
	} else if (box3.classList.contains('o-box') && box6.classList.contains('o-box') && box9.classList.contains('o-box')){
		return window.alert("O Wins");
	} else if (box1.classList.contains('o-box') && box5.classList.contains('o-box') && box9.classList.contains('o-box')){
		return window.alert("O Wins");
	} else if (box3.classList.contains('o-box') && box5.classList.contains('o-box') && box7.classList.contains('o-box')){
		return window.alert("O Wins");
	} else{
	return console.log("The game isn't over yet")
}
};






var move = 0;


var makeMark = function(event){
	
	var target = event.target;
	if (move % 2 === 0){
		
		target.textContent = "X"
		target.classList.add('x-box')
		target.removeEventListener('click', makeMark)
		winningCombos()
	} else {
		target.textContent = "O"
		target.classList.add('o-box')
		target.removeEventListener('click', makeMark)
		winningCombos()
	}
	move++;
};


box1.addEventListener('click', makeMark);
box2.addEventListener('click', makeMark);
box3.addEventListener('click', makeMark);
box4.addEventListener('click', makeMark);
box5.addEventListener('click', makeMark);
box6.addEventListener('click', makeMark);
box7.addEventListener('click', makeMark);
box8.addEventListener('click', makeMark);
box9.addEventListener('click', makeMark);



//reset button

var resetButton = document.querySelector('#reset-button')
var reset = function(){
	document.querySelector('#reset-button')
	location.reload(true)
	
};

resetButton.addEventListener('click', reset)

//bonus
//find a winner









