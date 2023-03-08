import React, { useState } from 'react';
import { BsInfoLg } from 'react-icons/bs';
import { AiOutlinePicture } from 'react-icons/ai';
import { IoInfiniteSharp } from 'react-icons/io5';
import { FiAlertCircle } from 'react-icons/fi';
import cars from '../data/cars';
import { useDispatch } from 'react-redux';
import { actionVin } from '../store/vin';
import { Link } from 'react-router-dom';
 
export default function HomeContent() {
  const [vinCode, setVinCode] = useState('')
  const [notFound, setNotFound] = useState(false)
  const [index, setIndex] = useState('');
  const [box, setBox] = useState(false);

  // redux
  const dispatch = useDispatch();
  const setVin = () => {
    dispatch(actionVin.setVin(vinCode))
    dispatch(actionVin.setIndexRedux(index))
  }
  
  const car = () => {
    if(vinCode === '') {
      setBox(false)
      return
    }
    if(vinCode === cars.map(car => {return car.vin}).filter(i => i === vinCode).toString()) {
      // console.log(true)
      setIndex(cars.map(car => {return car.vin}).indexOf(vinCode))
      
      setNotFound(false)
      setBox(true)
    } else{
      setNotFound(true)
      setBox(false)
    }
  }
  return (
    <div className='homeContent d-flex'>
      <div className='top'>
        <h1>Look for information about your car in our database</h1>
        <div className='search d-flex a-center'>
          <div className='left d-flex'>
            <div className='input'>
              <input 
                type='text' 
                placeholder='Enter your VIN code...' 
                value={vinCode}
                onChange={(e) => setVinCode(e.target.value)}
              />
              <button onClick={car}>Search VIN</button>
            </div>
            {
              notFound && 
              <div className='notFound d-flex a-center j-center'>
                <FiAlertCircle className='icon' />
                <p>This VIN was not found!</p>
              </div>
            }
          </div>
          <div className='right'>
            {box ? 
              <Link to={"/catalogue/" + vinCode} className='link' onClick={setVin}>
                <div className='boxCar d-flex a-center'>
                  <img src={cars[index].img[0]} alt='Car img' />
                  <h3>{cars[index].name}</h3>
                  <p>VIN: {cars[index].vin}</p>
                </div>
              </Link> :
              <img src='/images/car.png' alt='Profile img' />
            }
          </div>
        </div>
      </div>
      <div className='bottom'>
        <h2>We can offer you!</h2>
        <div className='benefits d-flex j-center'>
          <div className='benefit d-flex a-center'>
            <BsInfoLg className='icon' />
            <p>Information about the car.</p>
          </div>
          <div className='benefit d-flex a-center'>
            <AiOutlinePicture className='icon' />
            <p>Free car pictures.</p>
          </div>
          <div className='benefit d-flex a-center'>
            <IoInfiniteSharp className='icon' />
            <p>Unlimited VIN searches.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
