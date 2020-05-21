import React, { useState, useEffect } from 'react'

import Connect from '../img/connect.png'
import Delete from '../img/x.png'
import Button from '../components/Button'

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
    // console.log(neuronHovering)
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
  // return (
  //   <div 
  //     style={neuronHovering || buttonHovering ? circleHoverStyles : circleStyles} 
  //     onMouseEnter={() => handleNeuronHover(true)}
  //     onMouseLeave={() => handleNeuronHover(false)}
  //   >
  //     <Button 
  //       neuronHovering={neuronHovering}
  //     />
  //     <Button 
  //       neuronHovering={neuronHovering}
  //     />
  //   </div>
  // )
  return (
    <div
      style={neuronHovering || buttonHovering ? circleHoverStyles : circleStyles} 
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
        img={
          <img 
            height='10' 
            src={Connect} 
          />
        }
      />
      <Button 
        neuronHovering={neuronHovering}
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