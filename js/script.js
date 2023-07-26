const userForm = document.getElementById('userForm');

const formContainer = document.querySelector('.form__container');

const errorContainer = document.createElement('div');
errorContainer.classList.add('errorContainer');

userForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = Object.fromEntries(new FormData(event.target));
	const selectedLangueages = Array.from(document.querySelectorAll("input[type=checkbox][name=languages]:checked"), e => e.value);
	let errorMessage = '';
	let userInfo = 'User Info:\n';

	for(const field in formData) {
		const value = formData[field];

		if(!value) {
			errorMessage += `Please fill in the "${field}" field.<br>`;
		} else {
			if(field !== 'languages') {
				userInfo += `${field}: ${formData[field]}\n`;
			} else {
				userInfo += `${field}: ${selectedLangueages}`;
			}
		}

		if(errorMessage) {
			errorContainer.innerHTML = errorMessage;
			return;
		} else {
			errorContainer.innerHTML = '';
		}
	}
	formContainer.style.display = 'none';
	const userInfoContainer = document.createElement('div');
	userInfoContainer.classList.add('userInfoContainer');
	userInfoContainer.innerText = userInfo;
	document.body.appendChild(userInfoContainer);
})

document.body.appendChild(errorContainer);

