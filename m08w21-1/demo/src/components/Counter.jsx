import {useState, use} from 'react';
import countContext from '../contexts/countContext';
// import Display from './Display';
// import Button from './Button';
import InBetween from './InBetween';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}

      <countContext.Provider value={{ count, setCount, more: 'stuff' }}>
        <InBetween />
      </countContext.Provider>
    </div>
  );
};

export default Counter;
