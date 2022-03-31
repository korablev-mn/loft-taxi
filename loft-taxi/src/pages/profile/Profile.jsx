import React, { Component } from 'react'
import style from './profile.module.css'
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
      <div className={style.root}>
        <div className={style.container}>
            <div className={style.container_box}>
                <div className={style.box_form}>
                    <h1>Профиль</h1>
                    <p>Способ оплаты</p>
                    <form onSubmit={this.card}>
                        <div className={style.form_container}>
                            <div className={style.form_box}>
                                <div className={style.form_input}>
                                    <div className={style.form_card}>
                                        <div className={style.card_box}>
                                            <div className={style.card_content}>
                                                <span>
                                                    <Master/>
                                                </span>
                                                <div className={style.input_card_number}>
                                                  <label htmlFor='cardNumber'>Номер карты *</label>
                                                  <div className={style.number_form}>
                                                      <input id='cardNumber' name="cardNumber" placeholder="0000 0000 0000 0000" type="text" defaultValue={card.cardNumber}/>
                                                  </div>
                                                </div>
                                                <div className={style.input_card_data}>
                                                    <div className={style.card_data_format}>
                                                        <input id='expiryDate' name="expiryDate" placeholder="03/22" type="text" defaultValue={card.expiryDate}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.form_card}>
                                        <div className={style.card_box}>
                                            <div className={`${style.card_content} ${style.top_right}`}>
                                              <div className={style.input_card_number}>
                                                  <label htmlFor='cardName'>Имя владельца *</label>
                                                  <div className={style.number_form}>
                                                      <input id='cardName' name="cardName" placeholder="USER NAME" type="text" defaultValue={card.cardName}/>
                                                  </div>
                                              </div>
                                            </div>
                                            <div className={`${style.input_card_data} ${style.top_right_cvc}`}>
                                                <div className={style.card_data_format}>
                                                    <input id='cvc' name="cvc" placeholder="CVC" type="text" defaultValue={card.cvc}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.enter}>
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