import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Brain from './components/Brain'
import Menu from './components/Menu'

export default function App() {
  // initialize allBrainData as an empty array
  // this will hold data for ALL brains
  let [data, setData] = useState([])

  // this is the data for the current Brain, is passed as prop to <Brain /> to be rendered
  let [currBrainData, setCurrBrainData] = useState()

  useEffect(() => {
  })

  function buttonPressed(tabNumber) {
    console.log('The newest Tab is', tabNumber)
    console.log('data =', data)

    let newData = data; newData[tabNumber] = `${tabNumber}`
    setData(newData) // create new array for new Tab 
  }

  function tabPressed(tabNumber) {
    console.log(tabNumber)
    setCurrBrainData(data[tabNumber]) 
  }

  return (
    <div id='main-container'>
      <Brain data={currBrainData} />
      <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
    </div>
  );
}
