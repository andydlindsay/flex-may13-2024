console.log('inside the ajax-testing.js file');

// $.ajax({
//   method: 'GET',
//   url: 'https://www.dnd5eapi.co/api/classes',
//   success: (response) => {
//     console.log(response);
//   },
//   error: (err) => {
//     console.log('an error happened', err);
//   }
// });

$.ajax({
  method: 'GET',
  url: '/food-items',
  success: (response) => {
    console.log(response);
  },
  error: (err) => {
    console.log('an error happened', err);
  }
});
