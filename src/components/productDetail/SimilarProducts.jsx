import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cardhome from '../home/Cardhome'

const SimilarProducts = ({productInfo}) => {

const [filterProducts, setFilterProducts] = useState()

const products = useSelector(state => state.products)

useEffect(() => {
  if (productInfo) {
    const filter = products.filter(e=> e.category.name === productInfo.category)
    setFilterProducts(filter)
  }
}, [productInfo])

console.log(filterProducts)




  return (
    <div className='container__similar-products'>
        {
            filterProducts?.map(product => {
                if (product.title !== productInfo.title) {
                    return <Cardhome 
                    key={product.id} 
                    product={product}/>
                }
            })
        }
    </div>
  )
}

export default SimilarProducts