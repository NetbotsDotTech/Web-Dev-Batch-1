import React, { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Main from './component/MainComponent/Main'
import Greet from './component/Greet'
import JSXRule from './component/JSXRule'
import ProductInfo from './component/ProductInfo'
import Extra from './component/Extra'
import ArrayData from './component/ArrayData'
import Person from './component/Person'
import Product from './component/Product'
import Card from './Card'
import Weather from './component/Weather'
import UserStatus from './component/UserStatus'
import TimingWishes from './component/TimingWishes'
import StyleChallange from './component/StyleChallange'
import ButtonComp from './ButtonComp'
import State1 from './component/state/State1'
import State2 from './component/state/State2'
import State3 from './component/state/State3'
import State4 from './component/state/State4'
import State5 from './component/state/State5'
import State6 from './component/state/State6'
import State7 from './component/state/State7'
import State8 from './component/state/State8'

const App = () => {
  const [count ,setCount]=useState(0)
  return (
    <div>
      {/* <State6 count={count} handler={()=>setCount(count+1)}/>
      <State7 count={count} handler={()=>setCount(count-1)}/> */}
      <State8/>

    </div>
  )
}

export default App
