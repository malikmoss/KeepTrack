import React, { useState,useEffect } from "react";
import UserLayout from "../HOC/userLayout";
import { RiDeleteBin6Line as Delete } from "react-icons/ri";
import { connect } from "react-redux";
import { getMaterials,deleteMaterial } from "../../store/material";

import "./index.css";
const Material = (props) => {

  useEffect(()=>{
    props.getMaterials().then(_=>{
      
     })
   },[])
  return (
    <UserLayout>
      <div className="material-container">
        <h2>Materials</h2>

        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
<tbody>

{
  props.materials.length && props.materials.map(material=>(
          <tr>
            <td>{material.name}</td>
            <td>{material.quantity}</td>
            <td>{material.description}</td>
            <td>
              <Delete onClick={()=>props.deleteMaterial(material.id)} size="25px" />
            </td>
          </tr>
    
    ))
}
    </tbody>
         
         
        </table>
      </div>
    </UserLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    materials: state.materials.materials,
  };
};

const actions = {
  getMaterials,
  deleteMaterial
};

export default connect(mapStateToProps, actions)(Material);
