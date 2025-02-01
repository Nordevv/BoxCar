import React from 'react'
import'./Statistic.css'
export default function Statistic() {
  const offers = [
    {
      id:1,
      icon:'https://cdn-icons-png.flaticon.com/512/4541/4541461.png',
      title:'Special Financing Offers',
      text:'Our stress-free finance department that can find financial solutions to save you money.',
    },
    {
      id:2,
      icon:'https://cdn-icons-png.freepik.com/256/14488/14488571.png?semt=ais_hybrid',
      title:'Trusted Car Dealership',
      text:'Our stress-free finance department that can find financial solutions to save you money.',
    },
    {
      id:3,
      icon:'https://cdn-icons-png.freepik.com/512/7988/7988631.png',
      title:'Trusted Car Dealership',
      text:'Our stress-free finance department that can find financial solutions to save you money.',
    },
    {
      id:4,
      icon:'https://cdn-icons-png.freepik.com/512/5914/5914194.png',
      title:'Expert Car Service',
      text:'Our stress-free finance department that can find financial solutions to save you money.',
    },
  ]
  return (
    <div>
      <div className="ads">
        <div className="video">
        <i class="fa-regular fa-circle-play fa-beat-fade"></i>
        </div>
        <section>
            <div className='description' >
                <div style={{textAlign:'left',}} >
                    <h1>Get A Fair Price For Your Car Sell To Us Today</h1>
                    <p>We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.</p>
                </div>
                <ul>
                    <li> <i class="fa-solid fa-check"></i> We are the UK’s largest provider, with more patrols in more places</li>
                    <li> <i class="fa-solid fa-check"></i> You get 24/7 roadside assistance</li>
                    <li> <i class="fa-solid fa-check"></i> We fix 4 out of 5 cars at the roadside</li>
                </ul>
                <button> Get Started <i class="fa-solid fa-arrow-up"></i> </button>
            </div>
        </section>
      </div>
      <div className="statistics">
        <div className="salers">
          <h1>846M</h1>
          <h5>Cars For Sale</h5>
        </div>
        <div className="reviews">
          <h1>846M</h1>
          <h5>DEALER REVIEWS</h5>
        </div>
        <div className="visitors">
          <h1>846M</h1>
          <h5>VISITORS PER DAY</h5>
        </div>
        <div className="dealers">
          <h1>846M</h1>
          <h5>VERIFIED DEALERS</h5>
        </div>
      </div>
      <div className="offers">
        <h1 style={{fontSize:'50px',}} >Why Choose Us?</h1>
        <div className="offers-cards">
          {
            offers.map((offer)=>(
              <div key={offer.id} className="offer">
                <img src={offer.icon} alt="" />
                <h1>{offer.title}</h1>
                <p>{offer.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
