import React, { Component } from 'react';
import { HomeWIthAuth } from '../src/pages/login/Login'
import { Rego } from '../src/pages/registration/Rego'
import { ProfileWithAuth } from '../src/pages/profile/Profile'
import { HederWithAuth } from '../src/components/Header'
import { Routes, Route, Navigate } from 'react-router-dom';
import {PrivatePage} from './PrivateRoute'
import { Map } from '../src/pages/map/Map'
import './App.css'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types';

const ProtectedPage = ({ component }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return isLoggedIn ? component : <Navigate to='/' />
}

class App extends React.Component {
  static defaultProps= {
    isLoggedIn: false
  }

  render() {

    return (
      <main>
        <section>
          {this.props.isLoggedIn ? <HederWithAuth /> : <></>}
          <Routes>
            <Route exact path='/' element={<HomeWIthAuth />} />
            <Route exact path='/rego' element={<Rego />} />
            <Route exact path='/profile' element={<ProtectedPage component={<ProfileWithAuth />} />} />
            {/* <Route exact path='/map' element={<ProtectedPage component={<Map />} />} /> */}
            <Route exact path='/map' element={<PrivatePage component={<Map/>} flag={this.props.isLoggedIn}/>} />
            <Route path='*' element={<Navigate to='/map' />} />
          </Routes>
        </section>
      </main>
    )
  }
}
App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(App);