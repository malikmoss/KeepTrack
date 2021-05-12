import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import { getMaterials } from "../../store/material"
import "./MaterialsPage.css"


export default function Material() {
  const dispatch = useDispatch();
  const { materialId } = useParams();
  const materials = useSelector((state) => state.materials.materials)
    // const materials = useSelector((state) => Object.values(state.materials.materials))


  useEffect(() => {
      dispatch(getMaterials())
  }, [dispatch])  

  return (
      <div>
          <h1>Materials Page</h1>
          {materials?.map((material, index) => (
              <li>{material.name}</li>
          ))}
      </div>
  )
}