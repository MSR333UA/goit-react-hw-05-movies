import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

import { TailSpin } from 'react-loader-spinner';
import { BtnLink, InfoBox, MovieInfoBox } from './MovieDetails.styled';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovieInfo);
  }, [movieId]);

  if (Object.keys(movieInfo).length === 0) {
    return null;
  }

  const { vote_average, title, overview, genres, poster_path, release_date } =
    movieInfo;

  const userScore = parseInt(vote_average * 10);
  const genresInfo = genres.map(a => a.name).join(' ');
  const releaseYear = release_date.split('-')[0];

  return (
    <>
      <MovieInfoBox>
        <div>
          <BtnLink to={backLink}>Go Back</BtnLink>
          <img
            src={'https://image.tmdb.org/t/p/w500' + poster_path}
            alt={`${title} poster`}
          />
        </div>
        <InfoBox>
          <h2>
            {title} ({releaseYear})
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresInfo}</p>
        </InfoBox>
      </MovieInfoBox>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Suspense
        fallback={
          <TailSpin
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
