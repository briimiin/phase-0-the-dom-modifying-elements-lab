// Write your code here!
const mainElement = document.querySelector('main');
mainElement.remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute('id','victory');
newHeader.textContent = 'Brimin is the champion';
