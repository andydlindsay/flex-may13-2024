import {useState} from 'react';

const useToggle = () => {
  const [isTruthy, setIsTruthy] = useState(true);

  const toggleState = () => {
    setIsTruthy(!isTruthy);
  };

  return [isTruthy, toggleState];
};

export default useToggle;
