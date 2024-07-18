import { useState } from 'react'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Login from './login/Login'
import Register from './components/register/Register'
import GameCreate from './components/game-create/GameCreate'
import GameEdit from './components/game-edit/GameEdit'
import GameDetails from './game-details/GameDetails'
import GameList from './components/game-list/GameList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="box">
        <main id="main-content">
          <Header />
          <Home />
          <Login />
          <Register />
          <GameCreate />
          <GameEdit />
          <GameDetails /> 
          <GameList />
        </main>
      </div>

    </>
  )
}

export default App
