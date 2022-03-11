import React from 'react';
import { Map } from '../src/pages/map/Map'
import { Login } from '../src/pages/login/Login'
import { Rego } from '../src/pages/registration/Rego'
import { Profile } from '../src/pages/profile/Profile'
import './App.css'


const PAGES = {
  login: Login,
  profile: Profile,
  map: Map,
  rego: Rego
}

class App extends React.Component {
  state = {page: 'login'}

  setPage = (page) => {
    this.setState({ page })
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

export default App;