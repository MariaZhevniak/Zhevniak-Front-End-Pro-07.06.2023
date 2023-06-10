//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//Знайти суму та кількість позитивних елементів.
//1
const getLength = (arr) => {

	return arr.filter((number) => number > 0).length;

};

console.log(getLength(arr));

const calcSum = (arr) => {

	return arr.filter((number) => number > 0).reduce((sum, current) => sum + current, 0);

};

console.log(calcSum(arr));

//2Через цикл

const showLength = (arr) => {
	let length = 0;

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] > 0) {

			length++;
		}
	}

	return length;
};

console.log(showLength(arr));

const posFilter = (arr) => {
	const filteredArr = [];

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] > 0) {

			filteredArr.push(arr[i]);
		}
	}

	return filteredArr;
};

const reduceFunction = (reducer, initial, arr) => {
	let acc = initial;

	for(let i = 0; i < arr.length; i++) {

		acc = reducer(acc, arr[i]);
	}

	return acc;
};

const posSum = reduceFunction((acc, number) => acc + number, 0, posFilter(arr));
console.log(posSum);

//Знайти мінімальний елемент масиву та його порядковий номер.
//1
const min = (arr) => {

	return arr.reduce((acc, number) => Math.min(acc, number));

};

console.log(min(arr), arr.indexOf(min(arr)));

//2
const minNum = function(arr) {
	let min = 0;

for(let number of arr) {

	min = Math.min(min, number);
}	

return min;
};

console.log(minNum(arr), arr.indexOf(minNum(arr)));

//Знайти максимальний елемент масиву та його порядковий номер.
//1
const max = (arr) => {

	return arr.reduce((acc, number) => Math.max(acc, number));

};

console.log(max(arr), arr.indexOf(max(arr)));

//2
const maxNum = function(arr) {
	let max = 0;

	for(let number of arr) {

		max = Math.max(max, number);
	}

	return max;
};

console.log(maxNum(arr), arr.indexOf(maxNum(arr)));

//Визначити кількість негативних елементів.
//1
const negativeLength = (arr) => {

	return arr.filter((number) => number < 0).length;

};

console.log(negativeLength(arr));

//2
const negLength = (arr) => {
	let length = 0;

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] < 0) {

			length++;
		}
	}

	return length;
};

console.log(negLength(arr));

//Знайти кількість непарних позитивних елементів.
//1
const oddPositiveLength = (arr) => {

	return arr.filter((number) => number > 0 && number % 2 !== 0).length;

};

console.log(oddPositiveLength(arr));

//2
const oddPosLength = (arr) => {
	let length = 0;

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] > 0 && arr[i] % 2 !== 0) {

			length++;
		}
	}

	return length;
};
console.log(oddPosLength(arr));

//Знайти кількість парних позитивних елементів.
//1
const pairPositiveLength = (arr) => {

	return arr.filter((number) => number > 0 && number % 2 === 0).length;

};

console.log(pairPositiveLength(arr));

//2
const pairPosLength = (arr) => {
	let length = 0;

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] > 0 && arr[i] % 2 === 0) {

			length++;
		}
	}

	return length;
};

console.log(pairPosLength(arr));

//Знайти суму парних позитивних елементів.
//1
const pairPositiveSum = (arr) => {

	return arr.filter((number) => number > 0 && number % 2 === 0)
	.reduce((sum, current) => sum + current, 0);

};

console.log(pairPositiveSum(arr));

//2
const pairPosFilter = (arr) => {
	const filteredArr = [];

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] > 0 && arr[i] % 2 === 0) {

			filteredArr.push(arr[i]);
		}
	}

	return filteredArr;
};

const pairPosSum = reduceFunction((acc, number) => acc + number, 0, pairPosFilter(arr));
console.log(pairPosSum);

//Знайти суму непарних позитивних елементів.
//1
const oddPositiveSum = (arr) => {

	return arr.filter((number) => number > 0 && number % 2 !== 0)
.reduce((sum, current) => sum + current)

};

console.log(oddPositiveSum(arr));

//2
const oddPosFilter = (arr) => {
	const filteredArr = [];

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] > 0 && arr[i] % 2 !== 0) {

			filteredArr.push(arr[i]);
		}
	}

	return filteredArr;
};

const oddPosSum = reduceFunction((acc, number) => acc + number, 0, oddPosFilter(arr));
console.log(oddPosSum);

//Знайти добуток позитивних елементів.
//1
const multNum = (arr) => {

	return arr.filter((number) => number > 0).reduce((mult, current) => mult * current, 1)
};

console.log(multNum(arr));

//2
const multNumbers = reduceFunction((acc, number) => acc * number, 1, posFilter(arr));
console.log(multNumbers);

//Знайти найбільший серед елементів масиву, ост альні обнулити.
//1
const resetNumbers = (arr) => {

 arr.forEach((number, index) => {

		if(number !== max(arr)) {

			arr[index] = 0;
		}
	});

	return arr;
};

console.log(resetNumbers(arr));

//2
const resetNum = (arr) => {

	for(let i = 0; i < arr.length; i++) {

		if(arr[i] !== max(arr)) {

			arr[i] = 0;
		}
	}

	return arr;
};

console.log(resetNum(arr));
