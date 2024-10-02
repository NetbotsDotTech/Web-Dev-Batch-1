import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './page/Home/Home.jsx'
import About from './page/About/About.jsx'

const App = () => {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route exact={true} path='/' element={<Home/>} />
  <Route exact={true} path='/about' element={<About/>}/>
</Routes>

</BrowserRouter>      
  )
}

export default App
