import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>

          <div className="home__row">
            <Product id="121948" title="A Game of Thrones: Book 1 (A Song of Ice and Fire)" price={750.00} image="https://images-eu.ssl-images-amazon.com/images/I/51DtMBkJTRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" rating={4}/>
            <Product id="146848" title="New Apple iPhone 12 (128GB) - Green" price={72999.00} image="https://images-na.ssl-images-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg" rating={5}/>
          </div>

          <div className="home__row">
            <Product id="184138" title="Sony a7 III Full-Frame Mirrorless Interchangeable-Lens Camera (with 28-70mm F3.5-5.6 OSS Lens)" price={169990.00} image="https://images-na.ssl-images-amazon.com/images/I/91rQ3XfEYzL._SL1500_.jpg" rating={5}/>
            <Product id="844314" title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)" price={21990.00} image="https://images-na.ssl-images-amazon.com/images/I/614-yYoVkUL._SL1500_.jpg" rating={4}/>
            <Product id="288544" title="Bose Sport Earbuds - True Wireless Earphones (Bluetooth Headphones for Workouts and Sports), Baltic Blue" price={17990.00} image="https://images-na.ssl-images-amazon.com/images/I/51Q3-%2BBr7KS._SL1500_.jpg" rating={4}/>

          </div>

          <div className="home__row">
            <Product id="841346" title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA (Black)" price={36999.00} image="https://images-na.ssl-images-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg" rating={5}/>


          </div>

      </div>
    </div>
  )
}

export default Home
