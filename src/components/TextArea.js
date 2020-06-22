import React, {useState, useEffect} from 'react'

export default function TextArea({
  content, 
  liftTxt,
  showScroll=true,
  maxChars,
  textAlign,
  placeholder,
  fontColor,
  wrap
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
    'color':fontColor,
    'textOverflow':'',
    'whiteSpace':wrap ? 'normal' : 'nowrap',
  }

  useEffect(() => {
    liftTxt(txt)
  })

  return (
    <textarea 
      maxLength={maxChars}
      placeholder={placeholder} 
      value={txt}
      style={textAreaStyles} 
      onChange={e => setTxt(e.target.value)} 
    />
  )
}