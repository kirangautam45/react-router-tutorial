import { reactRouterconcept } from '../../data'
export default function Home() {
  return (
    <>
      <h1>Welcome to React Router</h1>
      <section className='card'>
        <h2>Getting Started</h2>
        <p>
          This tutorial demonstrates how to implement routing in a React
          application using React Router.
        </p>
        <p>
          Navigate through the different pages using the navigation bar above.
        </p>
      </section>

      <section className='card'>
        <h2>Key Concepts</h2>
        <p>Learn about essential React Router concepts like:</p>
        <ul style={{ marginLeft: '1.5rem' }}>
          {reactRouterconcept.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
