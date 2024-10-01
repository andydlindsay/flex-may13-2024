import {useRef, useEffect, useState} from 'react';

const RefPractice = () => {
  const renderRef = useRef(0); // { current: 0 }
  const [searchTerm, setSearchTerm] = useState('');

  const inputRef = useRef(null); // { current: inputField }

  useEffect(() => {
    renderRef.current += 1;
  });

  const setFocus = () => {
    inputRef.current.focus()
  };

  return (
    <div>
      <h2>Number of renders: {renderRef.current}</h2>
      <label>Search Term</label>
      <input 
        ref={inputRef}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={setFocus}>Set the focus</button>
    </div>
  );
};

export default RefPractice;
