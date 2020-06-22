import React, {useState, useEffect} from 'react';
import Tab from './Tab';

/* STYLES */
let menuStyles = {
  'display':'flex',
  'overflowX':'auto',
}

let tabDefaultStyles = {
  'display':'flex',
  'borderRight':'solid turquoise 1px',
}

let tabSelectedStyles = {...tabDefaultStyles, 'backgroundColor':'bisque',}

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
    <div id='menu' style={menuStyles}>
      <button id='add-tab-button'
        onClick={handleButtonClick}>
        +
      </button>

      <div id='tab-group' style={menuStyles}>
        {getTabKeys(tabCount).map(i => 
          <Tab 
            key={`tab-${i}`}
            tabNumber={i} 
            selected={i === currTab}
            styles={i === currTab ? tabSelectedStyles : tabDefaultStyles}
            handleClick={() => handleTabClick(i)}
          /> 
        )}
      </div>
    </div>
  )
}