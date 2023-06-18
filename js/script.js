//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями
const calcSum = () => {
	let sum = 0;
	return function (num) {
		sum += num;
		return sum;
	};
}

const sumFunction = calcSum();
console.log(sumFunction(3));
console.log(sumFunction(5));
console.log(sumFunction(20));