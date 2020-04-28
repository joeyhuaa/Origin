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

  // other important state hooks
  let [mousePos, setMousePos] = useState({x:0, y:0})
  let [connecting, setConnecting] = useState([]) // will contain 2 Neurons max at any point in time

  useEffect(() => {
    // console.log('There are', brainKeys.length, 'Brains')
    // console.log('brainKeys', brainKeys)
    // console.log(`State of Brain ${currBrain}: ${dataOfBrains[currBrain-1].neuronCt}`)

    // reset "connecting" if needed
    if (connecting.length === 2) setConnecting([])
  })

  function between(num, min, max) {
    return (num >= min && num <= max)
  }

  function handleMouseMove(e) {
    setMousePos({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}) // change this later to use rectBounds
  }

  function buttonPressed(tabNumber) {
    console.log('The newest Tab is', tabNumber)
    
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
    console.log('You have selected Tab', tabNumber)
    setCurrBrain(tabNumber)
  }

  function updateNeurons() {
    console.log(dataOfBrains[currBrain-1].neuronPos)
    let shouldAddNeuron = true
    for (let p of dataOfBrains[currBrain-1].neuronPos) {
      if ( between(mousePos.x, p.x-120, p.x+120) && between(mousePos.y, p.y-120, p.y+120) ) {
        shouldAddNeuron = false
      }
    }
    if (shouldAddNeuron) {
      let newDataOfBrains = dataOfBrains
      newDataOfBrains[currBrain-1].neuronPos.push(mousePos) // add position of new Neuron
      newDataOfBrains[currBrain-1].neuronCt += 1 // increment neuronCt by 1
      setDataOfBrains(newDataOfBrains) // SETSTATE
    }
  }

  function updateLines(index) {
    if (connecting.length === 0) {
      alert('connecting first Neuron')

      // add 1st Neuron to connecting, get startPoint for line
      let startPoint = dataOfBrains[currBrain-1].neuronPos[index]

      // update connecting state
      let newConnecting = connecting; newConnecting.push(startPoint)
      setConnecting(newConnecting)

    } else if (connecting.length === 1) {
      alert('connecting second Neuron')

      // add 2nd Neuron to connecting, get endPoint for line
      let endPoint = dataOfBrains[currBrain-1].neuronPos[index]

      // update connecting state
      let newConnecting = connecting; newConnecting.push(endPoint)
      setConnecting(newConnecting)

      // add the new line
      let newDataOfBrains = dataOfBrains
      newDataOfBrains[currBrain-1].linePos.push({ // add the coordinates of the new line
        x1: connecting[0].x, 
        y1: connecting[0].y, 
        x2: connecting[1].x, 
        y2: connecting[1].y
      })
      newDataOfBrains.lineCt += 1 // increment lineCt by 1
      setDataOfBrains(newDataOfBrains) // SETSTATE
    }
  }

  let brains = brainKeys.map(i => 
    <Brain 
      key={i} 
      data={dataOfBrains[currBrain-1]} 
      updateNeurons={updateNeurons} 
      updateLines={updateLines}
      onMouseMove={handleMouseMove}
    />
  )

  return (
    <div id='main-container'>
      {brains[currBrain-1]}
      <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
    </div>
  );
}
