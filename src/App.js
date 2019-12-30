import React from 'react';
import './App.css';
import Header from './components/header'
import RepeatEach from './components/RepeatEach'
import RepeatOn from './components/RepeatOn'
import Radio from './components/Radio'
import ContainerButtons from './components/ContainerButtons'

const App = () => {
  return (
    <div className="App">
      <Header />
      <RepeatEach />
      <RepeatOn />
      <Radio />
      <ContainerButtons/>
    </div>
  );
}

export default App;
