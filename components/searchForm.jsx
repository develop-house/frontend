import React, { createRef } from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const SearchForm = ({ handleClickSearch }) => {
  const formRef = createRef();
  const inputRef = createRef();

  const handleSubmit = (event) => {
    const word = inputRef.current.value;
    event.preventDefault();
    formRef.current.reset();

    //여기다가 받은 word를 바탕으로 search
    handleClickSearch(word);
  };

  return (
    <form ref={formRef} css={formStyle} onSubmit={handleSubmit}>
      <input ref={inputRef} css={inputStyle} name="search" type="text" />
      <button css={buttonStyle}>
        <FontAwesomeIcon css={iconStyle} icon={faSearch} />
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  handleClickSearch: PropTypes.func,
};

const formStyle = css`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const inputStyle = css`
  flex: 1;
  border-radius: 0.1rem;
  border-color: black;
  border-width: 0.01rem;
`;

const buttonStyle = css`
  background-color: #636e72;
  margin-left: 0.1rem;
  border-radius: 0.1rem;
  border-width: 0.01rem;

  outline: none;
  border: transparent;
`;

const iconStyle = css`
  color: #babebf;
`;

export default SearchForm;
