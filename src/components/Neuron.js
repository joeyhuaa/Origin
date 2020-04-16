import React from 'react'

export default function Neuron(props) {
  let circleStyles = {
    'border':'solid black 2px',
    'borderRadius':'50%',
    'width':'130px',
    'height':'130px',
    'backgroundColor':'#A1D363',
    'position':'absolute',
    'left':props.pos.x,
    'top':props.pos.y,
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center'
  }

  let textAreaStyles = {
    'margin':'0',
    'padding':'0',
    'backgroundColor':'transparent',
    'height':'100%',
    'width':'100%',
    'border':'none',
    'borderRadius':'50%',
    'fontSize':'20px',
    'outline':'none',
    'resize':'none',  
    'textAlign':'center',
    'verticalAlign':'middle',
  }

  // this circle will be rendered whenever a mouse click event occurs in Brain
  return (
    <div style={circleStyles}>
      <div className='max-lines' contentEditable='true' style={textAreaStyles}></div>
    </div>
  )
}