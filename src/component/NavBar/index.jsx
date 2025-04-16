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
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/user/123'>User Profile</NavLink>
          </li>
          <li>
            <NavLink to='/search'>Search</NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout()
                  }}
                  style={{ background: 'red' }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
