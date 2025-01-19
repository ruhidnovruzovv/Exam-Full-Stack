import React from 'react'
import Card from '../Products/Card'
import './Collection.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fethProducts } from '../../redux/features/productSlice'

const Collections = () => {

  const dispatch = useDispatch()
  const {products} = useSelector((state)=> state.products)

  console.log(products)

  useEffect(()=>{
    dispatch(fethProducts())
  }, [dispatch])

  return (
    <section id='collections'>
        <h1>Collections</h1>
        <div className="collection-cards">
        {
          products&&products.length>0 ? (
            products.slice(0,3).map((product)=> (
              <Card key={product._id} product = {product}/>
            ))
          ) : (<p>Product not found</p>)
        }
        </div>
    </section>
  )
}

export default Collections