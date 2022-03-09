import React from 'react'
import './home.css'
import { Logo } from './Logo'

export const Home = () => {
    return (
      <>
      <div class="root">
          <div class="container">
            <div class="box">
              <Logo/>
            </div>
            <div class="box">
              <div class="form-container">
                <form class="form">
                  <div class="form-content">
                    <div class="first-input input">
                      <h1>Войти</h1>
                      <p>Новый пользователь? 
                        <a href="https://boring-mcclintock-9267da.netlify.app/signup">Зарегистрируйтесь</a>
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

    {/* <form>
      <label htmlFor='email'>Email:</label>
      <input id='email' type='email' name='email' size='28'/>
      <label htmlFor='pass'>Password:</label>
      <input id='pass' type='password' name='password' size='28'/>
    </form> */}
    </>
    )
}