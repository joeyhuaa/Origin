import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Brain from './components/Brain'
import Menu from './components/Menu'
import Application from './components/Application';
import UserProvider from "./providers/UserProvider";

export default function App() { 
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
//   let [brainKeys, setBrainKeys] = useState([]) // start the App with 1 Brain loaded
//   let [currBrain, setCurrBrain] = useState()
//   let [brainStates, setBrainStates] = useState([ {
//     neuronPos: [],
//     neuronCt: 0,
//     linePos: [],
//     lineCt: 0
//   } ])

//   useEffect(() => {
//     console.log(brainStates[currBrain-1])
//   })

//   function buttonPressed(tabNumber) {
//     console.log('The newest Tab is', tabNumber)
    
//     // update App state 
//     // need conditional because buttonPressed() is continuously being called from Menu's useEffect()
//     if (!(tabNumber in brainKeys)) {
//       let newBrainkeys = brainKeys
//       newBrainkeys.push(tabNumber)
//       setBrainKeys(newBrainkeys) // push new key corresponding to tabNumber

//       let newBrainStates = brainStates
//       newBrainStates.push({
//         neuronPos: [],
//         neuronCt: 0,
//         linePos: [],
//         lineCt: 0
//       })
//       setBrainStates(newBrainStates) // push new state object to hold state attrs of new Brain
//     }
//   }

//   function tabPressed(tabNumber) {
//     console.log('You have selected Tab', tabNumber)

//     // update App state
//     setCurrBrain(tabNumber)
//   }

//   function updateBrainState(newState) {
//     // update brainStates
//     let newBrainStates = brainStates
//     newBrainStates[currBrain-1] = newState
//     setBrainStates(newBrainStates)
//   }

//   let brains = brainKeys.map(i => 
//     <Brain 
//       key={i} 
//       state={brainStates[currBrain-1]} 
//       updateBrainState={() => updateBrainState} 
//     />
//   )

//   // CONDITIONAL RENDER
//   if (brainKeys.length === 0) {
//     return (
//       <div id='main-container'>
//         <div id='welcome-screen'>
//           <h1>Welcome to Origin!</h1>
//         </div>
//         <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
//       </div>
//     )
//   } else {
//     return (
//       <div id='main-container'>
//         {brains[currBrain-1]}
//         <Menu onButtonPress={buttonPressed} onTabSelect={tabPressed} />
//       </div>
//     )
//   }
}
