import React, { useState } from 'react';
import SearchForm from '../components/searchForm';
import SearchList from '../components/searchList';

const Search = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <SearchForm />
      <SearchList />
    </>
  );
};

export default Search;
