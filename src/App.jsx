import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

import { useState } from 'react'
import Home from './layout/Home'
import User from './layout/User'
import Search from './layout/Search'
import Login from './layout/Login'
import ProtectedRoute from './component/ProtectedRoute'
import Dashboard from './layout/Dashboard'
import Products from './layout/Products'
import NotFound from './layout/NotFound'
import FeaturedProducts from './layout/FeaturedProducts'
import NewProducts from './layout/NewProducts'
import NavBar from './component/NavBar'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <BrowserRouter>
      <div className='app'>
        <NavBar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />

        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login onLogin={handleLogin} />} />
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path='/products' element={<Products />}>
              <Route
                index
                element={
                  <strong
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Select a category
                  </strong>
                }
              />
              <Route path='featured' element={<FeaturedProducts />} />
              <Route path='new' element={<NewProducts />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
