import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MoviesList, Link } from './Movies.styled';

const Movies = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </MoviesList>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movies;
