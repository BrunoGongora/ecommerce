import React from 'react'
import ProductCarInfo from '../../cart/ProductCarInfo'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../../../utils/getConfig'

export const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    const getAllProductCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
            .then(response => setCartProducts(response.data.data.cart.products))
            .catch(error => setCartProducts())
    }

    useEffect(() => {
        getAllProductCart()

    }, [])

    const handleCheckout = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(URL, obj, getConfig())
            .then(response => {
                console.log(response.data)
                getAllProductCart()
            })
            .catch(error => console.log(error))
    }


    return (
        <article className='cart'>
            <h1 className='cart__title'>Cart</h1>
            {
                cartProducts?.map(product => (
                    <ProductCarInfo
                        key={product.id}
                        product={product}
                        getAllProductCart={getAllProductCart}
                    />
                ))
            }
            <hr className='cart__hr' />
            <footer className='cart__footer'>
                <div className='total__checkout'>
                    <span className='cart__total-global'>Total</span>
                    <p className='cart__total-global-value'>$ 1350</p>
                </div>
                <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
            </footer>
        </article>
    )
}
