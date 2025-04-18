import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ handleLogout, isAuthenticated }) => {
  return (
    <nav className='main-nav'>
      <div className='container'>
        <Link to='/' className='logo'>
          React Router Tutorial
        </Link>
        <ul className='nav-links'>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/user/123'>User Profile</NavLink>
          <NavLink to='/search'>Search</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to='/dashboard'>Dashboard</NavLink>
              <NavLink
                onClick={() => {
                  handleLogout()
                }}
                style={{ background: 'red' }}
              >
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink to='/login'>Login</NavLink>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
