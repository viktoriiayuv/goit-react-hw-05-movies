import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedbAPI';
import { ReviewsList, ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(reviews => setReviews(reviews))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews &&
        (reviews.length > 0 ? (
          <ReviewsList>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className="author">Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ReviewsList>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        ))}
    </ReviewsContainer>
  );
};

export default Reviews;
