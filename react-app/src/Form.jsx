import React,{useState}  from 'react'

export const Form = () => {
    const [name, setName] = useState('');
const handleForm = (e)=>{
    setName(e.target.value)
}
  return (

    <React.Fragment>
    <div>Form</div>
    <label >Name</label>s
    <input onChange={handleForm}/>
    <button onClick={()=>{alert(name)}}>Show Name</button>
  
    </React.Fragment>
  )
}
