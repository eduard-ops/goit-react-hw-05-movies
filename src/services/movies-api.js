const BAZE_URL = 'https://api.themoviedb.org';
const API_KEY = 'e95cb0020c8da522f774c98098c822a8';

async function mainFetchApi(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopular(params) {
  return mainFetchApi(`${BAZE_URL}/3/movie/popular?api_key=${API_KEY}`);
}

export function fetchMoviesById(id) {
  return mainFetchApi(`${BAZE_URL}/3/movie/${id}?api_key=${API_KEY}`);
}

export function fetchCastById(id) {
  return mainFetchApi(`${BAZE_URL}/3/movie/${id}/credits?api_key=${API_KEY}`);
}

export function fetchReviewById(id) {
  return mainFetchApi(`${BAZE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}`);
}

export function fetchMoviesByName(name) {
  return mainFetchApi(
    `${BAZE_URL}/3/search/movie?api_key=${API_KEY}&page=1&query=${name}`
  );
}

// "https://api.themoviedb.org/3/review/{review_id}?api_key=<<api_key>>"
