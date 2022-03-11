import { React, Component } from 'react'
import './login.css'
import { Logo } from './Logo'

class Login extends Component {
  render() {
  const { setPage } = this.props

    return (
      <>
      <div class="root">
          <div class="container">
            <div class="box">
              <Logo/>
            </div>
            <div class="box">
              <div class="form-container">
                <form class="form" onSubmit={() => setPage('map')}>
                  <div class="form-content">
                    <div class="first-input input">
                      <h1>Войти</h1>
                      <p>Новый пользователь? 
                        <a onClick={() => setPage('rego')}>Зарегистрируйтесь</a>
                      </p>
                    </div>
                    <div class="input">
                      <div class="div-block">
                        <label htmlFor='email'>
                        Имя пользователя*
                        </label>
                        <div class="div-input">
                          <input id='email' name="email" placeholder="Имя пользователя" required="" type="text" value=""/>
                        </div>
                      </div>
                    </div>
                    <div class="input">
                      <div class="div-block">
                        <label htmlFor='pass'>Пароль
                        </label>
                        <div class="div-input">
                          <input id='pass' name="pass" placeholder="Пароль" required="" type="password" value=""/>
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
              </div>
            </div>
          </div>
      </div>
    </>
    )
  }
}

export { Login }