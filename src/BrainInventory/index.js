import React, { useState } from 'react'
import Brain from '../Brain'

let brainInvStyles = {
  'height':'85%',
  // 'border':'solid 2px red',
}

// this for now will just hold the number of brains
// later on will implement data storage 
export default function BrainInventory(props) {

  return (
    // render only the most RECENT Brain
    <div style={brainInvStyles}>
      {
        props.numOfBrains.map(x => <Brain brainNumber={x}/>)[props.numOfBrains.length - 1]
      }
    </div>
  )
}