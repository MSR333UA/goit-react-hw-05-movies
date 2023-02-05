import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { ItemReview, ListReview, WrapperReview } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <WrapperReview>
      <ListReview>
        {!reviews.length && <div>There are no reviews for this movie</div>}
        {reviews.map(({ id, author, content }) => {
          return (
            <ItemReview key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </ItemReview>
          );
        })}
      </ListReview>
    </WrapperReview>
  );
};
