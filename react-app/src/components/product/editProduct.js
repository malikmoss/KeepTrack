import React, { useState, useEffect } from "react";
import UserLayout from "../HOC/userLayout";
import FormField from "../Form/formfield";
import { update, generateData, isFormValid } from "../Form/formActions";
import { useParams, Redirect } from "react-router-dom";
import "./index.css";
import {getProduct, editProduct} from "../../store/product";
import {useDispatch, connect} from "react-redux";
import { useHistory } from "react-router-dom"

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
    valid: true,
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
      multiple: true,
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

const EditProduct = (props) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
   props.getProduct(id).then((product) => {})
  }, [])
  
  const [productData, setProductData] = useState(productdata);
  if(props.product){
    productData['id']['value'] = props.product.id
    let options = [];
    for (let i = 0; i < props.product.newmaterial.length; i++) {
      options.push({key:props.product.newmaterial[i].id, value:props.product.newmaterial[i].name})
    }
    productData['material']['config']['options'] = options;
  }
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
    // console.log(formIsValid)
    if (formIsValid) {
      props.editProduct({...dataToSubmit,userId:props.userId}).then(result=>{
      })
      alert("Success!");
      history.push("/dashboard")
    }
  };

  return (
    <UserLayout>
      <div className="addproduct-container">
        <h2>Edit Product</h2>
        {props.product?
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
        </div>:""}
        <div>
          <button className="create-btn" onClick={(event) => submitForm(event)}>
            Edit PRODUCT
          </button>
        </div>
      </div>
    </UserLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};

const actions = {
  getProduct,editProduct
};

export default connect(mapStateToProps,actions)(EditProduct);
