import React, { Component } from "react";
import FormField from "../Form/formfield";
import { update, generateData, isFormValid } from "../Form/formActions";
import { signUp } from "../../store/session";

import { connect } from "react-redux";

class Register extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      username: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },

      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "password_input",
          label: "password must be at least 6 characters",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm your password",
        },
        validation: {
          required: true,
          confirm: "password",
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  componentDidMount() {
    if (this.props.user.user) {
      this.props.history.push("/dashboard");
    }
  }

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "register");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  };

  submitForm = async (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "register");
    let formIsValid = isFormValid(this.state.formdata, "register");

    if (formIsValid) {
      const user = await this.props.signUp(
        dataToSubmit.username,
        dataToSubmit.email,
        dataToSubmit.password
      );
      if (!user.errors) {
        this.props.setAuthenticated(true);
      }
    }
  };

  render() {
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={(event) => this.submitForm(event)}>
                <h2>Personal information</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"username"}
                      formdata={this.state.formdata.username}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>

                  <div className="block">
                    <div>
                      <FormField
                        id={"email"}
                        formdata={this.state.formdata.email}
                        change={(element) => this.updateForm(element)}
                      />
                    </div>
                  </div>
                </div>
                <h2>Verify password</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"password"}
                      formdata={this.state.formdata.password}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"confirmPassword"}
                      formdata={this.state.formdata.confirmPassword}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
                <div>
                  {this.state.formError ? (
                    <div className="error_label">Please check your data</div>
                  ) : null}
                  <button
                    className="create-btn"
                    onClick={(event) => this.submitForm(event)}
                  >
                    Create an account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.session,
  };
}
const actions={
  signUp
}

export default connect(mapStateToProps,actions)(Register);
