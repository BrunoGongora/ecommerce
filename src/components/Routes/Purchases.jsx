import axios from 'axios'
import React from 'react'
import PurchaseCard from '../purchases/PurchaseCard'
import { useState, useEffect } from 'react'
import getConfig from '../../utils/getConfig'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='purchase'>
      {
        purchases?.map(purchase => (
          <PurchaseCard 
          key={purchase.id}
          purchase={purchases}
          />
        ))
      }
    </div>
  )
}

export default Purchases