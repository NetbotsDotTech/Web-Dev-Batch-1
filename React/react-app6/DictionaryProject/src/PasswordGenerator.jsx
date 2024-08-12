import React, { useCallback, useEffect, useRef, useState } from 'react'
import './passwordGenerator.css'

const PasswordGenerator = () => {
    const [length,setlength]=useState(8)
    const [numberHave,setNumberHave]=useState(false)
    const [charHave,setCharhave]=useState(false)
    const [password,setPasssword]=useState("")
    const passwordRef=useRef(null)
    const passwordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberHave) str+="0123456789"
        if(charHave) str+="~!@`#$%^&*()_+=?|/.,"
        for (let i =1 ; i <length; i++){
            let char=Math.floor(Math.random()*str.length+1)

            pass +=str.charAt(char)
        }
        setPasssword(pass)
    },[length,numberHave,charHave,setPasssword])
    const copypasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,101)
        window.navigator.clipboard.writeText(password)
    },[password])
    useEffect(()=>{
        passwordGenerator() 
    },[length,numberHave,charHave,setPasssword])

  return (
    <div className='outerdiv'>
        <h2 className='h1'>PasswordGenerator</h2>
      <div className='innerdiv'>
        <input
         type="text"
         value={password}
         placeholder='Password'
         className='input'
         readOnly
         ref={passwordRef}
         />
         <button onClick={copypasswordToClipboard} className='btn'>
            Copy
         </button>
      </div>
      <div className="range">
        <input 
        type="range" 
        min={8}
        max={100}
        value={length}
        className='inputRange'
        onChange={(e)=>{setlength(e.target.value)}}
         />
         <label >Range: {length}</label>
         <input
         type="checkbox"
          defaultChecked={numberHave}
          onChange={()=>{
            setNumberHave((prev)=>!prev)
          }} 
          />
          <label >Numbers</label>
          <input
         type="checkbox"        
          defaultChecked={charHave}
          onChange={()=>{
            setCharhave((prev)=>!prev)
          }} 
          />
          <label >Character</label>

      </div>
      
        
      </div>
    
  )
}

export default PasswordGenerator
