import { useEffect, useState } from 'react';

import { fetchReviewById } from 'services/movies-api';

export default function Reviews({ idFilm }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewById(idFilm)
      .then(rev => rev.results)
      .then(setReviews);
  }, [idFilm]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ content, author, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>We dont have any reviews for this movie</h2>
      )}
    </>
  );
}
