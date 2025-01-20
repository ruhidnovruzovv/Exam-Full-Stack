import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fethProducts } from '../../redux/features/productSlice'
import './Details.css'
import { addToBasket } from '../../redux/features/basketSlice'

const Details = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const {products} = useSelector((state)=> state.products)

    const detailsProduct = products?.find((product)=> product._id == id)

    const addToCart = (product)=>{
        dispatch(addToBasket(product))
    }

    useEffect(()=>{
        dispatch(fethProducts())
    }, [dispatch])


    console.log(id)

  return (
    <div className='details'>
      <h1 style={{textAlign:'center', marginBottom: '20px'}}>Details Page</h1>
       <div className="details-card">
       <div className="image">
            <img src={detailsProduct?.image} alt="" />
        </div>
        <div className="details-content">
            <h2>{detailsProduct?.name}</h2>
            <p>${detailsProduct?.price}</p>
            <p>{detailsProduct?.description}</p>
            <button className="add-cart" onClick={()=>addToCart(detailsProduct)}>
            Add to Basket
        </button>
        </div>
       </div>
    </div>
  )
}

export default Details