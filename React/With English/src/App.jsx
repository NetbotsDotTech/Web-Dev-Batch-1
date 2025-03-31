import React, { useState } from 'react'
import './App.css'
import Navigation from './navigation/Nav'
import Product from './products/Product'
import Recommended from './recommended/Recommended'
import SideBar from './sidebar/SideBar'
//import Data from local Database means in a db file
import dummyProducts from './db/data'
import Cart from './component/Cart'



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  //-----------------Input filter------------------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }
  const filteredItems = dummyProducts.filter((product) => {

    product.title.toLocaleUpperCase().indexOf(query.toLocaleLowerCase()) !== -1
  })
  //-----------------Radio filter------------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }
  //-----------------Buttons filter------------------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  const filteredData = (product, selected, query) => {
    let filteredProducts = product;

    // filtering input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    // Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, title, company, newPrice }) =>
          category === selected ||
          color === selected ||
          title === selected ||
          company === selected ||
          newPrice === selected
      )
    }
    return filteredProducts.map(({id,images,title,star,prevPrice,newPrice,reviews})=>(
      <Cart
      key={id}
      image={images}
      title={title}
      star={star}
      newPrice={newPrice}
      prevPrice={prevPrice}
      reviews={reviews}
     
      />

    ))
    

  }
  

  const result=filteredData(dummyProducts,selectedCategory,query)




  return (
    <div>
      <SideBar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
     

    </div>
  )
}

export default App
