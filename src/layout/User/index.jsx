import { useParams } from 'react-router-dom'

export default function User() {
  const { userId } = useParams()

  return (
    <div>
      <h1>User Profile</h1>
      <div className='card'>
        <div className='user-profile'>
          <div className='user-avatar'>{userId.charAt(0).toUpperCase()}</div>
          <div className='user-info'>
            <h2>User #{userId}</h2>
            <p>
              This page demonstrates how to use URL parameters in React Router.
            </p>
            <p>
              The user ID is extracted from the URL: <strong>{userId}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
