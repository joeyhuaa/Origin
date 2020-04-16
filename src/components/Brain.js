import React, {useState, useEffect} from 'react'
import Neuron from './Neuron'

import ReactCursorPosition from 'react-cursor-position'

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

export default function Brain(props) {
  /* HOOKS */
  // let [data, setData] = useState([])
  let [posKeys, setPosKeys] = useState([])
  let [neuronCount, setNeuronCount] = useState(0)
  let [mousePos, setMousePos] = useState({x:0, y:0})

  useEffect(() => {
    // console.log(posKeys)
  })

  function between(num, min, max) {
    return (num >= min && num <= max)
  }

  /* FUNCTIONS */
  function handleClick() {
    let shouldAddNeuron = true
    for (let p of posKeys) {
      if ( between(mousePos.x, p.x-120, p.x+120) && between(mousePos.y, p.y-120, p.y+120) ) {
        // console.log(mousePos.x, p.x)
        // console.log(mousePos.y, p.y)
        shouldAddNeuron = false
      }
    }

    if (shouldAddNeuron) {
      let newPosKeys = posKeys; newPosKeys[neuronCount] = mousePos
      setPosKeys(newPosKeys)
      setNeuronCount(neuronCount + 1) 
    }

    console.log(posKeys)
  }

  function handleMouseMove(e) {
    setMousePos({x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY})
  }

  let neurons = <div>{posKeys.map(point => <Neuron pos={point} key={point.x} />)}</div>

  /* RETURN */
  return (
    <div style={containerStyles} onClick={handleClick} onMouseMove={handleMouseMove}>
      <div id='playground' style={brainStyles}>
        <h3 style={{'margin':'5px'}}>{mousePos.x}, {mousePos.y}</h3>
        {neurons}
      </div>
    </div>
  )
}

