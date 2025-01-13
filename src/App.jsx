import './App.css'
import responseMovie from './mocks/with-results.json'

function App() {
  const movies = responseMovie.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix ...'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? (
              <ul>
                {
                  movies.map((movie) => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  ))
                }
              </ul>
            )
          : (
            <p>No se encontraron peliculas para esta busqueda</p>
          )
        }
      </main>
    </div>
  )
}

export default App
