//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const arr = [3, 5, 'a', 'b', 'c', 4];

const getAverage = (arr, index = 0, sum = 0, count = 0) => {
	if(index >= arr.length) {
		return sum / count;
	}

	if(typeof arr[index] === 'number') {
		return getAverage(arr, index + 1, sum + arr[index], count + 1);
	}

	return getAverage(arr, index + 1, sum, count);
};
const average = getAverage(arr);
console.log(average);


//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const getNumber = () => {
	const num = prompt('Write a number', '');
	if(num === '' || num === null || num === undefined || isNaN(num)) {
		return getNumber();
	} else {
		return num;
	}
};

const x = getNumber();

const getOperator = () => {
	const operator = prompt('Write an operator', '');
	if(operator === '' || operator === null || operator === undefined) {
		return getOperator;
	} else {
		return operator;
	}
};
const znak = getOperator();

const y = getNumber();

const doMath = (x, znak, y) => {
	switch(znak) {
		case '+':  console.log(x + y);
		break;
		case '-': console.log(x - y);
		break;
		case '/': console.log(x / y);
		break;
		case '*': console.log(x * y);
		break;
		case '%': console.log(x % y);
		break;
		case '^': console.log(x ** y);
		break;
		default: console.log('Something went wrong');
		break; 
	}
}
doMath(x, znak, y);

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
const getLength = () => {
		const length = prompt('Write length of array', '');
		if(length === ''|| length === null || length === undefined || isNaN(length)) {
			return getLength();
		} else {
			return length;
		}
};
const getElement = () => {
		const element = prompt('Write element of array', '');
		if(element === ''|| element === null || element === undefined) {
			return getElement();
		} else {
			return element;
		}
};
const createInnerArr = () => {
	const innerArr = [];
	const innerLength = getLength();
	for(i = 0; i < innerLength; i++) {
		const arrElement = getElement();
		innerArr.push(arrElement);
	}
	return innerArr;
}

const createOuterArr = () => {
	const outerArr = [];
	const outerLength = getLength();
	for(let i = 0; i < outerLength; i++) {
		const innerArr = createInnerArr();
		outerArr.push(innerArr);
	}
	return outerArr;
}
const outerArr = createOuterArr();
console.log(outerArr);

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
const getString = () => {
		const userString = prompt('Write string', '');
		if(userString === ''|| userString === null || userString === undefined) {
			return getString();
		} else {
			return userString;
		}
};

const string = getString();

const getLetterArr = () => {
	const arr = [];
		const letter = prompt('Write a letter', '');
		if(letter === ''|| letter === null || letter === undefined) {
			return arr;
		} else {
			arr.push(letter);
			return arr.concat(getLetterArr());
		}
};

const letterArr = getLetterArr();

const removeLetter = (string, arr) => {
	if (arr.length === 0) {
		return string;
	}

	const letter = arr[0];
	const index = string.indexOf(letter);

	if (index !== -1) {
		const result = string.slice(0, index) + string.slice(index + 1);
		return removeLetter(result, arr);
	}

	return removeLetter(string, arr.slice(1));
};

const newString = removeLetter(string, letterArr);
console.log(newString);
