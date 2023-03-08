import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar d-flex a-center'>
        <div className='logo'>
            <Link to={"/"} className='logoName'><span>VIN</span>-INFO</Link>
        </div>
        <div className='pages'>
            <Link to={"/"} className='link'>Home</Link>
            <Link to={"/catalogue/"} className='link'>Catalogue</Link>
        </div>
    </div>
  )
}
