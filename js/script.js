//За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
function getUserName() {
	const userName = prompt('What is your name?', '');
	if (userName === '' || userName === null) {
		getUserName();
	} else {
		alert(`Hello, ${userName}! How are you?`);
	}
}
getUserName();

//Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
//Спосіб №1
function calcNum(a, b, operator) {
	let result = 0;
	if (operator === '+') {
		result = a + b;
	} else if (operator === '-') {
		result = a - b;
	} else if (operator === '*') {
		result = a * b;
	} else if (operator === '/') {
		result = a / b;
	} else result = 'Something went wrong';
	console.log(result);
	//або вивести через alert
	alert(result);
}
calcNum(2, 3, '*');

//Спосіб №2
function calcNumbers(a, b, operator) {
	let result = 0;
	switch (operator) {
		case '+': result = a + b;
			break;
		case '-': result = a - b;
			break;
		case '*': result = a * b;
			break;
		case '/': result = a / b;
			break
		default: return 'Something went wrong';
	}
	console.log(result);
	//або вивести через alert
	alert(result);
}
calcNumbers(5, 4, '-');

//Спосіб №3
function getNumbers() {
	
	let firstNum;
	do{
		firstNum = prompt('Please write a first number', '');
	}
	while (firstNum === '' || firstNum === null || isNaN(firstNum));
	
	let secondNum;
	do{
		secondNum = prompt('Please write a second number', '');
	} 
	while (secondNum === '' || secondNum === null || isNaN(secondNum));
	
	let operator; 
	do{
		operator = prompt('Please write an operator', '');
	}
	while (operator === '' || operator === null);
	//Можна використати фунцкції написані вище
	calcNum(firstNum, secondNum, operator);
	calcNumbers(firstNum, secondNum, operator);
}
getNumbers();

//Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
function getValues() {
	const firstValue = prompt('Please write a first value', '');
	const secondValue = prompt('Please write a second value', '');
	if (firstValue === secondValue) {
		return true;
	} else {
		return false;
	}
}
console.log(getValues());

//Визначити середнє арифметичне трьох чисел
//Спосіб №1
function calcAverage(num1, num2, num3) {
	const sum = num1 + num2 + num3;
	const average = sum / 3;
	console.log(average);
}
calcAverage(2, 6, 4);

//Спосіб №2
const numArray = [3, 4, 5];
function calculateAverage(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum / array.length;
}
console.log(calculateAverage(numArray));

//Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)
const number = 12345;
let splitedNumbers = '';
function splitNum(num) {
	for (let i = num; i > 0; i = Math.floor(i / 10)) {
		const splitedNum = i % 10;
		splitedNumbers = splitedNum + ' ' + splitedNumbers;
	}
	return splitedNumbers;
}
console.log(splitNum(number));