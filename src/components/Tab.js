import React from 'react'

export default function Tab({
  style,
  handleClick,
  tabNumber
}) {

  return (
    <div style={style} onClick={handleClick}>{tabNumber}</div>
  )
}

// when a Tab is clicked, the Menu's currTab state hook must switch to the Tab we clicked