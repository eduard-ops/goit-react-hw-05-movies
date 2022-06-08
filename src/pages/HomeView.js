import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { fetchPopular } from 'services/movies-api';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  const location = useLocation();

  useEffect(() => {
    fetchPopular()
      .then(films => films.results)
      .then(setMovies);
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      {movies && (
        <ul className="popular-list">
          {movies.map(({ original_title, id }) => {
            return (
              <li key={id} className="popular-list__item">
                <Link
                  className="popular-list__item-link"
                  to={`movies/${id}`}
                  state={location}
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
