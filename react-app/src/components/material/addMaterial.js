import React, { useState } from "react";
import "./index.css";
import UserLayout from "../HOC/userLayout";
import FormField from "../Form/formfield";
import { update, generateData, isFormValid } from "../Form/formActions";
import { connect } from "react-redux";
import { addMaterial } from "../../store/material";
import { useHistory } from "react-router-dom"

const materialdata = {
  name: {
    element: "input",
    value: "",
    config: {
      name: "name_input",
      type: "text",
      placeholder: "Enter material name",
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
      placeholder: "Enter material quantity",
    },
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    validationMessage: "",
  },
  measure_unit: {
    element: "input",
    value: "",
    config: {
      name: "quantity_input",
      type: "text",
      placeholder: "Enter material measure unit",
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
      placeholder: "Enter material description",
    },
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    validationMessage: "",
  },
};
const AddMaterial = (props) => {
  const [materialData, setMaterialData] = useState(materialdata);
  const [actionSuccess, setActionSuccess] = useState(false);
  const history = useHistory()

  const updateForm = (element) => {
    const newFormdata = update(element, materialData, "add material");
    setMaterialData({
      ...newFormdata,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(materialData, "add material");
    let formIsValid = isFormValid(materialData, "add material");

    if (formIsValid) {
      props.addMaterial({...dataToSubmit,userId:props.userId}).then(result=>{
        setActionSuccess(true);
        setTimeout(()=>{
          history.push("/materials")
        },500)
      })
    }
  };

  return (
    <UserLayout>
      <div className="addmaterial-container">
        <h2>Add Material</h2>
        <div className="form_block_two">
          <div className="block">
            <FormField
              id="name"
              formdata={materialData.name}
              change={(element) => updateForm(element)}
            />
          </div>

          <div className="block">
            <FormField
              id="quantity"
              formdata={materialData.quantity}
              change={(element) => updateForm(element)}
            />
          </div>
        </div>
        <div className="form_block_two">
       
          <div className="block">
            <FormField
              id="description"
              formdata={materialData.description}
              change={(element) => updateForm(element)}
            />
          </div>
          <div className="block">
            <FormField
              id="measure_unit"
              formdata={materialData.measure_unit}
              change={(element) => updateForm(element)}
            />
          </div>
        </div>
        <div>
          <button className="create-btn" onClick={(event) => submitForm(event)}>
            ADD MATERIAL
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
    materials: state.materials.material,
    userId:state.session.user.id
  };
};

const actions = {
  addMaterial,
};

export default connect(mapStateToProps, actions)(AddMaterial);
