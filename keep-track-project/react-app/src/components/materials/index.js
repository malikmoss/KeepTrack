import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import { getMaterials } from "../../store/material"
import "./MaterialsPage.css"


export default function Material() {
    const dispatch = useDispatch();
    const { materialId } = useParams();
    const material = useSelector((state) => state.material.material)

    useEffect(() => {
        dispatch(getMaterials(materialId))
    }, [materialId, dispatch])

    return (
        <div>
            <div>
                <h1>Materials</h1>
            </div>
        </div>
    )
}