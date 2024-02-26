import React, { useState } from 'react'



const useInputHook = (type:string, name:string) => {
  const [value, setValue] = useState("");

 return (
    <>
        <label htmlFor={type}>{name.toUpperCase()}</label>
        <input type={type} value={value} onChange={(e) => setValue(e.target.value)} id={type}/>
    </>
 )
}

export default useInputHook