import React, {useState, useEffect} from 'react'

let textAreaStyles = {
  'fontSize':'15px',
  'textAlign':'center',
  'background':'none',
  'border':'none',
  'height':'60%',
  'width':'75%',
  'overflow':'hidden',
  'resize':'none',
}

export default function TextArea({content, liftTxt}) {
  let [txt, setTxt] = useState(content)

  useEffect(() => {
    liftTxt(txt)
  })

  return (
    <textarea 
      placeholder='What are you thinking?' 
      value={txt}
      style={textAreaStyles} 
      onChange={e => setTxt(e.target.value)} />
  )
}