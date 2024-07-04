console.log('inside script.js');

console.log(username);


// find the h1 on the page
const h1 = document.getElementsByTagName('h1')[0]; // [h1]
console.log(h1);

// setup a callback to run when the h1 gets clicked on
h1.addEventListener('click', () => {
  console.log('the h1 was clicked!!');
});

// create a new LI
const myLi = document.createElement('li'); // <li></li>
console.log(myLi);

// create a text node for the LI
const myTextNode = document.createTextNode('Four'); // "Four"

// put the two together
myLi.appendChild(myTextNode); // <li>Four</li>
console.log(myLi);

// grab the list
const mainList = document.getElementById('main-list');

// add our LI to the end of the list
mainList.appendChild(myLi);
