document.getElementById('form-calculate').addEventListener('submit', calculate);

function calculate(e){ // e = event
	var firstNumber = document.getElementById('first-number').value.trim(); // trim() Menghilangkan spasi
	var secondNumber = document.getElementById('second-number').value.trim();
	var actionType = document.getElementById('action-type').value;
	var result = document.getElementById('result');

	e.preventDefault(); // Untuk mencegah load submit form
	if(firstNumber == "") alert('First Number Required');
	else if(isNaN(parseInt(firstNumber))) alert('First number must be a number');
	else if(secondNumber == "") alert ('Last Number Required');
	else if(isNaN(parseInt(secondNumber))) alert('Second number must be a number');
	else if(actionType == "") alert ('You Must Select An Action');
	else{
		switch (actionType){
			case 'add':
			result.innerHTML = 'Result: ' + add(firstNumber, secondNumber);
			break;

			case 'min':
			result.innerHTML = 'Result: ' + min(firstNumber, secondNumber);
			break;

			case 'times':
			result.innerHTML = 'Result: ' + times(firstNumber, secondNumber);
			break;

			case 'divide':
			result.innerHTML = 'Result: ' + divide(firstNumber, secondNumber);
			break;

			case 'modulus':
			result.innerHTML = 'Result: ' + modulus(firstNumber, secondNumber);
			break;

			default:
				alert('Invalid action');
		}
	}
}
function add(firstNumber, secondNumber){
	return parseInt(firstNumber) + parseInt(secondNumber);
}
function min(firstNumber, secondNumber){
	return firstNumber - secondNumber;
}
function times(firstNumber, secondNumber){
	return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber){
	return firstNumber / secondNumber;
}
function modulus(firstNumber, secondNumber){
	return firstNumber % secondNumber;
}
