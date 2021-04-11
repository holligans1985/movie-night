import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchBar from './styles';

const SearchBar = ({ placeholder, allowClear, onSearch, loading, enterButton }) => (
  <StyledSearchBar
    placeholder={placeholder}
    allowClear={allowClear}
    onSearch={onSearch}
    loading={loading}
    enterButton={enterButton}
    size="large"
  />
);

SearchBar.defaultProps = {
  placeholder: 'Search',
  allowClear: true,
  loading: false,
  enterButton: true,
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  allowClear: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  enterButton: PropTypes.bool,
};

export default SearchBar;
