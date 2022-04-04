import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { sendRegisterRequest } from "../../actions";

// const navigate = useNavigate();

class RegoComponent extends Component {

    // navigate = useNavigate();

    registration = (event) => {
        event.preventDefault();
        console.log("rego: ");
        const { email, password, name, surname } = event.target;
        console.log(email.value);
        this.props.sendRegisterRequest({
          email: email.value,
          password: password.value,
          name: name.value,
          surname: surname.value,
        });
      };

  render() {
    return (
      <>
      {this.props.isLoggedIn ? <Navigate to='/map'/> : <h3>Зарегистрируйтесь</h3>}
        <form onSubmit={this.registration}>
          <input
            id="email"
            name="email"
            placeholder="email"
            type="text"
            autoComplete="email"
          />
          <input
            id="password"
            name="password"
            placeholder="Пароль"
            type="password"
            autoComplete="password"
          />
          <input
            id="name"
            name="name"
            placeholder="Имя"
            type="text"
            autoComplete="Name"
          />
          <input
            id="surname"
            name="surname"
            placeholder="Фамилия"
            type="text"
            autoComplete="Surname"
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <Link to="/">Back</Link>
        {/* <button onClick={() => this.navigate("/")}>Go Back</button> */}
        <p>Error : </p>{this.props.error}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn, error: state.rego.error });
const mapDispatchToProps = { sendRegisterRequest };

export const Rego = connect(mapStateToProps, mapDispatchToProps)(RegoComponent);
