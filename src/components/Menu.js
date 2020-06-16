import React, {useState, useEffect} from 'react'
import Tab from './Tab'

/* STYLES */
let tabGroupStyles = {
  'display':'flex',
  'overflowX':'auto',
}

let tabDefaultStyles = {
  'display':'flex',
  'width':'40em',
  'borderRight':'solid turquoise 1px',
  'justifyContent':'center',
  'alignItems':'center',
}

let tabSelectedStyles = {
  'display':'flex',
  'width':'40em',
  'borderRight':'solid turquoise 1px',
  'justifyContent':'center',
  'alignItems':'center',
  'backgroundColor':'bisque',
}

export default function Menu(props) {
  /* HOOKS */
  let [tabCount, setTabCount] = useState(0)
  let [currTab, setCurrTab] = useState()

  useEffect(() => {
    props.onButtonPress(tabCount) // callback to Parent
    props.onTabSelect(currTab) // callback to Parent
  })

  /* FUNCTIONS */

  // called directly when button is clicked
  function handleButtonClick() {
    setTabCount(tabCount + 1)
  }

  function handleTabClick(num) {
    setCurrTab(num)
  }

  // getTabKeys returns an array that can be MAPPED into Tab components
  function getTabKeys(numOfTabs) {   
    let keys = []
    for (let i = 1; i < numOfTabs + 1; i++ ) { keys[i] = i }
    return keys
  }

  /* RETURN */
  return (
    <div id='menu'>
      <button id='add-tab-button'
        onClick={handleButtonClick}>
        +
      </button>

      <div id='tab-group' style={tabGroupStyles}>
        {getTabKeys(tabCount).map(i => 
          <Tab 
            key={i}
            tabNumber={i} 
            style={i === currTab ? tabSelectedStyles : tabDefaultStyles}
            handleClick={() => handleTabClick(i)}
          /> 
        )}
      </div>
    </div>
  )
}