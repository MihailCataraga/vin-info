import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import cars from '../data/cars'
import { actionVin } from '../store/vin'

export default function CatalogueContent() {
    const [vin, setVin] = useState('')
    const [i, setI] = useState('')
    //redux
    const dispatch = useDispatch();
    const setVinCode = () => {
      dispatch(actionVin.setVin(vin))
      dispatch(actionVin.setIndexRedux(i))
    }
    
  return (
    <div className='catalogueContent d-flex a-center'>
        <h1>All cars in our database</h1>
        <div className='allCars'>
            <div className='cars d-flex j-center'>
                {cars.map(car => (
                    <div key={car.vin} className='boxCar' onMouseEnter={() => {setVin(car.vin); setI(car.id - 1)}}>
                        <Link 
                            to={car.vin} 
                            className='car'
                            onMouseEnter={setVinCode}
                        >
                            <img src={car.img[0]} alt={'img' + car.vin} />
                            <h1>{car.name}</h1>
                            <h2>VIN: {car.vin}</h2>
                        </Link>
                    </div>
                    
                ))}
            </div>
        </div>
        
    </div>
  )
}
