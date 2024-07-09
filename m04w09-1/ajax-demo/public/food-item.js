$(document).ready(() => {

  const createFoodItem = (foodItem) => {
    const $myFoodItem = $(`
      <article class="food-item">
        <header>
          <h2>Name: ${foodItem.name}</h2>
          <h3>Id: ${foodItem.id}</h3>
        </header>
        <p>Tagline: ${foodItem.tagline}</p>
        <hr/>
        <footer>
          <h3>Price: $${foodItem.price}</h3>
          <h3>Calories: ${foodItem.calories}</h3>
        </footer>
      </article>
    `);

    return $myFoodItem;
  };

  const $foodItemContainer = $('#food-item-container');

  const renderFoodItems = (arrOfFoodItems) => {
    for (const foodItem of arrOfFoodItems) {
      const $myFoodItem = createFoodItem(foodItem);
      $foodItemContainer.prepend($myFoodItem); // first child
    }
  };

  const loadFoodItems = () => {
    // make a GET request to /food-items
    $.ajax({
      method: 'GET',
      url: '/food-items',
      success: (dataFromServer) => {
        console.log(dataFromServer);
        renderFoodItems(dataFromServer);
      }
    });
  };

  loadFoodItems();

  // grab the food item form
  const $form = $('#new-food-item-form');

  // listen for the submit event of the form
  $form.on('submit', (event) => {
    // prevent the default behaviour of the browser
    event.preventDefault();
    
    // grab the data from the form
    const formData = $form.serialize(); // create a url-encoded string for the POST request to send

    // POST the form information to the server
    $.ajax({
      method: 'POST',
      url: '/food-items',
      data: formData,
      success: (response) => {
        console.log(response); // response is empty
        // re-fetch the food-items
        loadFoodItems();
      }
    });
  });

});
