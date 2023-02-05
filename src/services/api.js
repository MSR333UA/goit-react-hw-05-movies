import axios from 'axios';

const API_KEY = '416189c391d5281cd1997eac0a39e5bd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchActors = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
