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
  })

  function buttonPressed(tabNumber) {
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

  function tabPressed(tabNumber) {
    setCurrBrain(tabNumber)
  }

  function updateBrainState(newState) {
    let newBrainStates = brainStates // not spread
    newBrainStates[currBrain] = newState
    setBrainStates(newBrainStates)
  }

  let brains = brainKeys.map(i => 
    <Brain 
      key={i} 
      state={brainStates[currBrain]} 
      updateBrainState={updateBrainState} 
      theme={theme}
    />
  )

  // CONDITIONAL RENDER
  if (typeof currBrain != 'number') {
    return (
      <div id='main-container' className={theme ? 'main dark-outer' : 'main light-outer'}>
        <Slider onToggle={state => setTheme(state)} />

        <div id='welcome-screen' className={theme ? 'box dark-inner' : 'box light-inner'}>
          <h1>Welcome to Origin!</h1>
          <h3>[No Brain Selected]</h3>
        </div>

        <Menu 
          onButtonPress={buttonPressed} 
          onTabSelect={tabPressed} 
          theme={theme}
        />
      </div>
    )
  } else {
    return (
      <div id='main-container' className={theme ? 'main dark-outer' : 'main light-outer'}>
        <Slider onToggle={state => setTheme(state)} />

        {brains[currBrain]}

        <Menu 
          onButtonPress={buttonPressed} 
          onTabSelect={tabPressed} 
          theme={theme}
        />
      </div>
    )
  }
}
