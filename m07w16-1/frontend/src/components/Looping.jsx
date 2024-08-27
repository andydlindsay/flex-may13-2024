import './Looping.css';

const Looping = () => {
  const myFaveFoods = ['hamburger', 'pie', 'apples'];
  // const myArrayOfJSX = [<p>Hello</p>, <h3>Good day</h3>];

  const mappedArr = myFaveFoods.map((faveFood, index) => {
    return <p key={index}>{ faveFood }</p>;
  })

  const showMessage = false;

  // short circuiting with logical &&
  // false && true

  return (
    <div className={showMessage ? 'show' : 'hidden'}>
      <h2>Looping Component</h2>
      
      { showMessage && <h2>Does this work??</h2> }
      { !showMessage && <h2>No message for you!</h2> }

      { myFaveFoods.length === 4 ? 'lots of food!' : 'not enough food' }
    </div>
  );
};

export default Looping;
