import React, { useState } from "react";
import UserLayout from "../HOC/userLayout";
import FormField from "../Form/formfield";
import { update, generateData, isFormValid } from "../Form/formActions";

import "./index.css";

const productdata = {
  id: {
    element: "input",
    value: "",

    config: {
      label: "Product id",
      name: "name_input",
      type: "text",
      placeholder: "product id",
      disabled: true,
    },
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    validationMessage: "",
    showlabel: true,
  },
  material: {
    element: "select",
    value: "",
    config: {
      label: "Product material",
      name: "material_input",
      options: [
        { key: 1231, value: "materialtest" },
        { key: 2121, value: "materialtest2" },
      ],
    },
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    validationMessage: "",
    showlabel: true,
  },
};
const AddProduct = (props) => {
  const [productData, setProductData] = useState(productdata);

  const updateForm = (element) => {
    const newFormdata = update(element, productData, "edit product");
    setProductData({
      ...newFormdata,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(productData, "edit product");
    let formIsValid = isFormValid(productData, "edit product");

    if (formIsValid) {
      console.log("formIsValid");
    }
  };

  return (
    <UserLayout>
      <div className="addproduct-container">
        <h2>Edit Product</h2>
        <div className="form_block_two">
          <div className="block">
            <FormField
              id="id"
              formdata={productData.id}
              change={(element) => updateForm(element)}
            />
          </div>

          <div className="block">
            <FormField
              id="material"
              formdata={productData.material}
              change={(element) => updateForm(element)}
            />
          </div>
        </div>
        <div>
          <button className="create-btn" onClick={(event) => submitForm(event)}>
            Edit PRODUCT
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default AddProduct;
