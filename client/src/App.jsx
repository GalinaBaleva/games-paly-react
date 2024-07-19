import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCreate from './components/game-create/GameCreate'
import GameEdit from './components/game-edit/GameEdit'
import GameDetails from './components/game-details/GameDetails'
import GameList from './components/game-list/GameList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="box">
      <main id="main-content">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/games' element={<GameList />} />
          <Route path='/games/create' element={<GameCreate />} />
          <Route path='/games/edit' element={<GameEdit />} />
          <Route path='/games/details' element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
