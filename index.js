

function addingEventListener() {
}

// DIRECTIONS - copy the code into the index.js file's 
// addingEventListener() function and run the test. 
// Either version should pass the test — just 
// make sure that the code creating the event listener is 
// inside the addingEventListener() function.
// my new code copied from Canvas page for this lab is below

function addingEventListener() {
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
} ;
