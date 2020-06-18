import React from 'react'

export default function Slider() {

  let styles = {
    'margin':0,
    'padding':0,
    'paddingBottom':'1em',
    'display':'flex',
    'justifyContent':'center'
  }

  return (
    <div style={styles}>
      <label className='switch'>
        <input type='checkbox' />
        <span className='slider round'/>
      </label>
    </div>
  )
}