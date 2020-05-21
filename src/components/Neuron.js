import React, { useState, useEffect } from 'react'

import Connect from '../img/connect.png'
import Delete from '../img/x.png'
import Button from '../components/Button'

export default function Neuron({
  pos,
  onConnect,
  onDelete
}) {

  /* STYLES */
  let containerStyles = {
    'display':'block',
  }

  let menuStyles = {
    'display':'flex',
    'position':'absolute',
    'left':pos.x + 75,
    'top':pos.y,
    'width':'5%',
    'height':'5%',
  }

  let circleStyles = {
    'position':'absolute',
    'left':pos.x,
    'top':pos.y,
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
  let [neuronHovering, setNeuronHovering] = useState(false)

  useEffect(() => {
    // console.log(neuronHovering)
  })

  /* FUNCTIONS */
  function handleNeuronHover(isHovering) {
    setNeuronHovering(isHovering)
  }

  /* RENDER */
  return (
    <div
      style={neuronHovering ? circleHoverStyles : circleStyles} 
      onMouseEnter={() => handleNeuronHover(true)} 
      onMouseLeave={() => handleNeuronHover(false)}           
    >
      {/* <textarea 
        style={neuronHovering || buttonHovering ? circleHoverStyles : circleStyles} 
        onMouseEnter={() => handleNeuronHover(true)} 
        onMouseOut={() => handleNeuronHover(false)}>
      </textarea> */}

      <Button 
        neuronHovering={neuronHovering}
        clicked={onConnect}
        img={
          <img 
            height='10' 
            src={Connect} 
          />
        }
      />
      <Button 
        neuronHovering={neuronHovering}
        clicked={onDelete}
        img={
          <img 
            height='10' 
            src={Delete} 
          />
        }
      />
    </div>
  )
}