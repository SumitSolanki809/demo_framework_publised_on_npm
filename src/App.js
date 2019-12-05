import React from 'react';
import './App.css';
import MyButton from './components/my-button/MyButton'

function App() {
  return (
    <div className="App">
      <MyButton children={"hello"}/>
    </div>
  );
}

export default App;
