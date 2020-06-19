import React, {useState, useEffect} from 'react'

export default function Slider({onToggle}) {

  let [state, setState] = useState(0)

  useEffect(() => {
    onToggle(state)
  })

  let styles = {
    'margin':0,
    'padding':0,
    'paddingBottom':'1em',
    'display':'flex',
    'justifyContent':'center'
  }

  function handleChange() {
    if (state === 0) 
      setState(1)
    else
      setState(0)
  }

  return (
    <div style={styles}>
      <label className='switch'>
        <input type='checkbox' onChange={handleChange} />
        <span className='slider round'/>
      </label>
    </div>
  )
}