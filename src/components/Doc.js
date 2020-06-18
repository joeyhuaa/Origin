import React, {useState, useEffect} from 'react'
import TextArea from './TextArea'
import Button from './Button'
import Exit from '../img/x.png'

let divStyles = {
  'height':'100%',
  'width':'100%',
  'display':'block',
  'textAlign':'center'
}

export default function Doc({
  onExit
}) {
  return (
    <div style={divStyles}>
      <Button 
        hovering={() => {}}
        clicked={onExit}
        width={'2.5%'}
        float={'right'}>
        <img 
          height='10' 
          src={Exit} />
      </Button>

      <TextArea 
        liftTxt={() => {}} 
        showScroll={true} />
    </div>
  )
}