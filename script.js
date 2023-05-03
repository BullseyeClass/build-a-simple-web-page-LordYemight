const myButton = document.querySelector('#myButton');
const resultDiv = document.querySelector('#result');

myButton.addEventListener('click', () => {
  alert('Hello, World!');
  resultDiv.innerHTML = 'Button clicked!';
});