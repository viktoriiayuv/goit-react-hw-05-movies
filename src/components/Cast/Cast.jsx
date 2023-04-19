import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/themoviedbAPI';
import { CastList, CastContainer } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(cast => setCast(cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <CastContainer>
      {cast &&
        (cast.length > 0 ? (
          <CastList>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                )}
                <div>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))}
          </CastList>
        ) : (
          <p>We don't have information about cast.</p>
        ))}
    </CastContainer>
  );
};

export default Cast;
