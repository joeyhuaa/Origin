import React, {useState, useEffect} from 'react'

export default function Button({
  children,
  hovering, 
  clicked, 
  width,
  float
}) {
  let [buttonHovering, setHovering] = useState(false)

  useEffect(() => {
  })

  let buttonStyles = {
    'width':width,
    'backgroundColor':'whitesmoke',
    'borderRadius':'5%',
    'float':float,
    'fontSize':11,
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center'
  }

  let buttonHoverStyles = {...buttonStyles, 'border':'solid black 2px'}

  function getButtonStyles() {
    if (hovering && !buttonHovering)
      return buttonStyles
    else if (buttonHovering)
      return buttonHoverStyles
    else if (!hovering && !buttonHovering)
      return {'visibility':'hidden'}
  }

  return (
    <button 
      style={getButtonStyles()} 
      onClick={clicked}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}>
        {children}
    </button>
  )
}