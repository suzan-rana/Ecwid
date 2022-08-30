const menuBar = document.getElementById('menu');
const oneBar = document.getElementById('one');
const twoBar = document.getElementById('two');
const ul = document.getElementById('ul');
menuBar.addEventListener('click', () => {
    console.log('Hello world');
    oneBar.classList.toggle('active--bar-one')
    twoBar.classList.toggle('active--bar-two')
    ul.classList.toggle('ul--right');
})