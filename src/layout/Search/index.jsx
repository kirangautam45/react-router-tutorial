import { useSearchParams } from 'react-router-dom'

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    setSearchParams({ q: formData.get('query') })
  }

  return (
    <div>
      <h1>Search</h1>
      <div className='card'>
        <p>This component demonstrates working with query parameters.</p>
        <form onSubmit={handleSearch}>
          <input
            name='query'
            defaultValue={query}
            placeholder='Search term...'
          />
          <button type='submit'>Search</button>
        </form>

        {query && (
          <div style={{ marginTop: '1.5rem' }}>
            <h2>Search Results for: {query}</h2>
            <p>Displaying search results for "{query}"...</p>
          </div>
        )}
      </div>
    </div>
  )
}
