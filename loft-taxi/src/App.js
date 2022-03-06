import React from 'react';
import { Home } from './components/home/Home'
import { Map } from './components/map/Map'
import { Profile } from './components/profile/Profile'

const PAGES = {
  home: <Home/>,
  profile: <Profile/>,
  map: <Map/>
}

class App extends React.Component {
  state = {page: 'home'}

  navigatePage = (page) => {
    this.setState({ page })
  }

  render () {
    // const { page } = this.state
    // const Page = PAGES[page]
    return (
      <>
      <header>
        <nav>
          <button onClick={() => this.navigatePage('home')}>Home</button>
          <button onClick={() => this.navigatePage('profile')}>Profile</button>
          <button onClick={() => this.navigatePage('map')}>Map</button>
        </nav>
      </header>
      <main>
        <section>
          { PAGES[this.state.page] }
        </section>
         {/* <Page setPage={this.navigatePage}/> */}
      </main>
      </>
    )
  }
}

export default App;
