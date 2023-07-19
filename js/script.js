const container = document.createElement('div');
container.classList.add('container');
const categoriesBlock = document.createElement('div');
const productInfoBlock = document.createElement('div');
const productsBlock = document.createElement('div');
productsBlock.style.display = 'none';
productInfoBlock.style.display = 'none';

const formContainer = document.createElement('div');
formContainer.classList.add('form__container');
formContainer.style.display = 'none';

const orderForm = document.getElementById('orderForm');
formContainer.appendChild(orderForm);

const errorContainer = document.createElement('div');
errorContainer.classList.add('errorContainer');

const shopData = {
	'Lips': [
		{
			name: 'Lipstick',
			description: 'Red Lipstick',
			price: '500UAH',
		},

		{
			name: 'Lip Gloss',
			description: 'Pink Gloss',
			price: '300UAH',
		},
	],

	'Eyes': [
		{
			name: 'Eyeshadow',
			description: 'Black eyeshadow',
			price: '600UAH',
		},

		{
			name: 'Mascara',
			description: 'Black Mascara',
			price: '400UAH',
		},
	],

	'Face': [
		{
			name: 'Foundation',
			description: 'Light Foundation',
			price: '800UAH',
		},

		{
			name: 'Skincare',
			description: 'Moisturizer',
			price: '700UAH',
		},
	]
};

const selectedProducts = [];
let totalPrice = 0;

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
			productInfoBlock.innerText = product.description + ' ' +  product.price;
			
			const buyButton = document.createElement('button');
			buyButton.classList.add('buy__button');
			buyButton.innerText = 'Buy';

			buyButton.addEventListener('click', (event) => {
				alert('Product purchased');
				productInfoBlock.style.display = 'none';
				productsBlock.style.display = 'none';
				formContainer.style.display = 'block';
				selectedProducts.push(product); 
			});


			productInfoBlock.appendChild(buyButton);
		});

		productList.appendChild(productItem);
	});

	productsBlock.appendChild(productList);
	});
});


orderForm.addEventListener('submit', function(event) {
	event.preventDefault(); 

	const formData = Object.fromEntries(new FormData(this));
	let errorMessage = '';
	let orderInfo = 'Order Information:\n';
	for (const field in formData) {

		const value = formData[field];

		if(!value) {
			errorMessage += `Please fill in the "${field}" field.<br>`;
		} else {
			orderInfo += `${field}: ${formData[field]}\n`;
		}

		if(errorMessage) {
			errorContainer.innerHTML = errorMessage;
			return;
		} else {
			errorContainer.innerHTML = '';
		}
		
	}

	selectedProducts.forEach((product) => {
		orderInfo += `Product: ${product.description}\n`;
		orderInfo += `Price: ${product.price}\n`;
	});

	totalPrice = selectedProducts.reduce((acc, product) => {
		const price = parseFloat(product.price.replace('UAH', ''));
		return acc + price * formData.quantity;
	}, 0);

	orderInfo += `Total Price: ${totalPrice} UAH`;

	const orderInfoContainer = document.createElement('div');
	orderInfoContainer.classList.add('orderInfoContainer');
	orderInfoContainer.innerText = orderInfo;
	document.body.appendChild(orderInfoContainer);
	console.log(orderInfoContainer);

	alert('Form submitted successfully!');
});


categoriesBlock.appendChild(categoriesList);
container.appendChild(categoriesBlock);
container.appendChild(productsBlock);
container.appendChild(productInfoBlock);
document.body.appendChild(container);
document.body.appendChild(formContainer);
document.body.appendChild(errorContainer);

