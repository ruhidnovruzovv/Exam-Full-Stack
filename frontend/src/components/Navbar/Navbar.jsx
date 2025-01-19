import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {basket} = useSelector((state)=> state.basket)

  const totalBasketItems = basket.reduce((sum, item)=> sum + item.count, 0)

  return (
    <div className='navbar'>
      <div className="container">
      <div className="nav-container">
      <div className="logo">
          <h1>Dealers</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/catalog'>Catalogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/admin'>Admin Page</Link>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          <Link to='#'><FavoriteBorderIcon /></Link>
          <Link to='/basket'><ShoppingBasketIcon /> <sup>{totalBasketItems}</sup></Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar