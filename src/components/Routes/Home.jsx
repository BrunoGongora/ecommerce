import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import Cardhome from '../home/Cardhome'

const Home = () => {



  const products = useSelector(state => state.products)

  console.log(products)

  return (
    <div className='home'>
      <div className='home__container-card'>
        {
          products?.map(product => (
            <Cardhome
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home