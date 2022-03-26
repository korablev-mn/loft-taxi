import React, { Component } from 'react'
import './profile.css'
import { Master } from './Master'
import { connect } from 'react-redux'
import { getCardRequest, setCardRequest } from "../../actions";

export class Profile extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         // error: null,
    //         // isLoading: false,
    //         cardName: 'USER',
    //         expiryDate: '01/22',
    //         cardNumber: '0000 0000 0000 0123',
    //         cvc: '123'
    //     }
    // }
    card = (event) => {
        event.preventDefault();
        const { token } = this.props
        const { cardNumber, expiryDate, cardName, cvc } = event.target;
        console.log('setCard: ');
        console.log(cardNumber, expiryDate, cardName, cvc, token);
        this.props.setCardRequest({
            cardNumber: cardNumber.value,
            expiryDate: expiryDate.value,
            cardName: cardName.value,
            cvc: cvc.value,
            token
        });
      };
    
    componentDidMount() {
        if(localStorage.getItem('token')) {
        const { getCardRequest } = this.props
        console.log('getCardRequest');
        console.log(getCardRequest);
        getCardRequest()
        }
        // if(localStorage.getItem('token')) {
        //     this.setState({isLoading: true})
        //     console.log('have token');
        //     try{
        //     const {cardNumber, expiryDate, cardName, cvc } = getCards()
        //     this.setState({
        //         cardName: cardName,
        //         cardNumber: cardNumber,
        //         expiryDate: expiryDate,
        //         cvc: cvc
        //     })
        //     console.log('card: ' + cardNumber +' '+ expiryDate +' ' + cardName + ' '+ cvc);
        //     this.setState({isLoading: false})
        //     } catch(e) {
        //         console.log('Error: ' + e);
        //         this.setState({error: e, isLoading: false})
        //     }
        // }
    }
    
    render() {
        const { card, isLoading, error } = this.props
        if(error) {
            return <div> Error: {error} </div>
        } else if (isLoading) {
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
                                                  <label htmlFor='cardNumber'>Номер карты *</label>
                                                  <div class="number-form">
                                                      <input id='cardNumber' name="cardNumber" placeholder="0000 0000 0000 0000" type="text" defaultValue={card.cardNumber}/>
                                                  </div>
                                                </div>
                                                <div class="input-card-data">
                                                    <div class="card-data-format">
                                                        <input id='expiryDate' name="expiryDate" placeholder="03/22" type="text" defaultValue={card.expiryDate}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-card">
                                        <div class="card-box">
                                            <div class="card-content top-right">
                                              <div class="input-card-number">
                                                  <label htmlFor='cardName'>Имя владельца *</label>
                                                  <div class="number-form">
                                                      <input id='cardName' name="cardName" placeholder="USER NAME" type="text" defaultValue={card.cardName}/>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="input-card-data top-right-cvc">
                                                <div class="card-data-format">
                                                    <input id='cvc' name="cvc" placeholder="CVC" type="text" defaultValue={card.cvc}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="enter-">
                                    <button type="submit">
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

const mapStateToProps = (state) => ({ card: state.card, token: state.auth.token})
const mapDispatchToProps = { getCardRequest, setCardRequest }

export const ProfileWithAuth = connect(mapStateToProps, mapDispatchToProps)(Profile)