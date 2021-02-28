import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const RoomDetail = () => {
  return (
    <li css={liStyle}>
      <img css={imgStyle} src="/room.jpg" alt="room img" />
      <div css={infoStyle}>
        <span css={roomNameStyle}>roomName</span>
        <span css={stateStyle}>
          <FontAwesomeIcon icon={faUser} />
          &nbsp;참가자
        </span>
      </div>
    </li>
  );
};

const liStyle = css`
  background-color: #bfa180;
  display: flex;
  width: 90%;
  margin: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 0.1rem;
`;

const imgStyle = css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 1rem;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
`;

const roomNameStyle = css`
  color: #000000;
  margin: 0.5rem 0 0.5rem 0;
`;

const stateStyle = css`
  color: #636e72;
  font-size: 0.8rem;
`;

export default RoomDetail;
