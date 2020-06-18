import React, {useState} from 'react'
import TextArea from './TextArea'
import Button from './Button'
import Exit from '../img/x.png'

let divStyles = {
  'height':'100%',
  'width':'100%',
  'display':'block',
  'textAlign':'center'
}

export default function Doc({
  content,
  onExit
}) {

  let [txt, setTxt] = useState(content)

  return (
    <div style={divStyles}>
      <Button 
        hovering={() => {}}
        clicked={() => onExit(txt)}
        width={'2.5%'}
        float={'right'}>
        <img 
          height='10' 
          src={Exit} />
      </Button>

      <TextArea 
        content={txt}
        liftTxt={txt => setTxt(txt)} 
        showScroll={true}
        textAlign={'left'}
        placeholder={'What are you thinking?'} />
    </div>
  )
}