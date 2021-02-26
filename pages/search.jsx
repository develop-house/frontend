import React, { useState } from 'react';
import SearchForm from '../components/searchForm';
import SearchList from '../components/searchList';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonContainer = css`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 7rem;
  margin: 0 0.5rem 0 0.5rem;
  cursor: pointer;
  outline: transparent;
  border: none;

  background-color: ${(props) => (props.clicked ? '#00b894' : '#55efc4')};
`;

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
      <SearchForm handleClickSearch={handleClickSearch} />
      <div css={buttonContainer}>
        <Button clicked={category === 'people'} onClick={handleClickCategory}>
          people
        </Button>
        <Button clicked={category === 'club'} onClick={handleClickCategory}>
          club
        </Button>
      </div>
      <SearchList
        resultDatas={
          category === 'people' ? resultDatas.people : resultDatas.club
        }
      />
    </>
  );
};

export default Search;
