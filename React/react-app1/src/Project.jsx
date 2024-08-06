import React from 'react'
import "./project.css"

const Project = () => {
  return (
    <>
      <div class="container">
        <nav>
            <img src=".//img3.png" alt="Logo" class="Logo"/>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Recipe</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>


            </ul>
            <img src="./img4.png" alt="meun-logo" class="meun-logo"/>
        </nav>
        <div class="row">
            <div class="col">
                <h1>All happiness depend on a leisurely breakfast</h1>
                <a href="3">Order Now</a>
            </div>
            <div class="col">
                <img src="/img1.png" alt="" class="bodyimg"/>
                <img src="/img2.png" alt="" class="bodyimg1"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project
