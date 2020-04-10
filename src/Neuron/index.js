import React from 'react'

let circleStyle = {
  'borderRadius':'50%',
  'width':'100px',
  'height':'100px',
  'backgroundColor':'#A1D363'
}

export default function Neuron() {
  // this circle will be rendered whenever a mouse click event occurs in NoteBook
  return (
    <div style={circleStyle}></div>
  )
}