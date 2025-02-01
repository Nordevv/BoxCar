import React from 'react'
import './Brands.css'
export default function Brands() {
  return (
    <div className="brands">
        <div className="tools">
            <h1>Explore Our Premium Brand</h1>
            <h3>Show All Brands <i class="fa-solid fa-arrow-up"></i></h3>
        </div>
        <div className="AllBrands">
            <div className="brand">
                <img src="https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png" alt="" />
                <h4>AUDI</h4>
            </div>
            <div className="brand">
                <img src="https://download.logo.wine/logo/BMW_India/BMW_India-Logo.wine.png" alt="" />
                <h4>BMW</h4>
            </div>
            <div className="brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png" alt="" />
                <h4>FORD</h4>
            </div>
            <div className="brand">
                <img src="https://pngimg.com/d/renault_PNG45.png" alt="" />
                <h4>RENAULT</h4>
            </div>
            <div className="brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1024px-Mercedes-Logo.svg.png" alt="" />
                <h4>MERCEDESS</h4>
            </div>
            <div className="brand">
                <img src="https://www.logo-voiture.com/wp-content/uploads/2021/01/Logo-Peugeot.png" alt="" />
                <h4>PEUGOT</h4>
            </div>
        </div>
    </div>
  )
}
