import {useEffect, useState, useCallback} from 'react';

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('updating the document title');
    document.title = `count is ${count}`;
  }, []); // document.ready

  return (
    <div>
      <h2>Document Title component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <label>Username</label>
        <input 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;
