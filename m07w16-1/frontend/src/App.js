import React from 'react';
import './App.css';

// each component has to return either null or JSX

import Header from './components/Header';
import Looping from './components/Looping';

function App() {
  return (
    <div className="App">
      <h2>Inside the App component</h2>
      {/* <img src="" alt="" /> */}
      <Header message="hello world" ></Header>
      <Header message="about us" ></Header>
      <Header message="welcome" ></Header>

      <Looping />
    </div>
  );
}

export default App;
