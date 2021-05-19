import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";
const links = [
  {
    name: "My account",
    linkTo: "/dashboard",
  },
];
const material = [
  {
    name: "List Materials",
    linkTo: "/materials",
  },
  {
    name: "Add Material",
    linkTo: "/add-material",
  },
];
const product = [
  {
    name: "List Products",
    linkTo: "/products",
  },
  {
    name: "Add Product",
    linkTo: "/add-product",
  },
];

const UserLayout = (props) => {
  const generateLinks = (links) =>
    links.map((item, i) => (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    ));

  return (
    <div className="container user-layout">
      <div className="user_container">
        <div className="user_left_nav">
          <h2 style={{ textAlign: "left" }}>My account</h2>
          <div className="links">{generateLinks(links)}</div>
          {
            <div>
              <h2
                style={{
                  textAlign: "left",
                }}
              >
                Product
              </h2>
              <div className="links">{generateLinks(product)}</div>
            </div>
          }
          {
            <div>
              <h2
                style={{
                  textAlign: "left",
                }}
              >
                Material
              </h2>
              <div className="links">{generateLinks(material)}</div>
            </div>
          }
        </div>
        <div className="user_right">{props.children}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.session,
  };
};

export default connect(mapStateToProps)(UserLayout);
