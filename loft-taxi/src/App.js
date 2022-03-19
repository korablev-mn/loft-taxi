import React from 'react';

import { HomeWIthAuth } from '../src/pages/login/Login'
import { Rego } from '../src/pages/registration/Rego'
import { ProfileWithAuth } from '../src/pages/profile/Profile'
import { HederWithAuth } from '../src/components/Header'
import { Routes, Route } from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute'
import { Map } from '../src/pages/map/Map'
import './App.css'
import { connect } from 'react-redux'

class App extends React.Component {
  
  render() {

    return (
        <main>
          <section>
            { this.props.isLoggedIn ? <HederWithAuth /> : <></> }
            <Routes>
              <Route exact path='/' element={<HomeWIthAuth/>} />
              <Route exact path='/rego' element={<Rego/>} />
              <PrivateRoute path='/profile' element={<ProfileWithAuth/>} />
              <PrivateRoute path='/map' element={<Map/>} />
              {/* <Route exact path='/profile' element={<ProfileWithAuth/>} />
              <Route exact path='/map' element={<Map/>} /> */}
            </Routes>
          </section>
        </main>
    )
  }
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(App);