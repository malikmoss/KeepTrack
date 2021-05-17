import MyButton from "../utils/button";
import Login from "./login";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./register-login.css";

class RegisterLogin extends Component {
  componentDidMount() {
    if (this.props.user.user) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <h1>New Account</h1>
              <p>
                Clicke the button below to creater your user account.{" "}
              </p>
              <MyButton
                type="default"
                title="Create an account"
                linkTo="/register"
                addStyles={{
                  margin: "10px 0 0 0",
                }}
              />
            </div>
            <div className="right">
              <h2>Registered customers</h2>
              <p>If you have an account please log in.</p>
              <Login   authenticated={this.props.authenticated}
            setAuthenticated={this.props.setAuthenticated} />
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

export default connect(mapStateToProps)(RegisterLogin);
// export default RegisterLogin;
