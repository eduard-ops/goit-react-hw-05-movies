import { useState, useEffect } from 'react';

import { fetchCastById } from 'services/movies-api';

import iconNotFound from '../images/actor-notfound.png';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export default function Cast({ idFilm }) {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetchCastById(idFilm)
      .then(rev => rev.cast)
      .then(setActors);
  }, [idFilm]);
  return (
    <>
      {actors && (
        <ul>
          {actors.map(({ original_name, profile_path, character }, index) => {
            return (
              <li key={index}>
                <img
                  src={
                    profile_path ? BASE_POSTER_URL + profile_path : iconNotFound
                  }
                  alt={original_name}
                  className="item-cast__image-cast"
                />
                <p className="item-cast__original-name">{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
