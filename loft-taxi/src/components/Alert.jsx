import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export class Alert extends Component {
    
    render(){
    return (
        <div className="container_head_">
          <div>Заполните профиль</div>
          <span><Link to='/profile' className='noneBorder'>Профиль</Link></span>
        </div>
    )}
}

export const AlertAuth = connect(
  null, null
)(Header)