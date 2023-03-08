import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer d-flex a-center'>
        <div className='d-flex a-center'>
            <p>Contact us at:</p>
            <div className='contacts'>
                <div className='contact d-flex a-center'>
                    <BsInstagram className='instagram' />
                    <p>@vin-info</p>
                </div>
                <div className='contact d-flex a-center'>
                    <AiOutlineMail className='icon' />
                    <p>vin-info@email.com</p>
                </div>
                <div className='contact d-flex a-center'>
                    <AiFillPhone className='icon' />
                    <p>(+373) 697777771</p>
                </div>
            </div>
        </div>
        <p className='copy'>Copyright &copy; 2023 <Link to='/' className='link'>VIN-INFO</Link> Company. All rights reserved.</p>
    </div>
  )
}
