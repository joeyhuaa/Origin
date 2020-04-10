import React, {useState, useEffect} from 'react'
import Neuron from '../Neuron'

let brainStyles = {
  'display':'flex',
  'height':'100%',
  'margin':'0',
  'padding':'0',
}

export default function Brain(props) {
  /* STATE HOOKS */
  let [neuronCount, setNeuronCount] = useState(0)

  /* MASTER FUNCTIONS */
  function handleClick() {
    setNeuronCount(neuronCount + 1) 
  }

  /* VARIABLES */

  /* RETURN */
  return (
    <div style={{'display':'flex', 'height':'85%'}}>
      <div id='notebook'>
        <h1>notes</h1>

        <h2>every time (+) is clicked</h2>
        <ul>
          <li>figure out how to sync currTab with currBrain</li>
          <li>data storage???</li>
        </ul>
      </div>

      <div id='playground' style={brainStyles} onClick={handleClick}>
        <Neuron />
        {props.brainNumber}
      </div>
    </div>
  )
}

