import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='error-page'>
      <h1>404: Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <p>Please check the URL or return to the homepage.</p>
      <Link to='/'> ← Return to Home</Link>
    </div>
  )
}
