import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => {
  return (
    <button css={buttonStyle} onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

const buttonStyle = css`
  display: block;
  background-color: #736c64;
  outline: none;
  border: none;
  border-radius: 0.2rem;
  width: 6rem;
  height: 3rem;
  margin: 2rem auto;
`;

export default Button;
