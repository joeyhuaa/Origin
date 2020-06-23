import React, {useState, useEffect} from 'react';
import Tab from './Tab';

/* STYLES */
let menuStyles = {
  'display':'flex',
  'overflowX':'scroll',
  'overflowY':'hidden'
}

let tabDefaultStyles = {
  'display':'flex',
  'borderRight':'solid turquoise 1px',
}

let tabSelectedStyles = {...tabDefaultStyles, 'backgroundColor':'bisque',}

export default function Menu({
  onButtonPress,
  onTabSelect,
}) {
  /* HOOKS */
  let [tabs, setTabs] = useState([])
  let [tabCount, setTabCount] = useState(0)
  let [currTab, setCurrTab] = useState()

  useEffect(() => {
    onButtonPress(tabCount) // callback to Parent
    onTabSelect(currTab) // callback to Parent

    // console.log(`You are on tab ${currTab}`)
  })

  /* FUNCTIONS */
  function handleAdd() {
    let newTabs = [...tabs]
    newTabs.push('tab')
    setTabs(newTabs)
    setTabCount(tabCount + 1)
  }

  function handleDelete(i) {
    let newTabs = [...tabs]
    newTabs.splice(i, 1)
    console.log(`Tab ${i} deleted...`)
    setTabs(newTabs)
    setTabCount(tabCount - 1)
    setCurrTab(null) // not working
  }

  /* RETURN */
  return (
    <div id='menu' style={menuStyles}>
      <button id='add-tab-button'
        onClick={handleAdd}
      >
        +
      </button>

      <div id='tab-group' style={menuStyles}>
        {tabs.map((_, i) => 
          <Tab 
            key={`tab-${i+1}`}
            selected={i+1 === currTab}
            styles={i+1 === currTab ? tabSelectedStyles : tabDefaultStyles}
            handleClick={() => setCurrTab(i+1)}
            onDelete={() => handleDelete(i)}
          /> 
        )}
      </div>
    </div>
  )
}