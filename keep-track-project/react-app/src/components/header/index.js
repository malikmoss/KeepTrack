import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.css"
import { connect } from "react-redux";
import {logout} from "../../store/session"
class Header extends Component {


  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true,
      },
      {
        name: "shop",
        linkTo: "/shop",
        public: true,
      },
    ],
    user: [
      {
        name: "My Account",
        linkTo: "/user/dashboard",
        public: false,
      },
      {
        name: "Log in",
        linkTo: "/register_login",
        public: true,
      },
      {
        name: "Log out",
        linkTo: "/user/logout",
        public: false,
      },
    ],
  };

  logoutHandler = () => {};

  defaultLink = (item, i) =>
    item.name === "Log out" ? (
      <div
        className="log_out_link"
        key={i}
        onClick={() => this.props.logout()}
      >
        {item.name}
      </div>
    ) : (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    );

  showLinks = (type) => {
    let list = [];

    type.forEach((item) => {
      if (!this.props.user.user ) {
        if (item.public === true) {
          list.push(item);
        }
      } else {
        if (item.name !== "Log in") {
          list.push(item);
        }
      }
    });

    return list.map((item, i) => {
      return this.defaultLink(item, i);
    });
  };

  render() {
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">KeepTrack</div>
          </div>
          <div className="right">
            <div className="top">{this.showLinks(this.state.user)}</div>
            <div className="bottom">{this.showLinks(this.state.page)}</div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.session,
  };
}
const actions={
  logout
}

export default connect(mapStateToProps,actions)(withRouter(Header));
