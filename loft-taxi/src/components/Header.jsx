import '../App.css'
import { Logo } from '../pages/login/Logo'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions'

export class Header extends Component {
    
    exit = () => {
      console.log('выход');
      this.props.setPage('login')
      this.props.logOut();
    }
    render(){
    const { setPage } = this.props
    return (
        <header class="header">
        
        <nav>
        <div class="container-head">
          <p><Logo/></p>
          <span><Link to='/map'>Карта</Link></span>
          <span><Link to='/profile'>Профиль</Link></span>
          <span><Link to='/'>Выйти</Link></span>
          
          {/* <button onClick={() => setPage('map')}>Карта</button>
          <button onClick={() => setPage('profile')}>Профиль</button>
          <button onClick={this.exit}>Выйти</button>         */}
          </div>
        </nav>
        
      </header>
    )}
}

export const HederWithAuth = connect(
  null, { logOut }
)(Header)