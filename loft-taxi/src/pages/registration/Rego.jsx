import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { sendRegisterRequest } from "../../actions";
import { FormErrors } from "./FormErrors";

// const navigate = useNavigate();

class RegoComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      formErrors: {email: '', password: '', name: '', surname: ''},
      emailValid: false,
      passwordValid: false,
      nameValid: false,
      surnameValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let nameValid = this.state.nameValid
    let surnameValid = this.state.surnameValid

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': '  is too short';
        break;
      case 'name':
        nameValid = value.length > 0
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break
      case 'surname':
        surnameValid = value.length > 0
        fieldValidationErrors.surname = surnameValid ? '': ' is too short';
        break
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    nameValid: nameValid,
                    surnameValid: surnameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid &&
                              this.state.passwordValid && this.state.nameValid && this.state.surnameValid});
  }

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
    const styleOn = {
      backgroundColor: 'rgb(230, 206, 178)'
    }
    const styleOff = {
      backgroundColor: 'gray'
    }
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
            value={this.state.email}
            onChange={this.handleUserInput}
          />
          <input
            id="password"
            name="password"
            placeholder="Пароль"
            type="password"
            autoComplete="password"
            value={this.state.password}
            onChange={this.handleUserInput}
          />
          <input
            id="name"
            name="name"
            placeholder="Имя"
            type="text"
            autoComplete="Name"
            value={this.state.name}
            onChange={this.handleUserInput}
          />
          <input
            id="surname"
            name="surname"
            placeholder="Фамилия"
            type="text"
            autoComplete="Surname"
            value={this.state.surname}
            onChange={this.handleUserInput}
          />
          <button type="submit" disabled={!this.state.formValid} style={this.state.formValid ? styleOn : styleOff }>Зарегистрироваться</button>
        </form>
        <Link to="/">Back</Link>
        {/* <button onClick={() => this.navigate("/")}>Go Back</button> */}
        <p>Error : </p>{this.props.error}
        <div>
          <FormErrors formErrors={this.state.formErrors}/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn, error: state.rego.error });
const mapDispatchToProps = { sendRegisterRequest };

export const Rego = connect(mapStateToProps, mapDispatchToProps)(RegoComponent);
