import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductDescription from '../productDetail/ProductDescription'
import SimilarProducts from '../productDetail/SimilarProducts'

const ProductDetails = () => {

    const { id } = useParams()

    const [productInfo, setProductInfo] = useState()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(response => setProductInfo(response.data.data.product))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <ProductDescription
                productInfo={productInfo}
            />
            <SimilarProducts
                productInfo={productInfo}
            />
        </div>
    )
}

export default ProductDetails