import { React, Component } from 'react'
import './login.css'
import { Logo } from './Logo'
import { connect } from 'react-redux'
import { auth } from '../../actions'
import { Link } from 'react-router-dom'

class Login extends Component {

  authenticate = (event) => {
    event.preventDefault()
    const {email, password } = event.target;
    this.props.auth(email.value, password.value)
  }
  
  render() {

    return (
      <div class="root">
          <div class="container">
            <div class="box">
              <Logo/>
            </div>
            <div class="box">
              <div class="form-container">
                {
                  this.props.isLoggedIn ? (
                    <p> You are logged <Link to='/profile'>Profile</Link></p>
                  ) : (
                <form class="form" onSubmit={this.authenticate}>
                  <div class="form-content">
                    <div class="first-input input">
                      <h1>Войти</h1>
                      <p>Новый пользователь? 
                        <Link to='/rego'>Зарегистрируйтесь</Link>
                      </p>
                    </div>
                    <div class="input">
                      <div class="div-block">
                        <label htmlFor='email'>Имя пользователя*</label>
                        <div class="div-input">
                          <input id='email' name="email" placeholder="Имя пользователя" type="text"/>
                        </div>
                      </div>
                    </div>
                    <div class="input">
                      <div class="div-block">
                        <label htmlFor='password'>Пароль</label>
                        <div class="div-input">
                          <input id='password' name="password" placeholder="Пароль" type="password"/>
                        </div>
                      </div>
                    </div>
                    <div class="input" align="right">
                      <button class="enter" type="submit">
                        <span>Войти</span>
                      </button>
                    </div>
                  </div>
                </form>
                  )
                }
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export { Login }

export const HomeWIthAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { auth }
)(Login)