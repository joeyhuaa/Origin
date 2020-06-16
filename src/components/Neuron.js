import React, { useState, useEffect } from 'react'

import Connect from '../img/connect.png'
import Delete from '../img/x.png'
import Button from '../components/Button'
import TextArea from '../components/TextArea'

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

  let textAreaStyles = {
    'fontSize':'15px',
    'textAlign':'center',
    'background':'none',
    'border':'none',
    'height':'60%',
    'width':'75%',
    'overflow':'hidden',
    'resize':'none',
  }

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
        neuronHovering={neuronHovering}
        clicked={onEdit}
        width={'33%'}>
        <img 
          height='10' 
          src={Delete} 
        />
      </Button>          

      <Button 
        neuronHovering={neuronHovering}
        clicked={onConnect}
        width={'33%'}>
        <img 
          height='10' 
          src={Connect} 
        />
      </Button>

      <Button 
        neuronHovering={neuronHovering}
        clicked={onDelete}
        width={'33%'}>
        <img 
          height='10' 
          src={Delete} 
        />
      </Button>

      <TextArea content={content} liftTxt={txt => setContent(txt)} />

      {/* <textarea 
        placeholder='What are you thinking?' 
        style={textAreaStyles} 
        value={content}
        onChange={e => setContent(e.target.value)} /> */}

      {/* <input 
        type='text' 
        value={content} 
        onChange={e => setContent(e.target.value)} /> */}
    </div>
  )
}