import React, {useState, useEffect} from 'react'

export default function TextArea({
  content, 
  liftTxt,
  showScroll,
  maxlength
}) {
  let [txt, setTxt] = useState(content)

  let textAreaStyles = {
    'fontSize':'15px',
    'textAlign':'center',
    'background':'none',
    'border':'none',
    'height':'100%',
    'width':'75%',
    'overflow': showScroll ? 'auto' : 'hidden',
    'resize':'none',
    'outline':'none'
  }

  useEffect(() => {
    liftTxt(txt)
  })

  return (
    // <div style={{'height':'100%'}}>
      <textarea 
        maxLength={maxlength}
        placeholder='What are you thinking?' 
        value={txt}
        style={textAreaStyles} 
        onChange={e => setTxt(e.target.value)} />
    // </div>
  )
}