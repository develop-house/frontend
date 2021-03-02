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
  const handleClickSearch = () => {
    console.log('handleClickSearch');
    //=> search page로
  };

  const handleClickCalendar = () => {
    console.log('handleClickCalendar');
    //=> calendar page로
  };

  const handleClickAlarm = () => {
    console.log('handleClickAlarm');
    //=> alarm page로
  };

  const handleClickSetting = () => {
    console.log('handleClickSetting');
    //=> setting page로
  };

  const handleClickFriend = () => {
    console.log('handleClickFriend');
    //=> friend page로
  };

  const handleClickProfile = () => {
    console.log('handleClickProfile');
    //=> profile page로
  };

  return (
    <ul css={ulStyle}>
      <button css={buttonStyle} onClick={handleClickSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button css={buttonStyle} onClick={handleClickCalendar}>
        <FontAwesomeIcon icon={faCalendarAlt} />
      </button>
      <button css={buttonStyle} onClick={handleClickAlarm}>
        <FontAwesomeIcon icon={faBell} />
      </button>
      <button css={buttonStyle} onClick={handleClickSetting}>
        <FontAwesomeIcon icon={faCog} />
      </button>
      <button css={buttonStyle} onClick={handleClickFriend}>
        <FontAwesomeIcon icon={faUsers} />
      </button>
      <button css={buttonStyle} onClick={handleClickProfile}>
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
