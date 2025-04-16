export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='card'>
        <h2>Welcome to your Dashboard</h2>
        <p>
          This is a protected route. You can only access this page after logging
          in.
        </p>
        <p>
          Try logging out and accessing this page directly - you'll be
          redirected to the login page.
        </p>
      </div>
    </div>
  )
}
