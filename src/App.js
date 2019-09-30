import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import { Header } from './Components/Header'

import { Users } from './Screens/Users'
import { About } from './Screens/About'
import { Home } from './Screens/Home'

function App () {
  return (
    <Router>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <div className='App'>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
      </div>
    </Router>
  )
}

export default App
