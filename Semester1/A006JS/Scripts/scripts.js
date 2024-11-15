// assign variables
const buttonOne = window.document.querySelector('#btnOne');
const buttonTwo = window.document.querySelector('#btnTwo');
const buttonThree = window.document.querySelector('#btnThree');

// add events
buttonOne.addEventListener('click', theClick);
buttonTwo.addEventListener('dblclick', theDblClick);
buttonThree.addEventListener('mouseover', theMouseOver);

// add function
function theClick(){
    window.alert('One!');
}
function theDblClick(){
    window.alert('Two!');
}
function theMouseOver(){
    window.alert('Three!');
}