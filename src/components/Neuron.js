import React, { useState, useEffect } from 'react'

import Connect from '../img/connect.png'
import Delete from '../img/x.png'
import Button from './Button'
import TextArea from './TextArea'

export default function Neuron({
  pos,
  onEdit,
  onConnect,
  onDelete,
  passTxt,
  liftTxt
}) {

  /* STYLES */
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
  let [content, setContent] = useState(passTxt) 

  useEffect(() => {
    liftTxt(content)
  }, [content])

  /* FUNCTIONS */
  function handleNeuronHover(isHovering) {
    setNeuronHovering(isHovering)
  }

  /* RENDER */
  return (
    <div
      style={neuronHovering ? circleHoverStyles : circleStyles} 
      onMouseEnter={() => handleNeuronHover(true)} 
      onMouseLeave={() => handleNeuronHover(false)}> 

      <Button 
        hovering={neuronHovering}
        clicked={onEdit}
        width={'33%'}>
          Edit
      </Button>          

      <Button 
        hovering={neuronHovering}
        clicked={onConnect}
        width={'33%'}>
        <img 
          height='10' 
          src={Connect} />
      </Button>

      <Button 
        hovering={neuronHovering}
        clicked={onDelete}
        width={'33%'}>
        <img 
          height='10' 
          src={Delete} />
      </Button>

      <TextArea 
        maxlength={40} 
        content={content} 
        liftTxt={txt => setContent(txt)} 
        showScroll={false}
        textAlign={'center'}
        placeholder={'Name me!'} />
    </div>
  )
}