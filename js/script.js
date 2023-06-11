//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) => {
	const arr = characters.split('');
	let keyArr = [];

	while(keyArr.length !== length) {
		const index = Math.floor(Math.random() * characters.length);
		const elem = arr[index];

		if(elem === undefined) {

			continue;
		}

		keyArr.push(elem);
	}

	return keyArr.join('');
	}

const key = generateKey(16, characters);
console.log(key);



