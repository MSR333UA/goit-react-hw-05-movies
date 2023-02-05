import { Item, LinkItem, List, Text } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <LinkItem to={`/movies/${id}`} state={{ from: location }}>
              <Text>{title}</Text>
            </LinkItem>
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
