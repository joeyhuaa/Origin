import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Brain from './Brain'
import BrainInventory from './BrainInventory'
import Menu from './Menu'

export default function App() {
  let [brainCount, setBrainCount] = useState(1)

  useEffect(() => {
    console.log('there are', brainCount, 'brains total')
  })

  function buttonPressed() {
    setBrainCount(brainCount + 1)
    
    // tests
  }

  function getBrainKeys(numOfBrains) {
    let keys = []
    for (let i = 1; i < numOfBrains + 1; i++ ) {keys[i] = i }
    return keys
  }

  return (
    <div id='main-container'>
      <BrainInventory numOfBrains={getBrainKeys(brainCount)} />
      <Menu onButtonPress={buttonPressed} />
    </div>
  );
}
