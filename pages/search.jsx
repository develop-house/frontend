import React, { useState } from 'react';
import InputForm from '../components/search/inputForm';
import SearchList from '../components/search/searchList';
import CategoryBtn from '../components/search/categoryBtn';
import { useSelector, useDispatch } from 'react-redux';
import { searchData } from '../reducers/search';

const Search = () => {
  const [category, setCategory] = useState('people');
  const { result } = useSelector((state) => ({
    result: state.search.result,
  }));
  const dispatch = useDispatch();

  const handleClickSearch = (word) => {
    dispatch(searchData(category, word));
  };

  const handleClickCategory = (target) => {
    console.log('handleClickTopic');
    setCategory(target);
  };

  return (
    <>
      <InputForm handleClickSearch={handleClickSearch} />
      <CategoryBtn
        category={category}
        handleClickCategory={handleClickCategory}
      />
      <SearchList resultDatas={result} />
    </>
  );
};

export default Search;
