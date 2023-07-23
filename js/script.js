const images = [ '/img/image1.jpg', '/img/image2.jpg', '/img/image3.jpg', '/img/image4.jpg', '/img/image5.jpg'];

const sliderContainer = document.createElement('div');
sliderContainer.classList.add('sliderContainer');

const prevButton = document.createElement('button');
prevButton.classList.add('prevButton');

const nextButton = document.createElement('button');
nextButton.classList.add('nextButton');

const sliderImage = document.createElement('img');

let currentIndex = 0;

function showImage(index) {
if (index < 0 || index >= images.length) {
   return;
}

sliderImage.setAttribute('src', images[index]);
currentIndex = index;

prevButton.style.display  = currentIndex === 0 ? 'none' : 'block';
nextButton.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
}

prevButton.innerText = 'Prev';
prevButton.addEventListener('click', () => {
showImage(currentIndex - 1);
});

nextButton.innerText = 'Next';
nextButton.addEventListener('click', () => {
showImage(currentIndex + 1);
});

sliderContainer.appendChild(prevButton);
sliderContainer.appendChild(sliderImage);
sliderContainer.appendChild(nextButton);
document.body.appendChild(sliderContainer);

showImage(currentIndex);


