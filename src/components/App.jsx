import { Suspense } from 'react';

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Conatainer from './Conatainer';

import Navigation from './Navigation';

import Loader from './Loader';

const HomeView = lazy(() => import('../pages/HomeView'));

const SearchMovies = lazy(() => import('../pages/SearchMovies'));

const MovieItem = lazy(() => import('../pages/MovieItem'));

const NotFoundView = lazy(() => import('../pages/NotFoundView'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Conatainer>
        <ToastContainer autoClose={3000} pauseOnHover={false} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomeView />}></Route>
            <Route path="movies" element={<SearchMovies />}></Route>
            <Route path="movies/:moviesId/*" element={<MovieItem />}></Route>
            <Route path="*" element={<NotFoundView />}></Route>
          </Routes>
        </Suspense>
      </Conatainer>
    </>
  );
};
