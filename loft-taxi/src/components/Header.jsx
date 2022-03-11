import '../App.css'
import { Logo } from '../pages/login/Logo'

export function Header(props) {
    const { setPage } = props

    return (
        <header class="header">
        
        <nav>
        <div class="container-head">
          <p><Logo/></p>
          <button onClick={() => setPage('map')}>Карта</button>
          <button onClick={() => setPage('profile')}>Профиль</button>
          <button onClick={() => setPage('login')}>Выйти</button>        
          </div>
        </nav>
        
      </header>
    )
}