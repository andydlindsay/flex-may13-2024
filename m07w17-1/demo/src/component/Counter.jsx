import {useState} from 'react';

const Counter = () => {
  // the argument to useState is the default value for state
  // const arr = useState(0);
  // const counter = arr[0]; // getter
  // const updateFunction = arr[1]; // setter

  const [counter, setCounter] = useState(0);

  const increment = () => {
    // updateFunction(42); // set the value of counter to 42
    // counter++;
    counter++;
    setCounter(counter + 1);
    // console.log(counter);
  };

  return (
    <div>
      <h2>Counter is {counter}</h2>
      <button onClick={() => { increment() }}>Click Me!</button>
    </div>
  );
};

export default Counter;
