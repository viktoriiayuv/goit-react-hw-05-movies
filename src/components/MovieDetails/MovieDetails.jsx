import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  BtnLink,
  MainInfoContainer,
  MovieInfo,
  AddInfoContainer,
  Link,
} from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;
  const userScore = Math.floor(vote_average * 10);
  const posterSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BtnLink to={backLinkHref}>&#129044; Go back</BtnLink>
      <MainInfoContainer>
        <img src={posterSrc} alt={title}></img>
        <MovieInfo>
          <h1>{title}</h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </MovieInfo>
      </MainInfoContainer>
      <AddInfoContainer>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </AddInfoContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
