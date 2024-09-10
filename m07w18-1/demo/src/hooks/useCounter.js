import { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const incrementByN = (n) => {
    setCount(count + n);
  };

  // return [count, increment, decrement];

  return {
    count,
    increment,
    decrement,
    reset,
    incrementByN,
  };
};

export default useCounter;
