import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchSearchByKeyword } from 'services/api';

const { MoviesList } = require('components/MoviesList/MoviesList');
const { useEffect, useState } = require('react');
const { useLocation, useSearchParams } = require('react-router-dom');

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    const fetchMoviesSearch = async () => {
      const data = await fetchSearchByKeyword(searchQuery)
        .then(response => response)
        .catch(error => console.log(error));
      setMovies(data);
    };
    if (searchQuery) {
      fetchMoviesSearch();
    }
  }, [searchQuery]);

  const submitSearch = search => {
    setSearchParams(search !== '' ? { search } : {});
  };

  return (
    <>
      <SearchBar onSubmit={submitSearch} />
      {movies && <MoviesList movies={movies} state={{ from: location }} />}
    </>
  );
};
