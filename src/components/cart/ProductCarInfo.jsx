import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCarInfo = ({ product, getAllProductCart }) => {

    const handleDeleteProduct = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(() => getAllProductCart())
            .catch(error => console.log(error))
    }

    return (
        <article className='cart__item'>
            <header className='cart__item-header'>
                <h4 className='cart__subtitle'>{product.brand}</h4>
                <h3 className='cart__name'>{product.title}</h3>
            </header>

            <span className='cart__quantity'>Cantidad disponible: {product.productsInCart.quantity}</span>
            <div className='footer__section'>
                <footer className='card__item-footer'>
                    <span className='cart__total-label'>Total: </span>
                    <p className='cart__total-number'>$ {product.price}</p>
                </footer>
                <img className='img__delete' onClick={handleDeleteProduct} src="./trash-bin.png" alt="" />
            </div>

        </article>
    )
}

export default ProductCarInfo