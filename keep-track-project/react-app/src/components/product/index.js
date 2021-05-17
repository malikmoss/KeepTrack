import React, { useState,useEffect } from "react";
import UserLayout from "../HOC/userLayout";
import { AiOutlineEdit as Edit } from "react-icons/ai";
import { connect } from "react-redux";
import {getProducts,deleteProduct} from "../../store/product"
import { RiDeleteBin6Line as Delete } from "react-icons/ri";
import "./index.css";

const Products = (props) => {



useEffect(()=>{
 props.getProducts().then(_=>{
   
  })
},[])
  return (
    <UserLayout>
      <div className="products-container">
        <h2>Products</h2>

        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
<tbody  >
{
props.products.length  && props.products.map(product=>(

  <tr key={product.name}>
  <td>{product.name}</td>
  <td>{product.quantity}</td>
  <td>
    <Delete onClick={()=>props.deleteProduct(product.id)} size="25px" />
    {/* <Edit size="25px" /> */}
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

export default connect(mapStateToProps,actions)(Products);
