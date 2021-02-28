import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';
import {
  faSearch,
  faCalendarAlt,
  faBell,
  faCog,
  faUsers,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <ul css={ulStyle}>
      <button css={buttonStyle}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button css={buttonStyle}>
        <FontAwesomeIcon icon={faCalendarAlt} />
      </button>
      <button css={buttonStyle}>
        <FontAwesomeIcon icon={faBell} />
      </button>
      <button css={buttonStyle}>
        <FontAwesomeIcon icon={faCog} />
      </button>
      <button css={buttonStyle}>
        <FontAwesomeIcon icon={faUsers} />
      </button>
      <button css={buttonStyle}>
        <FontAwesomeIcon icon={faUser} />
      </button>
    </ul>
  );
};

const ulStyle = css`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const buttonStyle = css`
  background-color: transparent;
  outline: none;
  border: none;
  color: #636e72;
  margin: auto;
`;

export default Header;
