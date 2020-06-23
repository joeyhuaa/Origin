import React, {useState} from 'react';
import TextArea from './TextArea';
import Button from './Button';
import Delete from '../img/x.png';

export default function Tab({
  styles,
  handleClick,
  selected,
  onDelete
}) {

  let [label, setLabel] = useState('')
  let [hovering, setHovering] = useState(false)

  return (
    <div 
      className='tab'
      style={styles} 
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {selected ? 
        <div style={{'minWidth':'50px'}}>
          <TextArea 
            maxChars={20}
            placeholder={'Untitled'}
            showScroll={false}
            liftTxt={txt => setLabel(txt)}
            content={label}
          />
        </div>
        :
        <div 
          style={{
            'textOverflow':'ellipsis',
            'overflow':'hidden',
            'whiteSpace':'nowrap',
            'maxWidth':'50px',
            'minWidth':'50px',
            'fontSize':'15px'
          }}
        >
          {label === '' ? 'Brain' : label}
        </div>
      }
      <div>
        <Button
          hovering={hovering}
          clicked={onDelete}
          width={'10%'}
          float={'right'}>
          <img 
            height='10' 
            src={Delete}
            alt='' />
        </Button>
      </div>
    </div>
  )
}