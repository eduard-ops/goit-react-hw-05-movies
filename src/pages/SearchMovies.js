import SearchBar from 'components/Searchbar';

import MoviesList from './Movies-list';

import { useNavigate, useLocation } from 'react-router-dom';

export function SearchMovies() {
  const location = useLocation();

  const searchString = new URLSearchParams(location.search).get('query');

  const navigate = useNavigate();
  const hundleFormSubmit = imageName => {
    navigate(`?query=${imageName}`);
  };
  return (
    <>
      <SearchBar onSubmit={hundleFormSubmit} />
      {searchString && <MoviesList movieName={searchString} />}
    </>
  );
}
