import {useState} from 'react';

const useArray = () => {
  const [array, setArray] = useState([]);

  const addItem = (element) => {
    const copy = [ ...array, element ];
    setArray(copy);
  };

  const deleteItem = (element) => {
    const filtered = array.filter((el) => el !== element);
    setArray(filtered);
  };

  const empty = () => {
    setArray([]);
  };

  return {
    array,
    addItem,
    deleteItem,
    empty,
  };
};

// addItem('hello')

export default useArray;
