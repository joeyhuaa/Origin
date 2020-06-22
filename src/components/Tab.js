import React, {useState, useEffect} from 'react';
import TextArea from './TextArea';

export default function Tab({
  styles,
  handleClick,
  tabNumber,
  selected
}) {

  let [label, setLabel] = useState('')

  return (
    <div 
      className='tab'
      style={styles} 
      onClick={handleClick}
    >
      {selected ? 
        <div style={{'minWidth':'50px'}}>
          <TextArea 
            maxChars={20}
            placeholder={`Tab ${tabNumber}`}
            showScroll={false}
            liftTxt={txt => setLabel(txt)}
            content={label}
          />
        </div>
        :
        <div 
          style={{
            ...styles, 
            'textOverflow':'ellipsis',
            'overflow':'hidden',
            'whiteSpace':'nowrap',
            'maxWidth':'50px',
            'minWidth':'50px',
            'fontSize':'15px'
          }}
        >
          {label === '' ? `Tab ${tabNumber}` : label}
        </div>
      }
    </div>
  )
}