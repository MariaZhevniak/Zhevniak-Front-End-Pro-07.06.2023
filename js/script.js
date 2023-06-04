//Вивести на сторінку в один рядок через кому числа від 10 до 20
function showNumbers() {
	const numbers = [];

	for (let i = 10; i <= 20; i++) {

		numbers.push(i);

	}

	return numbers;
}
alert(showNumbers());

//Вивести квадрати чисел від 10 до 20
function showSquaredNumbers() {
	const squaredNumbers = [];

	for (let i = 10; i <= 20; i++) {

		squaredNumbers.push(i ** 2);

	}

	return squaredNumbers;
}
alert(showSquaredNumbers());

// Вивести таблицю множення на 7
function multBySeven() {
	const multTable = [];

	for (let i = 1; i <= 10; i++) {

		multTable.push(i * 7);

	}

	return multTable;
}
alert(multBySeven());

//Знайти суму всіх цілих чисел від 1 до 15
function sumNum() {
	let sum = 0;

	for (let i = 1; i <= 15; i++) {

		sum += i;

	}

	return `Sum from 1 to 15 = ${sum}`;
}
alert(sumNum());

//Знайти добуток усіх цілих чисел від 15 до 35
//1
function multiplyNumbers() {
	let result = BigInt(1);

	for (let i = 15n; i <= 35n; i++) {

		result *= i;

	}

	return `Product from 15 to 35 = ${result}`;
}
alert(multiplyNumbers());

//2
function multiplyNum(start, end) {
	let result = BigInt(1);

	if (start === end) {

		return BigInt(start);

	} else {

		return result = BigInt(start) * multiplyNum(start + 1, end);

	}
}
alert(multiplyNum(15, 35));

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
function showAverage() {
	let sum = 0;
	let count = 0;

	for (let i = 1; i <= 500; i++) {

		sum += i;
		count++;

	}
	const average = sum / count;

	return `Average from 1 to 500 = ${average}`;
}
alert(showAverage());

//Вивести суму лише парних чисел у діапазоні від 30 до 80
function pairNumbers() {
	let sum = 0;

	for (let i = 30; i <= 80; i++) {

		if (i % 2 == 0) {

			sum += i;

		}
	}

	return `Sum of pair numbers from 30 to 80 = ${sum}`;
}
alert(pairNumbers());

//Вивести всі числа в діапазоні від 100 до 200
function showNum() {
	const numArr = [];

	for (let i = 100; i <= 200; i++) {

		numArr.push(i);

	}
	return numArr;
}
alert(showNum());

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
function showDividers(number) {

	const dividersArr = [];
	let count = 0;
	let sum = 0;

	for (let i = 1; i <= number; i++) {

		if (number % i == 0) {

			dividersArr.push(i);
			//Визначити кількість його парних дільників
			if (i % 2 == 0) {

				count++;
				//Знайти суму його парних дільників
				sum += i;

			}
		}
	}

	alert(`All dividers: ${dividersArr}`);
	alert(`Count of pair dividers: ${count}`);
	alert(`Sum of pair dividers: ${sum}`);
}
showDividers(8);

//Надрукувати повну таблицю множення від 1 до 10
function showMultTable() {
	const arr = []
	for (let i = 1; i <= 10; i++) {

		for (let j = 1; j <= 10; j++) {

			arr.push(j * i);

		}
	}
	return arr;
}
console.log(showMultTable());