import React, { useState, useEffect } from 'react'
import Tab from '../Tab'

/* costco media query */
// implement side scrolling???

let tabGroupStyles = {
  'display':'flex',
  'overflowX':'auto',
}

let tabDefaultStyles = {
  'display':'flex',
  'width':'40em',
  'borderRight':'solid turquoise 1px',
  'justifyContent':'center',
}

let tabSelectedStyles = {
  'display':'flex',
  'width':'40em',
  'borderRight':'solid turquoise 1px',
  'justifyContent':'center',
  'backgroundColor':'bisque',
}

export default function TabGroup(props) {
  let [currTab, setCurrTab] = useState(1)

  useEffect(() => {
    console.log('you are on tab', currTab)
  })

  function updateCurrTab(num) {
    setCurrTab(num)
  }

  function getTabs(keys) {
    return keys.map(x => 
      <Tab 
        tabNumber={x} 
        style={x === currTab ? tabSelectedStyles : tabDefaultStyles}
        handleClick={() => updateCurrTab(x)}
      /> 
    )
  }

  return (
    <div style={tabGroupStyles}>{getTabs(props.tabKeys)}</div>
  )
}