import React from 'react'
import './Home.css'
import Slider from './Slider/Slider'
import CategorySlider from '../../component/catSlider/CategorySlider'
import Banner from '../../component/Banner/Banner'
import ProdcutCard from '../../component/product/ProdcutCard'

const Home = () => {
  return (
   <>
    <Slider/>
    <CategorySlider/>
    <Banner/>

    <section className="homeProduct">
      <div className="container-fluid">
      <div className='d-flex align-items-center'>
      <h2 className="hd mb-0 mt-0">Popular Product</h2>
      <ul className="list list-inline m-auto filterTab mb-0">
      <li className="list-inline-item">
        <a className="cursor">All</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">Milks & Dairies</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">Coffes & Teas</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">Pets Foods</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">Meats</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">Vegetables</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">Fruit</a>
      </li>

      </ul>

      </div>
      <div className=" productRow">
        <div className="item">
          <ProdcutCard tag="sale"/>
        </div>
        <div className="item">
          <ProdcutCard tag="hot"/>
        </div>
        <div className="item">
          <ProdcutCard tag='new'/>
        </div>
        <div className="item">
          <ProdcutCard tag='best'/>
        </div>
        <div className="item">
          <ProdcutCard/>
        </div> 
        <div className="item">
          <ProdcutCard tag="hot"/>
        </div>
        <div className="item">
          <ProdcutCard tag="sale"/>
        </div>
        <div className="item">
          <ProdcutCard tag='new'/>
        </div>
        <div className="item">
          <ProdcutCard tag='best'/>
        </div>
        <div className="item">
          <ProdcutCard tag="sale"/>
        </div> 
        <div className="item">
          <ProdcutCard tag='best'/>
        </div>
        <div className="item">
          <ProdcutCard tag="hot"/>
        </div>
        <div className="item">
          <ProdcutCard/>
        </div>
        <div className="item">
          <ProdcutCard tag='new'/>
        </div>
        <div className="item">
          <ProdcutCard tag="sale"/>
        </div> 
        <div className="item">
          <ProdcutCard/>
        </div>
        <div className="item">
          <ProdcutCard tag='new'/>
        </div>
        <div className="item">
          <ProdcutCard tag="hot"/>
        </div>
        <div className="item">
          <ProdcutCard tag="sale"/>
        </div>
        <div className="item">
          <ProdcutCard tag='best'/>
        </div>  


      </div>
      </div>
    </section>
   </>
  )
}

export default Home
