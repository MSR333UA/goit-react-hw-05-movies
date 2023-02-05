import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const FetchTrendingMovies = async () => {
      try {
        const trendingMovies = await fetchTrending();
        setTrendingMovies(trendingMovies);
      } catch (error) {
        alert('Please, try again - reload the page');
      }
    };
    FetchTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={trendingMovies} link={`movies/`} />
    </>
  );
};
