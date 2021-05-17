import React, { useState, useEffect } from "react";
import PageTop from "../utils/page_top";
import ImageNotFound from "../../utils/images/image_not_availble.png";
import ProdNfo from "./prodNfo";
import { connect } from "react-redux";
import { getProduct } from "../../store/product";
function ProductDetail(props) {
  useEffect(() => {
    // const productId = props.match.params.id;
  });

  return (
    <div>
      <PageTop title="Product detail" />
      <div className="container">
        <div className="product_detail_wrapper">
          <div className="left">
            <div style={{ width: "500px" }}>
              <img src={ImageNotFound} alt="not found" />
            </div>
          </div>
          <div className="right">
            <ProdNfo />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};

const actions = {
  getProduct,
};

export default connect(mapStateToProps, actions)(ProductDetail);
