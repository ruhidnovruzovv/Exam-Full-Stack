import React from 'react'
import './Card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/features/basketSlice';

const Card = ({product}) => {
  const dispatch = useDispatch()

  const addToCart = (product)=>{
    dispatch(addToBasket(product))
  }

  console.log(product)

  return (
      <div className="card" >
        <div className="fav">
          <FavoriteBorderIcon />
        </div>
        <div className="card-img">
          <img src={product?.image} alt="" />
        </div>
        <div className="card-content">
          <h3 className="title">{product?.name}</h3>
          <span>Summer Collection</span>
          <p className="price">${product?.price}</p>
          <div className="add-basket" onClick={()=>addToCart(product)}>
            Add To Basket
          </div>
        </div>
      </div>
  )
}

export default Card