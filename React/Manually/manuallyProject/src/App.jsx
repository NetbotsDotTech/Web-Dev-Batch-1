import React from 'react'
import AllComponent from './component/AllComponentImport_Export/AllComponent'
import Button from './component/Button/Button'
const App = () => {
  return (
    <>

   <AllComponent/>
   <Button children='shop Now' type='submit'/>
 
    </>
  )
}

export default App
