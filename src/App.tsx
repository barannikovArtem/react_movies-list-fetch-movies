import { useCallback, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = useCallback((newMovie: Movie) => {
    if (!movies.find(movie => movie.imdbID === newMovie.imdbID)) {
      setMovies([...movies, newMovie]);
    } else {
      // eslint-disable-next-line
      alert('Film is already added');
    }
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        {movies && (
          <MoviesList movies={movies} />
        )}
      </div>
      <div className="sidebar">
        <FindMovie
          addMovie={addMovie}
        />
      </div>
    </div>
  );
};
