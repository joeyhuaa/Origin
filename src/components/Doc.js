import React, {useState, useEffect} from 'react'
import TextArea from './TextArea'

let styles = {
  'height':'100%',
  'width':'100%',
  'display':'block',
  'textAlign':'center'
}

export default function Doc({

}) {
  return (
    <div style={styles}>
      <TextArea 
        content={'hello!'}
        liftTxt={() => {}} />
    </div>
  )
}