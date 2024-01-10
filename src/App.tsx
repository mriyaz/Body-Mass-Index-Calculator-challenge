import React from 'react';
import Header from './components/Header';
import BmiCalculator from './components/BmiCalculator';
import BmiMeaning from './components/BmiMeaning';
import BmiTips from './components/BmiTips';
import BmiLimitations from './components/BmiLimitations';

import './App.css';

function App() {
  return (
    <div >
      <div className="xl:flex xl:items-center">
        <Header />
        <BmiCalculator />
      </div>
      <BmiMeaning />
      <BmiTips />
      <BmiLimitations />

    </div>
  );
}

export default App;
