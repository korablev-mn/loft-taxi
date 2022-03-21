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
        <header className="header">
        
        <nav>
        <div className="container-head">
          <div><Logo className='logo'/></div>
          <span><Link to='/map' className='noneBorder'>Карта</Link></span>
          <span><Link to='/profile' className='noneBorder'>Профиль</Link></span>
          <button onClick={this.exit}>Выйти</button>
          </div>
        </nav>  
      </header>
    )}
}

export const HederWithAuth = connect(
  null, { logOut }
)(Header)