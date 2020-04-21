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

  let chooserStyles = {
    'position':'absolute',
    'left':props.pos.x + 75,
    'top':props.pos.y,
    'width':'5%',
    'height':'5%',
    'backgroundColor':'whitesmoke',
    'borderRadius':'5%',
  }

  let chooserHoverStyles = {...chooserStyles, 'border':'solid black 2px'}

  /* HOOKS */
  let [neuronHovering, setNeuronHovering] = useState(true)
  let [chooserHovering, setChooserHovering] = useState(false)

  useEffect(() => {})

  /* FUNCTIONS */

  function handleNeuronHover(isHovering) {
    setNeuronHovering(isHovering)
  }

  function handleChooserHover(isHovering) {
    setChooserHovering(isHovering)
  }

  function getChooserStyles() {
    if (neuronHovering && !chooserHovering)
      return chooserStyles
    else if (!neuronHovering && chooserHovering)
      return chooserHoverStyles
    else if (!neuronHovering && !chooserHovering)
      return {'visibility':'hidden'}
  }

  /* RENDER */
  return (
    <div style={containerStyles}>
      <textarea 
        style={neuronHovering || chooserHovering ? circleHoverStyles : circleStyles} 
        onMouseEnter={() => handleNeuronHover(true)} 
        onMouseOut={() => handleNeuronHover(false)}>
      </textarea>
      <div 
        style={getChooserStyles()} 
        onMouseEnter={() => handleChooserHover(true)} 
        onMouseOut={() => handleChooserHover(false)}>
      </div>
    </div>
  )
}