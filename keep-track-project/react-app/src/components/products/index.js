import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import { getMaterials } from "../../store/material"
import "./ProductsPage.css"

export default function Product() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const products = useSelector((state) => state.products.products)
    const productsList = products ? Object.values(products) : [];
  
    useEffect(() => {
        dispatch(getMaterials())
    }, [])  
    
    return (
        <div>
            <h1>Products</h1>
            <div>
                {productsList && 
                productsList.map(product => {
                    return <products></products>
                })}
            </div>
        </div>
    )
  }