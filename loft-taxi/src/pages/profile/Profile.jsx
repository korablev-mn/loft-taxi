import React, { Component } from 'react'
import './profile.css'
import { Master } from './Master'
import { HederWithAuth } from '../../components/Header'
import { withAuth } from '../../components/AuthContext'

export class Profile extends Component {
    
    render() {
    const { setPage } = this.props;
    return (
    <>
    <HederWithAuth setPage={setPage}/>
      <div class="root">
        <div class="container">
            <div class="container-box-">
                <div class="box-form-">
                    <h1>Профиль</h1>
                    <p>Способ оплаты</p>
                    <form>
                        <div class="form-container-">
                            <div class="form-box-">
                                <div class="form-input-">
                                    <div class="form-card">
                                        <div class="card-box">
                                            <div class="card-content">
                                                <span>
                                                    <Master/>
                                                </span>
                                                <div class="input-card-number">
                                                  <label htmlFor='number'>Номер карты *</label>
                                                  <div class="number-form">
                                                      <input id='number' name="number" placeholder="0000 0000 0000 0000" required="" type="text" value=""/>
                                                  </div>
                                                </div>
                                                <div class="input-card-data">
                                                    <div class="card-data-format">
                                                        <input id='data' name="data" placeholder="03/22" required="" type="text" value="03/22"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-card">
                                        <div class="card-box">
                                            <div class="card-content top-right">
                                              <div class="input-card-number">
                                                  <label htmlFor='username'>Имя владельца *</label>
                                                  <div class="number-form">
                                                      <input id='username' name="username" placeholder="USER NAME" required="" type="text" value=""/>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="input-card-data top-right-cvc">
                                                <div class="card-data-format">
                                                    <input id='cvc' name="cvc" placeholder="CVC" required="" type="text" value=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="enter-">
                                    <button tabindex="0" type="submit">
                                        <span>Сохранить</span>
                                    </button>  
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
    )}
}

export const ProfileWithAuth = withAuth(Profile)