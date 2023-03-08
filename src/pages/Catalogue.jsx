import React from 'react'
import CatalogueContent from '../components/CatalogueContent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Catalogue() {
  return (
    <div className='catalogue'>
        <Navbar />
        <CatalogueContent />
        <Footer />
    </div>
  )
}
