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

export default function Brain({data, getBrainData}) {
  /* HOOKS */
  let [neuronPositions, setNeuronPositions] = useState(data.neuronPos)
  let [neuronCount, setNeuronCount] = useState(data.neuronCt)
  let [linePositions, setLinePositions] = useState(data.linePos)
  let [lineCount, setLineCount] = useState(data.lineCt)

  let [mousePos, setMousePos] = useState({x:0, y:0})
  let [connecting, setConnecting] = useState([]) // will contain 2 Neurons max at any point in time

  useEffect(() => {
    // pass updated Brain data to App
    getBrainData({
      neuronPos: neuronPositions, 
      neuronCt: neuronCount, 
      linePos: linePositions, 
      lineCt: lineCount
    })

    // reset connecting
    if (connecting.length === 2) { setConnecting([]) }
  }, [neuronPositions, neuronCount, linePositions, lineCount, connecting.length, getBrainData])

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

  function handleConnect(index) {
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

  let neurons = 
    <div>{neuronPositions.map((point, i) => 
      <Neuron pos={point} key={i} onButtonClick={() => handleConnect(i)} />)}
    </div>

  let lines = 
    <svg width='5000' height='5000'>{linePositions.map((pos, i) => 
      <line 
        key={i}
        x1={pos.x1 - 50} 
        y1={pos.y1 + 50} 
        x2={pos.x2 - 50}
        y2={pos.y2 + 50} 
        style={lineStyles} 
      />)}
    </svg>

  /* RETURN */
  return (
    <div style={containerStyles} onClick={handleClick} onMouseMove={handleMouseMove}>
      <div id='playground' style={brainStyles}>
        {neurons} 
        {lines}
      </div>
    </div>
  )
}

