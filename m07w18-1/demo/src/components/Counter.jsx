import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {
    decrement, 
    count, 
    increment, 
    reset, 
    incrementByN,
  } = useCounter(400);

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Count is {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => incrementByN(3.1415)}>+ Pi</button>
      <button onClick={() => incrementByN(10)}>+10</button>
    </div>
  );
};

export default Counter;
