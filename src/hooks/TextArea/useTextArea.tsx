import React, { useState } from 'react'

type Props = {}

const useTextArea = () => {
    const [value, setValue] = useState("")
  return (
      <>
          <label htmlFor={"message"}>Message</label>
          <textarea value={value} onChange={(e) => setValue(e.target.value)} id={"message"} />
      </>
  )
}

export default useTextArea