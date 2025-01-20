import React from 'react';
import './Card.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/features/basketSlice';
import { addAndRemoveWishlist } from '../../redux/features/wishlistSlice';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const {wishlist} = useSelector((state) => state.wishlist); 
  const navigate = useNavigate()
  const addToCart = (product) => {
    dispatch(addToBasket(product));
  };

  const addToWishlist = (product) => {
    dispatch(addAndRemoveWishlist(product));
  };

  const isWishlist = wishlist.some((item) => item._id === product._id); 

  return (
    <div className="card">
      <div
        className="fav"
        onClick={() => addToWishlist(product)}
        style={{ cursor: 'pointer' }}
      >
        {isWishlist ? (
          <FavoriteIcon style={{ color: 'red' }} /> 
        ) : (
          <FavoriteBorderIcon style={{ color: 'gray' }} />
        )}
      </div>
      <div className="card-img">
        <img src={product?.image} alt={product?.name || 'Product Image'}  onClick={()=>navigate(`/details/${product._id}`)} style={{cursor: 'pointer'}}/>
      </div>
      <div className="card-content">
        <h3 className="title">{product?.name}</h3>
        <span>Summer Collection</span>
        <p className="price">${product?.price}</p>
        <div className="add-basket" onClick={() => addToCart(product)}>
          Add To Basket
        </div>
      </div>
    </div>
  );
};

export default Card;
