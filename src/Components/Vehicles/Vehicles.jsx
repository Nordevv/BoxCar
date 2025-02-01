import React from 'react'
import './Vehicles.css'

export default function Vehicles() {
    const NewCars = [
      {
        id:1,
        image:"https://votrechauffeur.ma/assets/images/blog/55c94-mercedes-benz.jpg",
        name:'Mercedess-Benz , C Class',
        About:'2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate',
        miles:86.245,
        type:'Automatic',
        petrol:'Petrol',
        price:'40$',
      },
      {
        id:2,
        image:"https://www.topgear.com/sites/default/files/cars-car/image/2024/09/PEUGEOT_3008_EXT_13.jpg?w=1280&h=720",
        name:'Peugot 3008',
        About:'2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate',
        miles:86.245,
        type:'Automatic',
        petrol:'Petrol',
        price:'50$',
      },
      {
        id:3,
        image:"https://d29u9xh7o1d7j0.cloudfront.net/wp-content/uploads/2015/01/M4_677.jpg",
        name:'BMW M4 - BimmerFile',
        About:'2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate',
        miles:86.245,
        type:'Automatic',
        petrol:'Petrol',
        price:'35$',
      },
      {
        id:4,
        image:"https://pictures.latribune.fr/cdn-cgi/image/width=3840,format=auto,quality=80/647/1018647.png",
        name:'Renault',
        About:'2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate',
        miles:86.245,
        type:'Automatic',
        petrol:'Petrol',
        price:'40$',
      },
      {
        id:5,
        image:"https://votrechauffeur.ma/assets/images/blog/55c94-mercedes-benz.jpg",
        name:'Mercedess-Benz , C Class',
        About:'2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate',
        miles:86.245,
        type:'Automatic',
        petrol:'Petrol',
        price:'30$',
      },
      {
        id:6,
        image:"https://www.topgear.com/sites/default/files/cars-car/image/2024/09/PEUGEOT_3008_EXT_13.jpg?w=1280&h=720",
        name:'Peugot 3008',
        About:'2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate',
        miles:86.245,
        type:'Automatic',
        petrol:'Petrol',
        price:'50$',
      },
  
    ]
  return (
    <div>
      <div className="vehicles">
        <div className="tools">
            <h1>Explore All Vehicles </h1>
            <button>View All <i class="fa-solid fa-arrow-up"></i> </button>
        </div>
        <div className="SearchCategory">
            <button>New Cars</button>
            <button>Used Cars</button>
            <button>In Stock</button>
        </div>
        <div className="NewCars">
          {
            NewCars.map((NewCar)=>
              <div key={NewCar.id} className="theNewCar">
                <div className="image">
                  <img src={NewCar.image} alt="" />
                </div>
                <div className='About' >
                  <h2>{NewCar.name}</h2>
                  <p >{NewCar.About}</p>
                </div>
                <div className="AboutCar">
                  <div className="miles">
                  <i class="fa-solid fa-gas-pump"></i>
                    <p>{NewCar.miles}</p>
                  </div>
                  <div className="petrol">
                  <i class="fa-solid fa-gauge-simple-high"></i>
                    <p>{NewCar.petrol}</p>
                  </div>
                  <div className="type">
                  <i class="fa-solid fa-laptop-medical"></i>
                    <p>{NewCar.type}</p>
                  </div>
                </div>
                <div className="CarTools">
                  <h3>{NewCar.price} <span>Per Day</span></h3>
                  <button>View Details <i class="fa-solid fa-arrow-up"></i></button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
