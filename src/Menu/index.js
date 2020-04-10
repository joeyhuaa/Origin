import React, {useState, useEffect} from 'react'
import TabGroup from '../TabGroup'

/* STYLES */


export default function Menu(props) {
  /* HOOKS */
  let [tabCount, setTabCount] = useState(1)

  /* FUNCTIONS */

  // called directly when button is clicked
  function handleClick() {
    setTabCount(tabCount + 1)
  }

  // getTabKeys returns an array that can be MAPPED into Tab components
  function getTabKeys(numOfTabs) {    
    let keys = []
    for (let i = 1; i < numOfTabs + 1; i++ ) {keys[i] = i }
    return keys
  }

  /* RETURN */
  return (
    <div id='menu'>
      <button id='add-tab-button'
        onClick={() => {
          handleClick();
          props.onButtonPress()
        }}
      >
        +
      </button>
      <TabGroup tabKeys={getTabKeys(tabCount)} />
    </div>
  )
}