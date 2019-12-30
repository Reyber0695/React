import React from 'react';
import './App.css';
import Header from './components/header'
import RepeatEach from './components/RepeatEach'
import RepeatOn from './components/RepeatOn'
import Radio from './components/Radio'

const App = () => {
  return (
    <div className="App">
      <Header />
      <RepeatEach />
      <RepeatOn />
      <Radio />
    </div>
  );
}

export default App;
