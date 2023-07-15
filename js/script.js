const container = document.createElement('div');
container.classList.add('container');
const categoriesBlock = document.createElement('div');
const productInfoBlock = document.createElement('div');
const productsBlock = document.createElement('div');
productsBlock.style.display = 'none';
productInfoBlock.style.display = 'none';
const shopData = {
	'Lips': [
		{
			name: 'Lipstick',
			description: 'Red Lipstick',
		},

		{
			name: 'Lip Gloss',
			description: 'Pink Gloss',
		},
	],

	'Eyes': [
		{
			name: 'Eyeshadow',
			description: 'Black eyeshadow',
		},

		{
			name: 'Mascara',
			description: 'Black Mascara',
		},
	],

	'Face': [
		{
			name: 'Foundation',
			description: 'Light Foundation',
		},

		{
			name: 'Skincare',
			description: 'Moisturizer',
		},
	]
};

const categoriesList = document.createElement('ul');

Object.keys(shopData).forEach(category => {
	const categoryItem = document.createElement('li');
	categoryItem.innerText = category;

	categoriesList.appendChild(categoryItem);

	categoriesList.addEventListener('click', (event) => {
		productsBlock.style.display = 'block';
		productInfoBlock.style.display = 'none';

		const selectedCategory = event.target.innerText;

		productsBlock.innerHTML = '';

		const productList = document.createElement('ul');
		
		const products = shopData[selectedCategory];
		products.forEach(product => {
		const productItem = document.createElement('li');
		productItem.innerText = product.name;

		productItem.addEventListener('click', () => {
			productInfoBlock.style.display = 'block';
			productInfoBlock.innerText = product.description;
			
			const buyButton = document.createElement('button');
			buyButton.innerText = 'Buy';

			buyButton.addEventListener('click', (event) => {
				alert('Product purchased');
				productInfoBlock.style.display = 'none';
				productsBlock.style.display = 'none';
			});

			productInfoBlock.appendChild(buyButton);
		});

		productList.appendChild(productItem);
	});

	productsBlock.appendChild(productList);
	});
});


categoriesBlock.appendChild(categoriesList);
container.appendChild(categoriesBlock);
container.appendChild(productsBlock);
container.appendChild(productInfoBlock);
document.body.appendChild(container);

