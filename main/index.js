console.log('Hello World');
document.querySelector('p').innerHTML = 'This was changed with JS.'

const subHead = document.createElement('h3');
subHead.innerHTML = 'This was created with <b>JS</b>.';
document.body.appendChild(subHead);