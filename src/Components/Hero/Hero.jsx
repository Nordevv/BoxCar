import React from 'react'
import './Hero.css'
import VideoBg from "./181536-866999858_small.mp4"
export default function Hero() {
  return (
    <div className="HeroParent">
        <video className="background-video" autoPlay muted loop>
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="HeroChildren">
            <h4>Find Cars for sale and for rent near you</h4>
            <h1>Find Your Perfect Car</h1>
            <div className="search">
                <div className="SearchStatut">
                    <button>All</button>
                    <button>New</button>
                    <button>Used</button>
                </div>
                <div className="SearchAdvancedStatut">
                    <div className="mark">
                        <select name="options" id="dropdown">
                            <option value="1">All Marks</option>
                            <option value="2"> BMW</option>
                            <option value="3"> Renault</option>
                            <option value="4"> Peugeot</option>
                            <option value="4"> Mercedess</option>
                        </select>
                        </div>
                    <div className="model">
                        <select name="options" id="dropdown">
                            <option value="1">All Models</option>
                            <option value="2"> 2000-2010</option>
                            <option value="3"> 2011-2020</option>
                            <option value="4"> 2021-2025</option>
                        </select>
                    </div>
                    <div className="price">
                        <select name="options" id="dropdown">
                            <option value="1">All Prices</option>
                            <option value="2"> 10$ day - 20$ day</option>
                            <option value="2"> 20$ day - 40$ day</option>
                            <option value="2"> 40$ day - 50$ day</option>
                            <option value="2"> Hot Cars</option>
                        </select>
                    </div>
                    <div className="SetSearching">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <h6>Search <span> 9678 Cars</span> </h6>
                    </div>
                </div>
            </div>
            <h5 style={{color:'white',}} >Or Browse Our Featured Model</h5>
            <div className="FeaturedModel">
                <button>suv</button>
                <button>sedan</button>
                <button>hatchback</button>
                <button>coupe</button>
                <button>hybrid</button>
            </div>
            
        </div>
    </div>
  )
}
