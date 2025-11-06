import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopSection from '../components/TopSection'
import About from '../components/About'
import OrderSection from '../components/OrderSection'
import DealsSection from '../components/DealsSection'

const HomePage = () => {
  return (
    <div>
      <TopSection/>
        <Navbar/>
        <DealsSection/>
        <OrderSection/>
        <About/>
        <Footer/>
    </div>
  )
}

export default HomePage