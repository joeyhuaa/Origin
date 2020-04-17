import React, { useState, useEffect } from 'react'

export default (props) => {

  /* STYLES */
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
  let [hovering, setHovering] = useState(false)

  /* FUNCTIONS */
  let handleHover = () => { setHovering(!hovering) }

  useEffect(() => {})

  return (
    <div style={hovering ? chooserHoverStyles : chooserStyles} onMouseEnter={handleHover} onMouseOut={handleHover}></div>
  )

}