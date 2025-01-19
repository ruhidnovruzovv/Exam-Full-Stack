import React from 'react'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Products/Card'
import './Home.css'
import BannerWomen from '../../components/BannerWomen/BannerWomen'
import Collections from '../../components/Collections/Collections'
import BannerMen from '../../components/BannerMen/BannerMen'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fethProducts } from '../../redux/features/productSlice'


const Home = () => {

  const dispatch = useDispatch()
  const {products} = useSelector((state)=> state.products)

  console.log(products)

  useEffect(()=>{
    dispatch(fethProducts())
  }, [dispatch])

  return (
    <div>
      <Hero />
      <div className='card-container'>
        {
          products&&products.length>0 ? (
            products.map((product)=> (
              <Card key={product._id} product = {product}/>
            ))
          ) : (<p>Product not found</p>)
        }
      </div>
      <BannerWomen />
      <Collections />
      <BannerMen />
    </div>
  )
}

export default Home