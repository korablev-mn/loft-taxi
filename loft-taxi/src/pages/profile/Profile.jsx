import React, { Component } from 'react'
import './profile.css'
import { Master } from './Master'
import { connect } from 'react-redux'
import { getCard } from '../../api'
import { card } from "../../actions";

export class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            cardName: 'USER',
            expiryDate: '01/22',
            cardNumber: '0000 0000 0000 0000',
            cvc: '000'
        }
    }
    card = (event) => {
        event.preventDefault();
        // const { email, password } = event.target;
        this.props.card();
      };
    
    async componentDidMount() {
        if(localStorage.getItem('token')) {
            console.log('have token');
            try{
            const {cardNumber, expiryDate, cardName, cvc } = getCard()
            this.setState({
                cardName: cardName,
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cvc: cvc
            })
            console.log('card: ' + cardNumber +' '+ expiryDate +' ' + cardName + ' '+ cvc);
            } catch(e) {
                console.log('Error: ' + e);
            }
        }
    }
    
    render() {
        const { error, isLoaded, cardNumber, expiryDate, cardName, cvc} = this.state
        if(error) {
            return <div> Error: {error} </div>
        } else if (!isLoaded) {
            return <div> Загрузка... </div>
        } else {
    return (
    <>
      <div class="root">
        <div class="container">
            <div class="container-box-">
                <div class="box-form-">
                    <h1>Профиль</h1>
                    <p>Способ оплаты</p>
                    <form onSubmit={this.card}>
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
                                                      <input id='number' name="number" placeholder="0000 0000 0000 0000" required="" type="text" value={cardNumber}/>
                                                  </div>
                                                </div>
                                                <div class="input-card-data">
                                                    <div class="card-data-format">
                                                        <input id='data' name="data" placeholder="03/22" required="" type="text" value={expiryDate}/>
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
                                                      <input id='username' name="username" placeholder="USER NAME" required="" type="text" value={cardName}/>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="input-card-data top-right-cvc">
                                                <div class="card-data-format">
                                                    <input id='cvc' name="cvc" placeholder="CVC" required="" type="text" value={cvc}/>
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
        
    )}}
}

export const ProfileWithAuth = connect(null, card)(Profile)