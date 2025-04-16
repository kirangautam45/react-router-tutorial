export default function Home() {
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <div className='card'>
        <h2>Getting Started</h2>
        <p>
          This tutorial demonstrates how to implement routing in a React
          application using React Router.
        </p>
        <p>
          Navigate through the different pages using the navigation bar above.
        </p>
      </div>

      <div className='card'>
        <h2>Key Concepts</h2>
        <p>Learn about essential React Router concepts like:</p>
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>Basic routing</li>
          <li>URL parameters</li>
          <li>Nested routes</li>
          <li>Protected routes</li>
          <li>Query parameters</li>
        </ul>
      </div>
    </div>
  )
}
