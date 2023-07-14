const textInput = document.createElement('input');

textInput.setAttribute('type', 'text');
textInput.style = 'border: 1px solid #000;';

textInput.classList.add('textInput');

document.body.appendChild(textInput);

const someDiv = document.createElement('div');
someDiv.classList.add('someDiv');
someDiv.style = 'display: none';

document.body.appendChild(someDiv);

textInput.addEventListener('focus', () => {
	someDiv.style = 'display: inline-block; border: 1px solid #000;  width: 100px; height: 50px; margin: 0 0 0 20px';
	someDiv.innerText = 'someText';
});

textInput.addEventListener('blur', () => {
	someDiv.style = 'display: none;';
});