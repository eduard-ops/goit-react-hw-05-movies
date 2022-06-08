import 'react-toastify/dist/ReactToastify.css';

import Conatainer from './Conatainer';

import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import HomeView from 'pages/HomeView';

import NotFoundView from 'pages/NotFoundView';

import Navigation from './Navigation';

import MovieItem from 'pages/MovieItem';

import { SearchMovies } from 'pages/SearchMovies';

export const App = () => {
  return (
    <>
      <Navigation />
      <Conatainer>
        <ToastContainer autoClose={3000} pauseOnHover={false} />
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="movies" element={<SearchMovies />}></Route>
          <Route path="movies/:moviesId/*" element={<MovieItem />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Conatainer>
    </>
  );
};
