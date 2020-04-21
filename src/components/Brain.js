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

export default function Brain(props) {
  /* HOOKS */
  // let [data, setData] = useState([])
  let [neuronPositions, setNeuronPositions] = useState([])
  let [neuronCount, setNeuronCount] = useState(0)
  let [linePositions, setLinePositions] = useState([])
  let [lineCount, setLineCount] = useState(0)

  let [mousePos, setMousePos] = useState({x:0, y:0})
  let [connecting, setConnecting] = useState([]) // will contain 2 Neurons max at any point in time

  useEffect(() => {
    // console.log(neuronPositions)
    console.log(linePositions)

    // reset connecting
    if (connecting.length === 2) setConnecting([])
  })

  /* FUNCTIONS */
  function between(num, min, max) {
    return (num >= min && num <= max)
  }

  function handleClick() {
    let shouldAddNeuron = true
    for (let p of neuronPositions) {
      if ( between(mousePos.x, p.x-120, p.x+120) && between(mousePos.y, p.y-120, p.y+120) ) {
        shouldAddNeuron = false
      }
    }

    if (shouldAddNeuron) {
      let newNeuronPositions = neuronPositions; newNeuronPositions.push(mousePos)
      setNeuronPositions(newNeuronPositions)
      setNeuronCount(neuronCount + 1) 
    }
  }

  function handleMouseMove(e) {
    setMousePos({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
  }

  function handleButtonClick(index) {
    if (connecting.length === 0) {
      alert('connecting first Neuron')

      // add 1st Neuron to connecting, get startPoint for line
      let startPoint = neuronPositions[index]

      // update connecting state
      let newConnecting = connecting; newConnecting.push(startPoint)
      setConnecting(newConnecting)
    } else if (connecting.length === 1) {
      alert('connecting second Neuron')

      // add 2nd Neuron to connecting, get endPoint for line
      let endPoint = neuronPositions[index]

      // update connecting state
      let newConnecting = connecting; newConnecting.push(endPoint)
      setConnecting(newConnecting)

      // add the new line
      let newLinePositions = linePositions
      newLinePositions.push({
        x1: connecting[0].x, 
        y1: connecting[0].y, 
        x2: connecting[1].x, 
        y2: connecting[1].y
      })
      setLinePositions(newLinePositions)
      setLineCount(lineCount + 1)
    }
  }

  let neurons = <div>{neuronPositions.map(
    (point, i) => <Neuron pos={point} key={i} onButtonClick={() => handleButtonClick(i)} />
  )}</div>

  let lines = <div>{linePositions.map(
    (point, i) => <svg width='5000' height='5000'>
                    <line 
                      key={i}
                      x1={point.x1-50} 
                      y1={point.y1+50} 
                      x2={point.x2-50}
                      y2={point.y2+50} 
                      style={lineStyles} />
                  </svg>
  )}</div>

  /* RETURN */
  return (
    <div style={containerStyles} onClick={handleClick} onMouseMove={handleMouseMove}>
      <div id='playground' style={brainStyles}>
        {/* <h3 style={{'margin':'5px'}}>{mousePos.x}, {mousePos.y}</h3> */}
        {neurons} 
        {lines}
        {/* <svg width='5000' height='5000' border='solid black 2px'>
          <line 
            x1={50} 
            y1={50} 
            x2={500}
            y2={500} 
            style={{'stroke':'rgb(255,0,0)', 'strokeWidth':'2'}} />
        </svg> */}
      </div>
    </div>
  )
}

