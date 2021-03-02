import React, { useState } from 'react';
import InputForm from '../components/search/inputForm';
import SearchList from '../components/search/searchList';
import CategoryBtn from '../components/search/categoryBtn';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('people');
  const [resultDatas, setResultDatas] = useState({
    people: [
      { img: '이미지랑께', name: '건우', description: '건우는 천재다' },
      { img: '이미지랑께', name: '민찬', description: '건우는 천재다' },
      { img: '이미지랑께', name: '흑우', description: '건우는 천재다' },
    ],
    club: [
      { img: '이미지랑께', name: '건우', description: '건우는 천재다' },
      { img: '이미지랑께', name: '민찬', description: '건우는 천재다' },
      { img: '이미지랑께', name: '흑우', description: '건우는 천재다' },
    ],
  });

  const handleClickSearch = (word) => {
    console.log(word);
    setKeyword(word);
  };

  const handleClickCategory = (event) => {
    console.log('handleClickTopic');
    const target = event.target.innerText;
    setCategory(target);

    //여기서부터는 리덕스에 category keword등을 다 넣을거면 수정해야하는 부분
  };

  return (
    <>
      <InputForm handleClickSearch={handleClickSearch} />
      <CategoryBtn
        category={category}
        handleClickCategory={handleClickCategory}
      />
      <SearchList
        resultDatas={
          category === 'people' ? resultDatas.people : resultDatas.club
        }
      />
    </>
  );
};

export default Search;