import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Brain from './components/Brain'
import Menu from './components/Menu'

// all Brains are initialized with these state variables
const brainStateZero = {
  neuronPos: [], 
  neuronCt: 0, 
  linePos: [], 
  lineCt: 0
}

export default function App() {
  // initialize dataOfBrains as an empty array
  // this will hold data for ALL brains
  let [brainKeys, setBrainKeys] = useState([1])
  let [currBrain, setCurrBrain] = useState(1)
  let [dataOfBrains, setDataOfBrains] = useState([ {
    neuronPos: [], 
    neuronCt: 0, 
    linePos: [], 
    lineCt: 0
  } ])

  useEffect(() => {
    // console.log('There are', brainKeys.length, 'Brains')
    // console.log('brainKeys', brainKeys)
    // console.log('dataOfBrains', dataOfBrains)
    console.log('brainStateZero', brainStateZero)
  })

  function buttonPressed(tabNumber) {
    // console.log('The newest Tab is', tabNumber)
    
    // update App state
    if (!(tabNumber in brainKeys)) {
      let newBrainKeys = brainKeys
      newBrainKeys.push(tabNumber)
      setBrainKeys(newBrainKeys)

      let newDataOfBrains = dataOfBrains
      newDataOfBrains.push({
        neuronPos: [], 
        neuronCt: 0, 
        linePos: [], 
        lineCt: 0
      }) // add new empty state object for the new Brain
      setDataOfBrains(newDataOfBrains)
    }
  }

  function tabPressed(tabNumber) {
    // console.log('You have selected Tab', tabNumber)
    setCurrBrain(tabNumber)
  }

  function updateBrainData(newBrainData) {
    // update dataOfBrains continuously (might be cause speed issues??)
    let data = dataOfBrains; data[currBrain-1] = newBrainData 
    setDataOfBrains(data)
    console.log(`There are ${dataOfBrains[currBrain-1].neuronCt} Neurons in Brain ${currBrain}`)
  }

  let brains = brainKeys.map(i => 
    <Brain key={i} data={dataOfBrains[currBrain-1]} getBrainData={updateBrainData} />
  )

  return (
    <div id='main-container'>
      {brains[currBrain-1]}
      <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
    </div>
  );
}
