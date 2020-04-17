import React, { useState, useEffect } from 'react'
import NeuronChooser from './NeuronChooser'

export default function Neuron(props) {

  /* STYLES */

  let containerStyles = {
    'display':'block',
  }

  let circleStyles = {
    'position':'absolute',
    'left':props.pos.x,
    'top':props.pos.y,
    'margin':'0',
    'padding':'0',
    'backgroundColor':'#A1D363',
    'height':'130px',
    'width':'130px',
    'border':'solid black 2px',
    'borderRadius':'50%',
    'fontSize':'20px',
    'outline':'none',
    'resize':'none',  
    'textAlign':'center',
    'verticalAlign':'middle',
    'cursor':'pointer',
  }

  let circleHoverStyles = {...circleStyles, 'border':'solid pink 6px'}

  /* HOOKS */
  let [hovering, setHovering] = useState(false)

  useEffect(() => {
    console.log(hovering)
  })

  /* FUNCTIONS */

  /* RENDER */
  if (hovering)
    return (
      <div style={containerStyles}>
        <textarea style={circleHoverStyles} onMouseEnter={() => setHovering(true)} onMouseOut={() => setHovering(false)}></textarea>
        <NeuronChooser pos={props.pos}/>
      </div>
    )
  else
    return (
      <div style={containerStyles}>
        <textarea style={circleStyles} onMouseEnter={() => setHovering(true)} onMouseOut={() => setHovering(false)}></textarea>
      </div>
    )
}