import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup({ onLogin }) {
  const [form, setForm] = useState({ fullname: '', username: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullname, username, password } = form
    if (fullname && username && password) {
      localStorage.setItem('username', username)
      onLogin()
      navigate('/dashboard')
    }
  }

  return (
    <main>
      <h1>Sign Up</h1>
      <section className='card'>
        <p>Enter any fullname username and password to simulate a signup.</p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type='text'
              name='fullname'
              value={form.fullname}
              onChange={handleChange}
              placeholder='Full Name'
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
              placeholder='Username'
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder='Password'
              required
            />
          </div>
          <button type='submit'>Signup</button>
        </form>

        <p style={{ marginTop: '1rem', textDecoration: 'underline' }}>
          <Link to='/login'>
            {' '}
            Already have an account? <strong> Login here </strong>
          </Link>
        </p>
      </section>
    </main>
  )
}
