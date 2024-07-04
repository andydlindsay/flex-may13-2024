const username = 'alice';

// document ready
$(document).ready(() => {

  // grab the h1
  const h1 = $('h1');

  h1.fadeOut(1000);
  h1.fadeIn(10000);

  // add a click event handler to the h1
  h1.on('click', () => {
    console.log('the h1 was clicked!');
  });

  // create a new li
  $('p'); // find the element
  $('<p>'); // create the element

  const myLi = $('<li>'); // <li></li>
  myLi.text('Four'); // <li>Four</li>

  // find the main-list
  const mainList = $('#main-list');

  // add the li to the list
  // mainList.append(myLi);
  mainList.prepend(myLi);

});
