import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByKeyWord } from 'services/themoviedbAPI';
import Movies from 'components/Movies/Movies';
import { Container, SearchForm } from './MoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    getMovieByKeyWord(movieName)
      .then(movies => setMovies(movies))
      .catch(error => console.log(error));
  }, [movieName]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.keyword.value.trim();
    updateQueryString(searchQuery);
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <input type="text" name="keyword"></input>
        <button type="submit">Search</button>
      </SearchForm>
      {movies &&
        (movies.length > 0 ? (
          <Movies movies={movies} />
        ) : (
          <p>We did not find the movie.</p>
        ))}
    </Container>
  );
};

export default MoviesPage;
