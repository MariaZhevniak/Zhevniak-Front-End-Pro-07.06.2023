//Дано два різні числа. Визначити, яке з них більше, а яке менше
//Спосіб 1
function compareNumbers(a, b) {

	return a > b ? `${a} більше ніж ${b}` : `${b} більше ніж ${a}`;
}
console.log(compareNumbers(1, 3));

//Спосіб 2
function compareNum(a, b) {

	if (a > b) {

		return `${a} більше ніж ${b}`;

	} else {

		return `${b} більше ніж ${a}`;
	}
}
console.log(compareNum(4, 3));

//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
//Спосіб 1
function compareDistance(km, ft) {

	return km * 1000 < ft * 0.305 ? `${km} km is less` : `${ft} ft is less`;
}
console.log(compareDistance(1, 12));

//Спосіб 2
function compareDist(km, ft) {

	if (km * 1000 < ft * 0.305) {

		return `${km} km is less`;

	} else {

		return `${ft} ft is less`;
	}
}
console.log(compareDist(1, 4020));

//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
//1
function compareDividers(a, b) {
	let result1;
	let result2;

	a % b == 0 ? result1 = `${b} is a divider of ${a}` : result1 = `${b} is not a divider of ${a}`;

	b % a == 0 ? result2 = `${a} is a divider of ${b}` : result2 = `${a} is not a divider of ${b}`;

	console.log(result1, result2);
}
compareDividers(5, 10);

//2
function compDividers(a, b) {
	let result1;
	let result2;

	if (a % b == 0) {

		result1 = `${b} is a divider of ${a}`;

	} else {

		result1 = `${b} is not a divider of ${a}`;
	}

	if (b % a == 0) {

		result2 = `${a} is a divider of ${b}`;

	} else {

		result2 = `${a} is not a divider of ${b}`;
	}

	return result1 + ' ' + result2;
}
console.log(compDividers(3, 10));

//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
//1
function showLastDigit(number) {
	let digit = number % 10;

	return (digit % 2 == 0) ? `${digit} is paired` : `${digit} is odd`;
}
console.log(showLastDigit(437789));

//2
function showDigit(number) {
	let digit = number % 10;

	if (digit % 2 == 0) {

		return `${digit} is paired`;

	} else {

		return `${digit} is odd`;

	}
}
console.log(showDigit(437788));

//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
//1
function compareDigits(number) {

	return (Math.floor(number / 10) > number % 10) ? `${Math.floor(number / 10)} is greater` : `${number % 10} is greater`;

}
console.log(compareDigits(87));

//2
function compareDigits(number) {

	if (Math.floor(number / 10) > number % 10) {

		return `${Math.floor(number / 10)} is greater`;

	} else {

		return `${number % 10} is greater`;

	}
}
console.log(compareDigits(89));

//Дано тризначне число
//Ініціалізуємо усі функції для цього числа
function init(number) {
	const sum = isDigitsSumPaired(number);
	isSumMultOfFive(sum);
	isProductGreater(number);
}
init(345);

//Визначити чи є парною сума його цифр.
function isDigitsSumPaired(number) {
	let sum = 0;
	let result;

	for (let i = number; i > 0; i = Math.floor(i / 10)) {

		sum += i % 10;

	}

	if (sum % 2 == 0) {

		result = `${sum} is paired`;

	} else {

		result = `${sum} is not paired`;

	}

	console.log(result);
	return sum;
}

//Визначити, чи кратна сума цифр п'яти.
function isSumMultOfFive(sum) {
	let result;

	if (sum % 5 == 0) {

		result = `${sum} is a multiple of five`;

	} else {

		result = `${sum} is not a multiple of five`;

	}

	console.log(result);
}

//Визначити чи є добуток його цифр більше 100.
function isProductGreater(number) {
	let product = 1;
	let result;

	for (let i = number; i > 0; i = Math.floor(i / 10)) {

		product *= i % 10;

	}
	if (product > 100) {

		result = `${product} greater than 100`;

	} else {

		result = `${product} is not greater than 100`;

	}

	console.log(result)
}


//Дано тризначне число.
//Чи правда, що всі цифри однакові?
function areDigitsSame(number) {
	const digits = String(number).split('');

	let allDigitsSame = 'true, all digits in number are the same';
	let twoDigitsSame = 'false, number does not have a pair of identical digits';

	for (let i = 0; i < digits.length - 1; i++) {

		if (digits[i] !== digits[i + 1]) {

			allDigitsSame = 'false, all digits in number are not the same';
			break;

		}
	}

	//Чи є серед цифр цифри однакові?
	for (let i = 0; i < digits.length - 1; i++) {

		if (digits.indexOf(digits[i], i + 1) !== -1) {

			twoDigitsSame = 'true, number has a pair of identical digits';
			break;

		}
	}

	console.log(allDigitsSame, twoDigitsSame);
}
areDigitsSame(222);
areDigitsSame(223);
areDigitsSame(233);
areDigitsSame(232);
areDigitsSame(234);

//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
function isNumberMirror(number) {
	const digits = String(number).split('');

	for (let i = 0, j = digits.length - 1; i < j; i++, j--) {

		if (digits[i] !== digits[j]) {

			return 'false, number is not mirrored';

		}
	}

	return 'true, number is mirrored';
}

console.log(isNumberMirror(123321));
console.log(isNumberMirror(147741));