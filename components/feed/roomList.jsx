import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import RoomDetail from './roomDetail';

const RoomList = () => {
  return (
    <ul css={ulStyle}>
      <RoomDetail />
      <RoomDetail />
      <RoomDetail />
      <RoomDetail />
      <RoomDetail />
      <RoomDetail />
    </ul>
  );
};

const ulStyle = css`
  list-style: none;
  background-color: #babebf;
  width: 80%;
  height: 40vh;
  padding: 0;
  margin: auto;
  margin-top: 3rem;
  border-radius: 0.1rem;

  overflow-y: scroll;
`;

export default RoomList;
