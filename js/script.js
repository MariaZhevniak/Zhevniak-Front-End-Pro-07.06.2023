const voteImages = [
	{ imageSrc: '/img/image1.jpg', count: 0 },
	{ imageSrc: '/img/image2.jpg', count: 0 },
	{ imageSrc: '/img/image3.jpg', count: 0 },
	{ imageSrc: '/img/image4.jpg', count: 0 },
	{ imageSrc: '/img/image5.jpg', count: 0 }
];

const voteContainer = document.createElement('div');
voteContainer.classList.add('voteContainer');
document.body.appendChild(voteContainer);

voteContainer.addEventListener('click', (event) => {
if (event.target.matches('.voteImage')) {
   const voteImage = event.target;
   const countElement = voteImage.nextElementSibling;
   const index = Array.from(voteContainer.children).indexOf(voteImage.parentNode);
   voteImages[index].count++;
   countElement.innerText = voteImages[index].count;
}
});

voteImages.forEach((image) => {
const voteItem = document.createElement('div');
voteItem.classList.add('voteItem');

const voteImage = document.createElement('img');
voteImage.setAttribute('src', image.imageSrc);
voteImage.classList.add('voteImage');

const count = document.createElement('p');
count.classList.add('voteCount');
count.innerText = image.count;

voteItem.appendChild(voteImage);
voteItem.appendChild(count);
voteContainer.appendChild(voteItem);
});