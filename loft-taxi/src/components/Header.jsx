import '../App.css'
import { Logo } from '../pages/login/Logo'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions'
import { Link } from 'react-router-dom';

export class Header extends Component {
    
    exit = () => {
      console.log('выход');
      this.props.logOut();
    }

    render(){
    return (
        <header class="header">
        
        <nav>
        <div class="container-head">
          <p><Logo/></p>
          <span><Link to='/map' class='noneBorder'>Карта</Link></span>
          <span><Link to='/profile' class='noneBorder'>Профиль</Link></span>
          <button onClick={this.exit}>Выйти</button>
          </div>
        </nav>  
      </header>
    )}
}

export const HederWithAuth = connect(
  null, { logOut }
)(Header)