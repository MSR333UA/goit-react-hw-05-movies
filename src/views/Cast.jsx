import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'services/api';
import { List, ListItem } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    fetchActors(movieId).then(setCastInfo);
  }, [movieId]);

  if (castInfo.length === 0) {
    return null;
  }

  return (
    <List>
      {castInfo.map(actor => {
        const { name, character, profile_path, id } = actor;

        return (
          <ListItem key={id}>
            <img
              src={'https://image.tmdb.org/t/p/w300/' + profile_path}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </ListItem>
        );
      })}
    </List>
  );
};
