import React from 'react';
import { Map } from '../src/pages/map/Map'
import { HomeWIthAuth } from '../src/pages/login/Login'
import { Rego } from '../src/pages/registration/Rego'
import { ProfileWithAuth } from '../src/pages/profile/Profile'
import { withAuth } from './components/AuthContext';
import './App.css'


const PAGES = {
  login: (props) => <HomeWIthAuth {... props}/>,
  profile: (props) => <ProfileWithAuth {... props}/>,
  map: (props) => <Map {... props}/>,
  rego: Rego
}

class App extends React.Component {
  state = {page: 'login'}

  setPage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ page })
    } else {
      this.setState({ page: 'login' })
    }
    
  }

  render () {
    const { page } = this.state
    const Page = PAGES[page]

    return (
      <>
      <main>
        <section>
          {/* { PAGES[this.state.page] } */}
          <Page setPage = {this.setPage} />
        </section>
      </main>
      </>
    )
  }
}

export default withAuth(App);