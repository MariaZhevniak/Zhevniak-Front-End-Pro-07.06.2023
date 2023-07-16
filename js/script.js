const generateList = (array) => {
	const list = document.createElement('ul');

	array.forEach(item => {
		const listItem = document.createElement('li');

		if(Array.isArray(item)) {
			const nestedList = generateList(item);
			listItem.appendChild(nestedList);
		} else {

			listItem.innerText = item;
		}

		list.appendChild(listItem);
		document.body.appendChild(list);
	});

	return list;
}

const arr = [1, 2,  [1, 2, 3], 3];
generateList(arr);
