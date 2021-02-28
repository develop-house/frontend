import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CategoryBtn = ({ category, handleClickCategory }) => {
  return (
    <div css={buttonContainer}>
      <Button clicked={category === 'people'} onClick={handleClickCategory}>
        people
      </Button>
      <Button clicked={category === 'club'} onClick={handleClickCategory}>
        club
      </Button>
    </div>
  );
};

CategoryBtn.propTypes = {
  category: PropTypes.string,
  handleClickCategory: PropTypes.func,
};

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

  background-color: ${(props) => (props.clicked ? '#93B4BF' : '#BABEBF')};
`;

export default CategoryBtn;
