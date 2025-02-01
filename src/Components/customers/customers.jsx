import React from 'react'
import './customers.css'
export default function Customers() {
    const comments =[
        {
            id:1,
            name:'Ahmad',
            profile:'https://img.freepik.com/premium-photo/young-man-holding-car-keys-by-his-new-car_1303-28475.jpg',
            comment:'Thank you so much for your professional service! The car is amazing, and your support was outstanding. I highly recommend anyone looking to buy a car to work with you! 🚗💯',
            rate: '',
        },
    ]
  return (
    <div className='customers' >
      <h1>What our customers say </h1>
      {
        comments.map((comment)=>
        <div key={comment.id} className="comment">
            <div className="profile">
                <img src={comment.profile} alt="" />
            </div>
            <div className='contenu' >
                <div className="rates">
                    <span><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> </span>
                    <h2>{comment.name}</h2>
                    <p>{comment.profession}</p>
                </div>
                <p className='text' >{comment.comment}</p>
            </div>
        </div>
        )
      }
    </div>
  )
}
