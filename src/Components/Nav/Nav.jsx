import React, { useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [Mobile , setMobile] = useState(false);
  // const OpenMenu = document.querySelector('.fa-bars')
  // const CloseMenu = document.querySelector('.fa-xmark')
  // if (Mobile === false) {
  //   // CloseMenu.style.display='none'; 
  //   OpenMenu.style.display='block'; 
    
  // }else if(Mobile === true){
  //   OpenMenu.style.display='none';
  //   // CloseMenu.style.display='block'; 
  // }
  
 
  return (
    <nav className={Mobile ? 'NavMobile' : 'Nav'} >
      <div className='NavTools' >
        <h1 className="logo">BoxCar</h1>
        <p><i class="fa-solid fa-magnifying-glass"></i> <span>Search Cars </span></p>
      </div>
      <i class="fa-solid fa-bars" style={{display : Mobile ? 'none' : ''}}  onClick={()=> setMobile(true)  } ></i>
      <div className={Mobile ? 'NavLinksMobile ' : 'NavLinks'}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#Shop">Shop</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><i class="fa-regular fa-user"></i><a href="#home">Sign in</a></li>
          <button>Add Listing</button>

          <i class="fa-solid fa-xmark" onClick={()=> setMobile(false) } ></i>

        </ul>
      </div>
  
    </nav>
  )
}
