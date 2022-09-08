import React from 'react'
import { useState } from 'react'

const ProductDescription = ({ productInfo }) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    console.log(productInfo)
    return (
        <div className='product-desc'>
            <div className='produc__detail-img'>
                <img src={productInfo?.productImgs[0]} alt="" />
            </div>
            <div className='product__detail-information'>
                <h2 className='product-info__name'>{productInfo?.title}</h2>
                <p className='product-info__description'>{productInfo?.description}</p>
                <div className='product-info__body'>
                    <article className='product-info__price'>
                        <h3 className='product-info__price-label'>Price</h3>
                        <span className='product-info__price-value'>$ {productInfo?.price}</span>
                    </article>
                    <article className='product-info__quantity'>
                        <h3 className='product-info__label'>Quantity</h3>
                        <div className='product-info__quiantity-'>
                            <button className='btn__counter' onClick={handleMinus}>-</button>
                            <div className='counter'>{counter}</div>
                            <button className='btn__counter' onClick={handlePlus}>+</button>
                        </div>
                    </article>
                </div>
                <button className='btn__add__cart'>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDescription