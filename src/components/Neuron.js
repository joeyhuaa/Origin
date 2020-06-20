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
  liftTxt,
  theme
}) {

  /* STYLES */
  let lightStyles = {
    'position':'absolute',
    'left':pos.x,
    'top':pos.y,
    'margin':'0',
    'padding':'0',
    'backgroundColor':'#47476b',
    'height':'100px',
    'width':'100px',
    'border':'solid black 2px',
    'borderRadius':'50%',
    'fontSize':'20px',
    'outline':'none',
    'resize':'none',  
    'textAlign':'center',
    'verticalAlign':'middle',
    'cursor':'pointer'
  }
  let darkStyles = {...lightStyles, 'backgroundColor':'whitesmoke'}
  let lightHoverStyles = {...lightStyles, 'border':'solid #bfff80 6px'}
  let darkHoverStyles = {...darkStyles, 'border':'solid pink 6px'}

  /* HOOKS */
  let [neuronHovering, setNeuronHovering] = useState(false)
  let [content, setContent] = useState(passTxt) 

  useEffect(() => {
    liftTxt(content)
  })

  /* FUNCTIONS */
  function handleNeuronHover(isHovering) {
    setNeuronHovering(isHovering)
  }

  /* RENDER */
  return (
    <div
      style={theme ? 
        (neuronHovering ? darkHoverStyles : darkStyles) :
        (neuronHovering ? lightHoverStyles : lightStyles)
      } 
      onMouseEnter={() => handleNeuronHover(true)} 
      onMouseLeave={() => handleNeuronHover(false)}> 

      <div style={{'display':'flex'}}>
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
            src={Connect}
            alt='' />
        </Button>

        <Button 
          hovering={neuronHovering}
          clicked={onDelete}
          width={'33%'}>
          <img 
            height='10' 
            src={Delete}
            alt='' />
        </Button>
      </div>

      <TextArea 
        maxlength={20} 
        content={content} 
        liftTxt={txt => setContent(txt)} 
        showScroll={false}
        textAlign={'center'}
        placeholder={'Name me!'}
        fontColor={theme ? 'black' : 'whitesmoke'}
        />
    </div>
  )
}