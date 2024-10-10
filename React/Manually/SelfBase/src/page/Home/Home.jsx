import React from 'react'
import './Home.css'
import SliderBanner from './Slider/Slider'
import Slider from 'react-slick'; 
import CategorySlider from '../../component/catSlider/CategorySlider'
import Banner from '../../component/Banner/Banner'
import ProdcutCard from '../../component/product/ProdcutCard'
import banner4 from '../../assets/images/slider/banner4.jpeg'
import img from '../../assets/images/slider/product.jpeg'
import TopProducts from './TopProduct/TopProducts';
import personImage from '../../assets/images/slider/per.jpeg'
import InputTag from '../../component/InputInSlider/InputTag';
import Footer from '../../component/Footer/Footer';


const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    fade:false
  };
  return (
   <>
    <SliderBanner/>
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

    <section className="homeProduct homeProdcutSlider pt-0">
      <div className="container-fluid">
      <div className='d-flex align-items-center'>
      <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
      <ul className="list list-inline m-auto filterTab mb-0">
      <li className="list-inline-item">
        <a className="cursor">Featured</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">Popular</a>
      </li>
      <li className="list-inline-item">
        <a className="cursor">New Added </a>
      </li>
      </ul>

      </div>
      <br />

      <div className="row">
        <div className="col-sm-3 pr-5">
          <img src={banner4} alt="" className='w-100 h-100' />
        </div>
        <div className="col-md-9">
        <Slider {...settings} className='productSlider'>
          <div className="item">
          <ProdcutCard tag="sale"/>

          </div>
          <div className="item">
          <ProdcutCard tag="new"/>

          </div>

          <div className="item">
          <ProdcutCard tag="hot"/>

          </div>

          <div className="item">
          <ProdcutCard tag="best"/>

          </div>





   </Slider>
        </div>
      </div>
    
      </div>
    </section>

    <section className="topProductSection">
      <div className="container-fluid">
      <div className="row">
        <div className="col">
         <TopProducts title="Top Selling"/>
        </div>
        <div className="col">
        <TopProducts title="Trending Products "/>


        </div>
        <div className="col">
        <TopProducts title="Recently Added"/>


        </div>
        <div className="col">
        <TopProducts title="Top Rated"/>


        </div>
      </div>

      </div>
    </section>
    <section className="newsliderSection">
      <div className="container-fluid">
        <div className="box d-flex align-items-center">
          <div className="info">
            <h2>Stay Home & get Daily needs  from our shop </h2>
            <p>Start your's daily shopping with Nest Mart</p>

          </div>
          <div className="img">
            <img src={personImage} alt="" className='w-100' />
            <InputTag/>
          </div>

        </div>
      </div>
    </section>
    <Footer/>


   </>
  )
}

export default Home
