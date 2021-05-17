import React from "react";
import MyButton from "../utils/button";

const ProdNfo = (props) => {
  const showProdTags = (detail) => (
    <div className="product_tags">
      {detail.shipping ? (
        <div className="tag">
          <div className="tag_text">
            <div>Free shipping</div>
            <div>And return</div>
          </div>
        </div>
      ) : null}
      {detail.available ? (
        <div className="tag">
          <div className="tag_text">
            <div>Available</div>
            <div>in store</div>
          </div>
        </div>
      ) : (
        <div className="tag">
          <div className="tag_text">
            <div>Not Available</div>
            <div>Preorder only</div>
          </div>
        </div>
      )}
    </div>
  );

  const showProdActions = (detail) => (
    <div className="product_actions">
      <div className="price">$ 110</div>
    </div>
  );

  const showProdSpecifications = (detail) => (
    <div className="product_specifications">
      <h2>Specs:</h2>
      <div>
        <div className="item">
          <strong>Material:</strong> materialtest
        </div>
      </div>
    </div>
  );

  // const detail = props.detail;
  return (
    <div>
      <h1>test product</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis
        pharetra iaculis. Phasellus vel augue non diam egestas consequat.
        Praesent aliquet eu elit eget interdum. Morbi feugiat quis quam et
        dignissim. Nunc vulputate dolor massa, vitae condimentum nisi rhoncus
        vel. Nunc bibendum egestas nibh, ac tempor turpis fringilla at. Aliquam
        ullamcorper non augue sit amet iaculis. Duis a mauris quis lorem rutrum
        varius a vel ante. Interdum et malesuada fames ac ante ipsum primis in
        faucibus.{" "}
      </p>
      {showProdTags({ shipping: true, available: true })}
      {showProdActions("detail")}
      {showProdSpecifications("detail")}
    </div>
  );
};

export default ProdNfo;
