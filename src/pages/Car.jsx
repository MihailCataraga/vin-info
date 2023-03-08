import React from 'react'
import CarContent from '../components/CarContent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Car() {
  return (
    <div className='car'>
        <Navbar />
        <CarContent />
        <Footer />
    </div>
  )
}
