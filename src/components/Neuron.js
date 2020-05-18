import React, { useState, useEffect } from 'react'

import Connect from '../img/connect.png'
import Delete from '../img/x.png'

export default function Neuron(props) {

  /* STYLES */
  let containerStyles = {
    'display':'block',
  }

  let menuStyles = {
    'display':'flex',
    'position':'absolute',
    'left':props.pos.x + 75,
    'top':props.pos.y,
    'width':'5%',
    'height':'5%',
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

  let buttonStyles = {
    'width':'50%',
    'backgroundColor':'whitesmoke',
    'borderRadius':'5%',
  }

  let buttonHoverStyles = {...buttonStyles, 'border':'solid black 2px'}

  /* HOOKS */
  let [neuronHovering, setNeuronHovering] = useState(false)
  let [buttonHovering, setButtonHovering] = useState(false)

  useEffect(() => {
  })

  /* FUNCTIONS */
  function handleNeuronHover(isHovering) {
    setNeuronHovering(isHovering)
  }

  function handleButtonHover(isHovering) {
    setButtonHovering(isHovering)
  }

  function getButtonStyles() {
    if (neuronHovering && !buttonHovering)
      return buttonStyles
    else if (buttonHovering)
      return buttonHoverStyles
    else if (!neuronHovering && !buttonHovering)
      return {'visibility':'hidden'}
  }

  /* RENDER */
  return (
    <div style={containerStyles}>
      <textarea 
        style={neuronHovering || buttonHovering ? circleHoverStyles : circleStyles} 
        onMouseEnter={() => handleNeuronHover(true)} 
        onMouseOut={() => handleNeuronHover(false)}>
      </textarea>

      <div style={menuStyles}>
        <button 
          style={getButtonStyles()} 
          onMouseEnter={() => handleButtonHover(true)} 
          onMouseOut={() => handleButtonHover(false)}
          onClick={props.onConnect}
        >
          <img height='10' src={Connect} onMouseEnter={() => handleButtonHover(true)} />
        </button>
        <button
          style={getButtonStyles()}
          onMouseEnter={() => handleButtonHover(true)} 
          onMouseOut={() => handleButtonHover(false)}
          onClick={props.onDelete}
        >
          <img height='10' src={Delete} onMouseEnter={() => handleButtonHover(true)} />
        </button>
      </div>
    </div>
  )
}