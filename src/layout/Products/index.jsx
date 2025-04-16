// src/components/Products.js
import { Outlet, NavLink } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className='card'>
        <p>This section demonstrates nested routes in React Router.</p>

        <nav className='sub-nav'>
          <NavLink to='/products/featured'>Featured Products</NavLink>
          <NavLink to='/products/new'>New Arrivals</NavLink>
        </nav>

        <div className='nested-content'>
          <Outlet />
        </div>
      </div>
    </div> 
  )
}
