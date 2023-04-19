import axios from 'axios';

const API_KEY = 'c32494ab48f2db4575ae8be81883e5e9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export async function getTrendingMovies() {
  const response = await axios('trending/movie/day');
  return response.data.results;
}

export async function getMovieByKeyWord(keyword) {
  const response = await axios(`/search/movie?query=${keyword}`);
  return response.data.results;
}

export async function getMovieDetails(id) {
  const response = await axios(`/movie/${id}`);
  return response.data;
}

export async function getMovieCredits(id) {
  const response = await axios(`/movie/${id}/credits`);
  return response.data.cast;
}

export async function getMovieReviews(id) {
  const response = await axios(`/movie/${id}/reviews`);
  return response.data.results;
}
