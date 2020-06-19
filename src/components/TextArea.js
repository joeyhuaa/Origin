import React, {useState, useEffect} from 'react'

export default function TextArea({
  content, 
  liftTxt,
  showScroll,
  maxlength,
  textAlign,
  placeholder,
  fontColor
}) {
  let [txt, setTxt] = useState(content)

  let textAreaStyles = {
    'fontSize':'15px',
    'textAlign':textAlign,
    'background':'none',
    'border':'none',
    'height':'100%',
    'width':'75%',
    'overflow':showScroll ? 'auto' : 'hidden',
    'resize':'none',
    'outline':'none',
    'color':fontColor
  }

  useEffect(() => {
    liftTxt(txt)
  })

  return (
    // <div style={{'height':'100%'}}>
      <textarea 
        maxLength={maxlength}
        placeholder={placeholder} 
        value={txt}
        style={textAreaStyles} 
        onChange={e => setTxt(e.target.value)} />
    // </div>
  )
}