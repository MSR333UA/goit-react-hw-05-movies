import { SearchForm, SearchInput } from './SearchBar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();

    if (searchQuery.length === 0) {
      return alert('Please, enter your request');
    }

    onSubmit(searchQuery);

    e.currentTarget.reset();
  };

  return (
    <SearchForm onSubmit={e => handleSubmit(e)}>
      <SearchInput type="text" name="search" />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
