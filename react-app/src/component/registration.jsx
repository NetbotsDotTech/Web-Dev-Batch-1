import React from 'react'

export const Registration = () => {
  return (
    <>
    <form action="Registration">
      <h3>Registration form</h3>
      <br /><br />
      <label htmlFor="First Name">First Name:</label>
      <input type="text" />
      <br /><br />
      <label htmlFor="Last Name">Last Name:</label>
      <input type="text" />
      <br /><br />
      <label htmlFor="phone">phone no:</label>
      <input type="phone" />
      <br /><br />
      <button>click me!</button>
    </form>
    </>
  )
}

export const ThirdComponet = () => {
  return (
    <div>ThirdComponet</div>
  )
}
