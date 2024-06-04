import { useState } from "react"

export default function counter() {
    const [data , setData ] = useState('')
  return (
    <div>
        <p onClick={}>Increment </p>
        <p>{data}</p>
        <p>Decrement </p>

    </div>
  )
}
