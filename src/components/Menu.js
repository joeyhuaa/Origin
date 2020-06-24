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
  let [currTab, setCurrTab] = useState(null)

  useEffect(() => {
    onTabSelect(currTab)
  })

  /* FUNCTIONS */
  function handleAdd() {
    let newTabs = [...tabs]
    newTabs.push('tab')
    setTabs(newTabs)
    setTabCount(tabCount + 1)
    onButtonPress(tabCount) // callback to Parent
  }

  function handleDelete(i) {
    let newTabs = [...tabs]
    newTabs.splice(i, 1)
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
            key={`tab-${i}`}
            selected={i === currTab}
            styles={i === currTab ? tabSelectedStyles : tabDefaultStyles}
            handleClick={() => setCurrTab(i)}
            onDelete={e => {e.stopPropagation(); handleDelete(i)}}
          /> 
        )}
      </div>
    </div>
  )
}