import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, emailLogin } from "../actions/userAction";

import LoginHeader from "./LoginHeader";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.props;
    this.props.emailLogin(user);
    this.setState({
      email: "",
      password: ""
    });
  }

  componentWillMount() {
    if (this.props.user !== null) {
      // console.log(this.props.history);
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push("/top");
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="">
            <h4>
              Ryouchike. <br />
              Fanclubesite {new Date().getFullYear()}
            </h4>
          </div>
          <LoginHeader />
          <div className="email-login">
            <div className="email-form">
              <from onSubmit={this.handleSubmit}>
                <br />
                <p>Login with Email</p>
                <br />
                <p>メールアドレス</p>
                <input
                  type="email"
                  name="email"
                  // value={this.state.email}
                  onChange={this.handleChange}
                />
                <br />
                <br />
                <p>パスワード</p>
                <input
                  type="password"
                  name="password"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
                <br />
                <br />
                <button type="submit" className="login-btn">
                  ログイン
                </button>
                <br />
                <br />
              </from>
            </div>
            <div className="text-center">
              <button className="btn " onClick={this.props.googleLogin}>
                Login with Google
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, onwProps) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { googleLogin, emailLogin }
)(Login);
