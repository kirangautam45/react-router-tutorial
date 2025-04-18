import { Routes, Route } from 'react-router-dom'

import Home from '../../layout/Home'
import User from '../../layout/User'
import Search from '../../layout/Search'
import Login from '../../layout/Login'
import Dashboard from '../../layout/Dashboard'
import Products from '../../layout/Products'
import NotFound from '../../layout/NotFound'
import FeaturedProducts from '../../layout/FeaturedProducts'
import NewProducts from '../../layout/NewProducts'
import ProtectedRoute from '../ProtectedRoute'

export const AppRoutes = ({ isAuthenticated, handleLogin }) => {
  return (
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
                fontSize: '16px',
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
  )
}
