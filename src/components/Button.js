import React, {useState, useEffect} from 'react'

export default function Button({
  children,
  neuronHovering, 
  clicked, 
  width
}) {
  let [buttonHovering, setHovering] = useState(false)

  useEffect(() => {
    // console.log('neuron hovering: ', neuronHovering)
    // console.log('button hovering: ', buttonHovering)
  })

  let buttonStyles = {
    'width':width,
    'backgroundColor':'whitesmoke',
    'borderRadius':'5%',
  }

  let buttonHoverStyles = {...buttonStyles, 'border':'solid black 2px'}

  function getButtonStyles() {
    if (neuronHovering && !buttonHovering)
      return buttonStyles
    else if (buttonHovering)
      return buttonHoverStyles
    else if (!neuronHovering && !buttonHovering)
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