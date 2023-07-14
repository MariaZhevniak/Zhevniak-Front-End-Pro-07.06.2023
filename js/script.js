
const firstLinkButton = document.createElement('button');
const secondLinkButton = document.createElement('button');

const firstLink = document.createElement('a');
const secondLink = document.createElement('a');

firstLinkButton.innerText = 'First website';
secondLinkButton.innerText = 'Second website';

const firstUserLink = prompt('Введите первую ссылку', '');
const secondUserLink = prompt('Введите вторую ссылку', '');

function isProtocol(link) {
  if (link && !link.startsWith('http://') && !link.startsWith('https://')) {
    return `http://${link}`;
  }
  return link;
}

firstLink.setAttribute('href', isProtocol(firstUserLink));
secondLink.setAttribute('href', isProtocol(secondUserLink));


firstLinkButton.appendChild(firstLink);
secondLinkButton.appendChild(secondLink);


document.body.appendChild(firstLinkButton);
document.body.appendChild(secondLinkButton);

firstLinkButton.addEventListener('click', () => {
  const link = firstLink.getAttribute('href');
  if (link) {
    window.location.href = link;
  }
});

secondLinkButton.addEventListener('click', () => {
  const link = secondLink.getAttribute('href');
  if (link) {
    window.location.href = link;
  }
});

