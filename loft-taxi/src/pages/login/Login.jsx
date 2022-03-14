import { React, Component } from 'react'
import { withAuth } from '../../components/AuthContext'
import './login.css'
import { Logo } from './Logo'

class Login extends Component {

  goToProfile = () => {
    this.props.setPage('profile')
  }

  authenticate = (event) => {
    event.preventDefault()
    const {email, password } = event.target;
    this.props.logIn(email.value, password.value)
  }
  render() {
  const { setPage } = this.props

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
                    <p> You are logged <button onClick={this.goToProfile}>Profile</button></p>
                  ) : (
                <form class="form" onSubmit={this.authenticate}>
                  <div class="form-content">
                    <div class="first-input input">
                      <h1>Войти</h1>
                      <p>Новый пользователь? 
                        <a onClick={() => setPage('rego')}>Зарегистрируйтесь</a>
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
                      <button class="enter" tabindex="0" type="submit">
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

export const HomeWIthAuth = withAuth(Login)