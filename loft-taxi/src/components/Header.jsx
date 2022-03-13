import '../App.css'
import { Logo } from '../pages/login/Logo'
import { withAuth } from './AuthContext'

export function Header(props) {
    const { setPage } = props
    logOut = () => {
      this.props.logOut();
      this.props.setPage({page: 'login'})
    }

    return (
        <header class="header">
        
        <nav>
        <div class="container-head">
          <p><Logo/></p>
          <button onClick={() => setPage('map')}>Карта</button>
          <button onClick={() => setPage('profile')}>Профиль</button>
          <button onClick={this.logOut}>Выйти</button>        
          </div>
        </nav>
        
      </header>
    )
}

export const HederWithAuth = withAuth(Header)