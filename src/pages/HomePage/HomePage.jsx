import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMovies } from 'services/themoviedbAPI';
import Movies from 'components/Movies/Movies';
import { Container } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(movies => setMovies(movies))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <Movies movies={movies} />
    </Container>
  );
};

export default HomePage;
