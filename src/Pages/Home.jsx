import React from 'react'
import Hero from '../Components/Hero/Hero'
import Brands from '../Components/Brands/Brands'
import Vehicles from '../Components/Vehicles/Vehicles'
import Statistic from '../Components/Statistic/Statistic'
import Customers from '../Components/customers/customers'
import Cards from '../Components/Asks/Ask'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Brands/>
      <Vehicles/>
      <Statistic/>
      <Customers/>
      <Cards/>
    </div>
  )
}
