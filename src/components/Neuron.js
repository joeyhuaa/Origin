import React, { useState, useEffect } from 'react'

export default function Neuron(props) {

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

  let circleSelectedStyles = {...circleStyles, 'border':'solid pink 6px'}

  /* HOOKS */
  let [hovering, setHovering] = useState(false)

  useEffect(() => {
    console.log(hovering)
  })

  let handleHover = () => {
    setHovering(!hovering)
  }

  /* TEST */
  let testStyles = {
    'position':'absolute', 'left':props.pos.x, 'top':props.pos.y, 'border':'solid green 3px'
  }

  let testHoverStyles = {...testStyles, 'border':'solid blue 3px'}

  // this circle will be rendered whenever a mouse click event occurs in Brain
  return (
    // <div style={hovering ? circleSelectedStyles : circleStyles} onMouseEnter={handleHover} onMouseOut={handleHover}>
    //   <div className='max-lines' contentEditable='true' style={textAreaStyles}></div>
    // </div>
    <div contentEditable>
      {/* <svg height='150' width='150' style={hovering ? circleSelectedStyles : circleStyles}>
      </svg> */}
      <textarea style={hovering ? circleSelectedStyles : circleStyles} onMouseEnter={handleHover} onMouseOut={handleHover}></textarea>
    </div>
  )
}