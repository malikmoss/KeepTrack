import React, { useState } from "react";
import UserLayout from "../HOC/userLayout";
import FormField from "../Form/formfield";
import { update, generateData, isFormValid } from "../Form/formActions";
import { connect } from "react-redux";
import { addProduct } from "../../store/product";
import "./index.css";
import { useHistory } from "react-router-dom"

const productdata = {
  name: {
    element: "input",
    value: "",
    config: {
      name: "name_input",
      type: "text",
      placeholder: "Enter product name",
    },
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    validationMessage: "",
  },
  quantity: {
    element: "input",
    value: "",
    config: {
      name: "quantity_input",
      type: "number",
      placeholder: "Enter product quantity",
    },
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    validationMessage: "",
  },
  description: {
    element: "textarea",
    value: "",

    config: {
      name: "description_input",
      type: "text",
      placeholder: "Enter product description",
    },
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    validationMessage: "",
  },
  //   material: {
  //     element: "select",
  //     value: "",
  //     config: {
  //       label: "Product material",
  //       name: "material_input",
  //       options: [
  //         { key: 1231, value: "materialtest" },
  //         { key: 2121, value: "materialtest2" },
  //       ],
  //     },
  //     validation: {
  //       required: true,
  //     },
  //     valid: false,
  //     touched: false,
  //     validationMessage: "",
  //     showlabel: true,
  //   },
};
const AddProduct = (props) => {
  const [productData, setProductData] = useState(productdata);
  const [actionSuccess, setActionSuccess] = useState(false);
  const history = useHistory()

  const updateForm = (element) => {
    const newFormdata = update(element, productData, "add product");
    setProductData({
      ...newFormdata,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(productData, "add product");
    let formIsValid = isFormValid(productData, "add product");

    if (formIsValid) {
      props
        .addProduct({ ...dataToSubmit, userId: props.userId })
        .then((result) => {
          setActionSuccess(true);
          setTimeout(()=>{
            history.push("/products")
          },500)
        });
    }
  };

  return (
    <UserLayout>
      <div className="addproduct-container">
        <h2>Add Product</h2>
        <div className="form_block_two">
          <div className="block">
            <FormField
              id="name"
              formdata={productData.name}
              change={(element) => updateForm(element)}
            />
          </div>

          <div className="block">
            <FormField
              id="quantity"
              formdata={productData.quantity}
              change={(element) => updateForm(element)}
            />
          </div>
        </div>
        <div style={{ width: "49%" }}>
          <FormField
            id={"description"}
            formdata={productData.description}
            change={(element) => updateForm(element)}
          />
        </div>
        <div>
          <button className="create-btn" onClick={(event) => submitForm(event)}>
            ADD PRODUCT
          </button>
          {actionSuccess && (
            <div className="success-message">Product added successfully</div>
          )}
        </div>
      </div>
    </UserLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
    userId:state.session.user.id
  };
};

const actions = {
  addProduct,
};

export default connect(mapStateToProps, actions)(AddProduct);