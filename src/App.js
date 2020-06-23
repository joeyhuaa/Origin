import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from '../src/components/Slider';
import TextArea from './components/TextArea';

// components
import Brain from './components/Brain'
import Menu from './components/Menu'

export default function App() { 
  let [brainKeys, setBrainKeys] = useState([]) // start the App with 1 Brain loaded
  let [currBrain, setCurrBrain] = useState()
  let [brainStates, setBrainStates] = useState([])
  let [theme, setTheme] = useState(0)

  useEffect(() => {
  })

  function buttonPressed(tabNumber) {
    // update App state 
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
    // console.log('You have selected Tab', tabNumber)

    // update App state
    setCurrBrain(tabNumber)
  }

  function updateBrainState(newState) {
    // update brainStates
    let newBrainStates = brainStates // not spread
    newBrainStates[currBrain-1] = newState
    setBrainStates(newBrainStates)

    // console.log('brain state updated in App.js')
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
  if (brainKeys.length <= 1) {
    return (
      <div id='main-container'>
        <Slider onToggle={state => setTheme(state)} />

        <div id='welcome-screen' className='box'>
          <h1>Welcome to Origin!</h1>
        </div>

        <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
      </div>
    )
    // return (
    //   <div style={{
    //     'border':'solid gray 2px',
    //     'height':'200px',
    //     'width':'20%',
    //     'overflowX':'scroll',
    //     'overflowY':'hidden',
    //     'whiteSpace':'nowrap'
    //   }}>
    //     <TextArea liftTxt={()=>{}} />
    //   </div>
    // )
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
