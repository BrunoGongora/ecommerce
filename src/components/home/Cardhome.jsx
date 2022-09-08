import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import axios from 'axios'

/* Esta seccion es para traer la informacion de los productos> */

const Cardhome = ({ product }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddProduct = e => {
        e.stopPropagation()
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id: product.id,
            quantity: 1
        }
        axios.post(url, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    return (
        <div onClick={handleClick} className='card-home card__product'>
            <div className='card-home__products'>
                <div className='card-home__header'>
                    <img className='card-home__img' src={product.productImgs[0]} alt="" />
                </div>
                <div className='card-home__body'>
                    <h3  className='card-home__name'>{product.title}</h3>
                    <div className='card.home__body'>
                        <section className='card-home__price'>
                            <h4 className='card-home__price-label'>Price</h4>
                            <span className='card-home__price-value'>$ {product.price}</span>
                        </section>
                        <img onClick={handleAddProduct} className='img_cart_Shop' src="./shopping-cart.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardhome