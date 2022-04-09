import { React, Component } from "react";
import "./login.css";
import { Logo } from "./Logo";
import { connect } from "react-redux";
import { auth } from "../../actions";
import { Link, Navigate } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enable: true
    };
  }

  authenticate = (event) => {
    this.setState({enable: false})
    event.preventDefault();
    const { email, password } = event.target;
    this.props.auth(email.value, password.value);
    this.setState({enable: this.props.isLoggedIn})
  };

  render() {
  const styleOn = {
    backgroundColor: 'rgb(230, 206, 178)'
  }
  const styleOff = {
    backgroundColor: 'gray'
  }
    return (
      <>
      {this.props.isLoggedIn && <Navigate to="/map" />}

      <div className="root">
        <div className="container">
          <div className="box">
            <Logo />
          </div>
          <div className="box">
            <div className="form-container">
              <form className="form" onSubmit={this.authenticate}>
                <div className="form-content">
                  <div className="first-input input">
                    <h1>Войти</h1>
                    <p>
                      Новый пользователь?
                      <Link to="/rego">Зарегистрируйтесь</Link>
                    </p>
                  </div>
                  <div className="input">
                    <div className="div-block">
                      <label htmlFor="email">Имя пользователя*</label>
                      <div className="div-input">
                        <input
                          id="email"
                          name="email"
                          placeholder="Имя пользователя"
                          type="text"
                          autoComplete="user"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input">
                    <div className="div-block">
                      <label htmlFor="password">Пароль</label>
                      <div className="div-input">
                        <input
                          id="password"
                          name="password"
                          placeholder="Пароль"
                          type="password"
                          autoComplete="current-password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input" align="right">
                    <button className="enter" type="submit" disabled={!this.state.enable} style={this.state.enable ? styleOn : styleOff }>
                      <span>Войти</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export { Login };

export const HomeWIthAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { auth }
)(Login);
