import React, {useState, useEffect} from 'react'
import Neuron from './Neuron'

/* STYLES */
let lineStyles = {
  'stroke':'rgb(255,0,0)', 
  'strokeWidth':'2'
}

export default function Brain({state, updateBrainState}) {
  /* HOOKS */
  let [neuronPos, setNeuronPos] = useState(state.neuronPos)
  let [neuronCt, setNeuronCt] = useState(state.neuronCt)
  let [linePos, setLinePos] = useState(state.linePos)
  let [lineCt, setLineCt] = useState(state.lineCt)

  let [mousePos, setMousePos] = useState({x:0, y:0})
  let [connecting, setConnecting] = useState([]) // will contain 2 Neurons max at any point in time

  useEffect(() => {
    // console log things
    console.log(neuronCt)
    console.log(neuronPos)

    // pass Brain state to App
    updateBrainState({
      neuronPos: neuronPos, 
      neuronCt: neuronCt, 
      linePos: linePos, 
      lineCt: lineCt
    })

    // reset connecting if needed
    if (connecting.length === 2) { setConnecting([]) }
  }, [neuronPos, neuronCt, linePos, lineCt, updateBrainState] )

  /* FUNCTIONS */

  function between(num, min, max) {
    return (num >= min && num <= max)
  }

  function handleMouseMove(e) {
    let brainDiv = document.getElementById('brain')
    let rect = brainDiv.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.x * 2, 
      y: e.clientY - rect.y * 2
    }) // change this later to use rectBounds
  }

  function handleClick() {
    let shouldAddNeuron = true
    for (let p of neuronPos) {
      if ( between(mousePos.x, p.x-120, p.x+120) && between(mousePos.y, p.y-120, p.y+120) ) {
        shouldAddNeuron = false
      }
    }

    if (shouldAddNeuron) {
      let newNeuronPos = neuronPos; newNeuronPos.push(mousePos)
      setNeuronPos(newNeuronPos)
      setNeuronCt(neuronCt + 1) 
    }
  }

  function handleConnect(index) {
    if (connecting.length === 0) {
      alert('connecting first Neuron')

      // add 1st Neuron to connecting, get startPoint for line
      let startPoint = neuronPos[index]

      // update connecting state
      let newConnecting = connecting; newConnecting.push(startPoint)
      setConnecting(newConnecting)

    } else if (connecting.length === 1) {
      alert('connecting second Neuron')

      // add 2nd Neuron to connecting, get endPoint for line
      let endPoint = neuronPos[index]

      // update connecting state
      let newConnecting = connecting; newConnecting.push(endPoint)
      setConnecting(newConnecting)

      // add the new line
      let newLinePos = linePos
      newLinePos.push({
        x1: connecting[0].x, 
        y1: connecting[0].y, 
        x2: connecting[1].x, 
        y2: connecting[1].y
      })
      setLinePos(newLinePos)
      setLineCt(lineCt + 1)
    }
  }

  function handleDelete(index) {
    // delete all lines that have an endpoint at neuronPos[index]
    // let pos = neuronPos[index]
    // let numDeleted = 0
    // let newLinePos = linePos
    // newLinePos.forEach((line, i) => {
    //   if (line.x1 === pos.x && line.y1 === pos.y) {
    //     newLinePos.splice(i, 1)
    //     numDeleted += 1
    //   }
    //   else if (line.x1 === pos.x && line.y2 === pos.y) {
    //     newLinePos.splice(i, 1)
    //     numDeleted += 1
    //   }
    // })
    // setLinePos(newLinePos)
    // setLineCt(lineCt - numDeleted)

    // console.log(index)
    // console.log(neuronPos)

    // delete neuronPos[index]
    let newNeuronPos = neuronPos
    newNeuronPos.splice(index, 1)
    setNeuronPos(newNeuronPos)
    setNeuronCt(neuronCt - 1)
  }

  let neurons = 
    <div>{neuronPos.map((point, i) => 
      <Neuron 
        pos={point} 
        key={i} 
        onConnect={() => handleConnect(i)} 
        onDelete={() => handleDelete(i)}
      />)}
    </div>

  let lines = 
    <svg width='100%' height='100%'>
      {linePos.map((pos, i) => 
        <line 
          key={i}
          x1={pos.x1} 
          y1={pos.y1} 
          x2={pos.x2}
          y2={pos.y2} 
          style={lineStyles} 
        />
      )}
    </svg>

  /* RETURN */
  return (
    <div
      id='brain'
      onClick={handleClick} 
      onMouseMove={handleMouseMove}
    >
      {neurons} 
      {lines}
    </div>
  )
}

