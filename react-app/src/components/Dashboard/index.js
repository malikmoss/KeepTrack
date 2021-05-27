import React, { useState, useEffect } from "react";
import UserLayout from "../HOC/userLayout";
import Materials from "../material/index"
import Products from "../product/index"
import {useHistory} from "react-router-dom"
import { connect } from "react-redux";
import {getProducts,deleteProduct} from "../../store/product"
import { RiDeleteBin6Line as Delete, RiEdit2Line } from "react-icons/ri";

const Dashboard = (props) => {
  const history = useHistory();


  useEffect(()=>{
   props.getProducts().then(_=>{
    })
  },[])
  const editProduct = (product_id) => {
    if (product_id){
      history.push("/edit-product/"+ product_id);
    }
  }
    return (
      <UserLayout>
        <div className="products-container">
          <h2>Products</h2>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody  >
            {
            props.products.length  && props.products.map(product=>(
  
              <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td style={{align:'center'}}>
                <Delete onClick={()=>props.deleteProduct(product.id)} size="25px" />
                {/* <Edit size="25px" /> */}
                <RiEdit2Line onClick={()=>editProduct(product.id)} size="25px" style={{marginLeft:10}}/>
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
      products: state.products.products,
    };
  };
  
  const actions = {
    getProducts,
    deleteProduct
  };
  
  export default connect(mapStateToProps,actions)(Dashboard);
  

