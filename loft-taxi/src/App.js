import React from 'react';
import { Home } from './components/home/Home'
import { Map } from './components/map/Map'
import { Profile } from './components/profile/Profile'
import './App.css'
import { Logo } from '../src/components/home/Logo'

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
    return (
      <>
      <header class="header">
        
        <nav>
        <div class="container-head">
          <p><Logo/></p>
          <button onClick={() => this.navigatePage('map')}>Карта</button>
          <button onClick={() => this.navigatePage('profile')}>Профиль</button>
          <button onClick={() => this.navigatePage('home')}>Выйти</button>        
          </div>
        </nav>
        
      </header>
      <main>
        <section>
          { PAGES[this.state.page] }
        </section>
      </main>
      </>
    )
  }
}

export default App;
