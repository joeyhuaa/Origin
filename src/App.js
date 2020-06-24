import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Brain from './components/Brain';
import Menu from './components/Menu';
import Slider from '../src/components/Slider';

export default function App() { 
  let [brainKeys, setBrainKeys] = useState([]) 
  let [currBrain, setCurrBrain] = useState(null)
  let [brainStates, setBrainStates] = useState([])
  let [theme, setTheme] = useState(0)

  useEffect(() => {
    console.log(currBrain)
  })

  function buttonPressed(tabNumber) {
    // need conditional because buttonPressed is continuously being called from Menu's useEffect
    if (!(tabNumber in brainKeys)) {
      let newBrainkeys = brainKeys // not spread
      newBrainkeys.push(tabNumber)
      setBrainKeys(newBrainkeys) 

      let newBrainStates = brainStates // not spread
      newBrainStates.push({
        neuronPos: [],
        neuronTxt: [], // text in neuron lives in App 
        neuronCt: 0,
        linePos: [],
        lineCt: 0,
        docData: []
      })
      setBrainStates(newBrainStates) 
    }
  }

  function tabPressed(tabNumber) {
    setCurrBrain(tabNumber)
  }

  function updateBrainState(newState) {
    let newBrainStates = brainStates // not spread
    newBrainStates[currBrain-1] = newState
    setBrainStates(newBrainStates)
  }

  let brains = brainKeys.map(i => 
    <Brain 
      key={i} 
      state={brainStates[currBrain-1]} 
      updateBrainState={updateBrainState} 
      theme={theme}
    />
  )

  // CONDITIONAL RENDER
  if (typeof currBrain != 'number') {
    return (
      <div id='main-container'>
        <Slider onToggle={state => setTheme(state)} />

        <div id='welcome-screen' className='box'>
          <h1>Welcome to Origin!</h1>
          <h3>[No Brain Selected]</h3>
        </div>

        <Menu 
          onButtonPress={buttonPressed} 
          onTabSelect={tabPressed} 
        />
      </div>
    )
  } else {
    return (
      <div id='main-container'>
        <Slider onToggle={state => setTheme(state)} />

        {brains[currBrain-1]}

        <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
      </div>
    )
  }
}
