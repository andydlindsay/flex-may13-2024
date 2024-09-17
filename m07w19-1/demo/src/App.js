import './App.css';

import {useState} from 'react';

// import ClassBased from './components/ClassBased';
// import StatefulComponent from './components/StatefulComponent';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-based React</h2>
      <label>Show Lifecycle</label>
      <input 
        type="checkbox" 
        value={showLifecycle} 
        onChange={() => setShowLifecycle(!showLifecycle)} 
      />
      {/* <ClassBased greeting="hello" myArr={[1,2,3]}>
        <h3>I am the children!</h3>
      </ClassBased> */}

      {/* <StatefulComponent greeting="hello" /> */}

      { !!showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;
