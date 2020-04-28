import React, {useState, useEffect} from 'react'
import Neuron from './Neuron'

/* STYLES */
let containerStyles = {
  'display':'flex', 
  'height':'85%', 
  'border':'solid purple 3px'
}

let brainStyles = {
  'display':'flex',
  'height':'100%',
  'width':'100%',
  'margin':'0',
  'padding':'0',
}

let lineStyles = {
  'stroke':'rgb(255,0,0)', 
  'strokeWidth':'2'
}

export default function Brain({data, updateNeurons, updateLines, onMouseMove}) {
  // let [neuronPos, setNeuronPos] = useState(data.neuronPos)
  // let [neuronCt, setNeuronCt] = useState(data.neuronCt)
  // let [linePos, setLinePos] = useState(data.linePos)
  // let [lineCt, setLineCt] = useState(data.lineCt) 

  useEffect(() => {
  })

  /* FUNCTIONS */

  function handleClick() {
    updateNeurons() // update App state 
  }

  function handleConnect(index) {
    updateLines(index) // update App state
  }

  let neurons = 
    <div>
      {data.neuronPos.map((point, i) => 
        <Neuron pos={point} key={i} onButtonClick={() => handleConnect(i)} />
      )}
    </div>

  let lines = 
    <svg width='5000' height='5000'>
      {data.linePos.map((pos, i) => 
        <line 
          key={i}
          x1={pos.x1 - 50} 
          y1={pos.y1 + 50} 
          x2={pos.x2 - 50}
          y2={pos.y2 + 50} 
          style={lineStyles} 
        />
      )}
    </svg>

  /* RETURN */
  return (
    <div style={containerStyles} onClick={handleClick} onMouseMove={onMouseMove}>
      <div id='playground' style={brainStyles}>
        {neurons} 
        {lines}
      </div>
    </div>
  )
}

// whenever handleClick is called 

