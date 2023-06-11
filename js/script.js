//Створити масив, довжину та елементи якого задає користувач.
const getLength = () => {
	let length;

	while(true) {
		length = prompt('Вкажіть довжину масиву', '');

		if(length === '' || length === null || length === undefined || isNaN(length) || length < 1) {
			continue;

		} else{
			break;
		}
	}

	return length;
};

const arrLength = getLength();

const getElements = (arrLength) => {
	let i = 0;
	const arr = [];

	while(i < arrLength) {
		let elem;

		while(true) {
			elem = prompt('Вкажіть елемент масиву', '');

			if(elem === '' || elem === null || elem === undefined || isNaN(elem)) {
				continue;

			} else {
				break;
			}
		}

		arr.push(+elem);
			i++;
	}

	return arr;
};

const userArr = getElements(arrLength);
alert(userArr);

//Відсортувати масив за зростанням.
const sortArr = (arr) => {

	return arr.sort((a, b) => a - b);
};

alert(sortArr(userArr));

//Видалити елементи з масиву з 2 по 4 (включно!).
const spliceArr = (arr) => {

	arr.splice(2, 3);
	return arr;
}

alert(spliceArr(userArr));



