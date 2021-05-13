import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getMaterials} from "../../store/material"
import { getProducts } from "../../store/product"
// import "./Home.css"


export default function AllItems() {
const dispatch = useDispatch()
const materials = useSelector((state) => state.materials.materials)
const products = useSelector((state) => state.materials.materials)

useEffect(() => {
    dispatch(getMaterials())
}, [dispatch])

useEffect(() => {
    dispatch(getProducts())
}, [dispatch])

    return (
        <div>
            <h1>Inventory</h1>
            {materials?.map((material, index) => (
              <li>{material.name}</li>
            ))}

            {products?.map((product, index) => (
              <li>{product.name}</li>
            ))}          
        </div>
    )
}

