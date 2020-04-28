import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Brain from './components/Brain'
import Menu from './components/Menu'

export default function App() {
  // initialize dataOfBrains as an empty array
  // this will hold data for ALL brains
  let [dataOfBrains, setDataOfBrains] = useState([])
  let [brainCount, setBrainCount] = useState(0)

  // other important state hooks
  let [mousePos, setMousePos] = useState({x:0, y:0})
  let [connecting, setConnecting] = useState([]) // will contain 2 Neurons max at any point in time

  useEffect(() => {
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
    setBrainCount(brainCount + 1)
  }

  function tabPressed(tabNumber) {
    console.log('You have selected Tab', tabNumber)
  }

  function updateBrainData(newBrainData) {
    // update dataOfBrains continuously (might be cause speed issues??)
    // let data = dataOfBrains; data[brainCount] = newBrainData 
    // setDataOfBrains(data)
    // console.log('dataOfBrains:', dataOfBrains)
  }

  return (
    <div id='main-container'>
      <Brain data={dataOfBrains[brainCount]} getBrainData={updateBrainData} />
      <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
    </div>
  );
}
