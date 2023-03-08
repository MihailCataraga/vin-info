import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import cars from '../data/cars'
import { BsFillCalendarDayFill, BsSpeedometer2 } from 'react-icons/bs';
import { TbEngine, TbManualGearbox } from 'react-icons/tb';
import { FaCarCrash } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function CarContent() {
    //redux
    const vinCode = useSelector(state => state.vin.vin)
    const index = useSelector(state => state.vin.indexCar)
    //.
    const [img, setImg] = useState('');
    const [bigImg, setBigImg] = useState(false);
    //useRef
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()  
    //.
  return (
    <div ref={myRef} className='carContent d-flex a-center'>
        <h1>{cars[index].name}</h1>
        <div className='allInfo d-flex a-center'>
            <h2>VIN: {vinCode}</h2>
            <div className='info d-flex j-center'>
                <div className='boxInfo d-flex a-center'>
                    <BsFillCalendarDayFill className='icon' />
                    <p>{cars[index].year}</p>
                </div>
                <div className='boxInfo d-flex a-center'>
                    <TbEngine className='icon' />
                    <p>{cars[index].engine}</p>
                </div>
                <div className='boxInfo d-flex a-center'>
                    <BsSpeedometer2 className='icon' />
                    <p>{cars[index].odometer}</p>
                </div>
                <div className='boxInfo d-flex a-center'>
                    <TbManualGearbox className='icon' />
                    <p>{cars[index].gearbox}</p>
                </div>
                <div className='boxInfo d-flex a-center'>
                    <FaCarCrash className='icon' />
                    <p>{cars[index].damage}</p>
                </div>
            </div>
        </div>
        
        <div className='photos d-flex a-center j-center'>
            {cars[index].img.map(i => (
                <img 
                    width={250} 
                    key={i}
                    src={i} 
                    alt={'img ' + vinCode} 
                    onClick={() => {setBigImg(true); setImg(i)}}
                />
            ))}
        </div>
        {bigImg && <div className='bigImg d-flex'>
            <img className='img' src={img} alt='Car img' onLoad={executeScroll}></img>
            <AiOutlineCloseCircle className='icon' onClick={() => setBigImg(false)} />
        </div>
        }
    </div>
  )
}
