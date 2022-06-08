import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import { fetchMoviesByName } from 'services/movies-api';

import Loader from 'components/Loader';

export default function MoviesList({ movieName }) {
  const [movies, setMovies] = useState(null);
  const [spinner, setSpiner] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setSpiner(true);
      try {
        const { results } = await fetchMoviesByName(movieName);
        if (results.length <= 0) {
          throw new Error();
        }
        setMovies(results);
        setSpiner(false);
      } catch (error) {
        toast.info(`Image with name ${movieName} not found 😢`, {
          theme: 'colored',
        });
        setSpiner(false);
      }
    };
    fetchMovie();
  }, [movieName]);

  return (
    <>
      {spinner && <Loader />}
      {movies && (
        <ul>
          {movies.map(({ original_title, id }) => {
            return (
              <li key={id}>
                <Link
                  to={`${id}`}
                  state={{ pathname: `/movies?query=${movieName}` }}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
