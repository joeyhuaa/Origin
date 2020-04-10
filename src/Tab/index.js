import React, { useState, useEffect } from 'react'

export default function Tab(props) {

  return (
    <div style={props.style} onClick={props.handleClick}>{props.tabNumber}</div>
  )
}

// when a Tab is clicked, the Menu's currTab state hook must switch to the Tab we clicked