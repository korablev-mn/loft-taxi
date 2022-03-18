import '../App.css'
import { Logo } from '../pages/login/Logo'
import { withAuth } from './AuthContext'
import React, { Component } from 'react'

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
          <button onClick={() => setPage('map')}>Карта</button>
          <button onClick={() => setPage('profile')}>Профиль</button>
          <button onClick={this.exit}>Выйти</button>        
          </div>
        </nav>
        
      </header>
    )}
}

export const HederWithAuth = withAuth(Header)