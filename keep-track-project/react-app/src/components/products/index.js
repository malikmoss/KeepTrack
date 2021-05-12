import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import { getProducts } from "../../store/product"
import "./ProductsPage.css"

export default function Product() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const products = useSelector((state) => state.products.products)
    // const productsList = products ? Object.values(products) : [];
  
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])  
    
    return (
        <div>
            <h1>Products Page</h1>
            {products?.map((product, index) => (
                <li>{product.name}</li>
             ))} 
        </div>
    )
  }