import { useState, useEffect } from 'react';

import { fetchMoviesById } from 'services/movies-api';

import Reviews from '../pages/Reviews';

import iconNotFound from '../images/actor-notfound.png';

import Cast from 'pages/Cast';
import {
  useParams,
  NavLink,
  Route,
  Routes,
  useLocation,
  Link,
} from 'react-router-dom';

import { ReactComponent as IconSearch } from '../images/arrowleft-icon.svg';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieItem() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMoviesById(moviesId).then(setMovie);
  }, [moviesId]);

  const location = useLocation();

  return (
    <>
      <Link className="link-go-back" to={location.state}>
        <button className="button-back">
          <IconSearch />
          Go back
        </button>
      </Link>
      {movie && (
        <div className="main-wrap">
          <img
            src={
              movie.poster_path
                ? BASE_POSTER_URL + movie.poster_path
                : iconNotFound
            }
            alt={movie.original_title}
          />
          <div className="right-container">
            <h2>
              {movie.original_title}
              <span className="movie-item__year">
                ({movie.release_date.substr(0, 4)})
              </span>
            </h2>
            <p>User Score : {movie.vote_average * 10 + '%'} </p>
            <p className="movie-item__subtitle-text">Overview</p>
            <p>{movie.overview}</p>
            <p className="movie-item__subtitle-text">Genres</p>
            {movie.genres.map(({ name }) => {
              return (
                <span className="genres-span" key={name}>
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      )}
      <div className="aditional-wrap">
        <p className="aditional__title-text">Additional information</p>
        <ul className="aditional-list">
          <li className="aditional-list__item">
            <NavLink
              className="aditional-list__item-link"
              to={'cast'}
              state={location.state}
            >
              Cast
            </NavLink>
          </li>
          <li className="aditional-list__item">
            <NavLink
              className="aditional-list__item-link"
              to={'reviews'}
              state={location.state}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="reviews" element={<Reviews idFilm={moviesId} />}></Route>
        <Route path="cast" element={<Cast idFilm={moviesId} />}></Route>
      </Routes>
    </>
  );
}
