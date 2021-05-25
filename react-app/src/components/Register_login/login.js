import React, { Component } from "react";
import FormField from "../Form/formfield";
import { update, generateData, isFormValid } from "../Form/formActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {login} from "../../store/session"

class Login extends Component {
  state = {
    formError: false,
    errors: [],
    formSuccess: "",
    formdata: {
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
        config: {
          name: "password_input",
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
    },
  };

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "login");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  };

  submitForm = async (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "login");
    let formIsValid = isFormValid(this.state.formdata, "login");

    if (formIsValid) {
      const user = await this.props.login(dataToSubmit.email, dataToSubmit.password);
      if (!user.errors) {
        this.props.setAuthenticated(true);
        this.props.history.push("/dashboard")
      } else {
        this.setState({ errors: user.errors });
      }
    }
  };

  // demoLogin = async (event) => {
  //   event.preventDefault();
  //   const data = await this.props.login('demo@ap.io', 'password');
  //   if (data.errors) {
  //     this.props.setAuthenticated(true);
  //     this.props.history.push("/dashboard")
  //   } else {
  //     this.setState({ errors: data.errors });
  //   }
  //   // let servs = await dispatch(getServers());
  //   // if (servs && servs.length > 0) {
  //   //   return <Redirect to={`/servers/${servs[0].id}`} />
  //   // }
  //   return <Redirect to="/dashboard" />;
  // };

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={(event) => this.submitForm(event)}>
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={(element) => this.updateForm(element)}
          />

          {this.state.formError ? (
            <div className="error_label">Please check your data</div>
          ) : null}
          <button
            className="login-btn"
            onClick={(event) => this.submitForm(event)}
          >
            Log in
          </button>
          <button
            className="reset-btn"
            style={{ marginLeft: "10px" }}
            onClick={() => this.props.history.push("/reset_user")}
            // onClick={(event) => this.demoLogin(event)}
            //<button className="demo-button" type="submit" onClick={DemoLogin}>Demo User</button>
          >
            Forgot my password
          </button>
        </form>
      </div>
    );
  }
}

const actions={
  login
}

export default connect(null,actions)(withRouter(Login));
