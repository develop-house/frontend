import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import RoomDetail from './roomDetail';

const RoomList = ({ rooms }) => {
  return (
    <ul css={ulStyle}>
      {rooms.map((room, idx) => (
        <RoomDetail
          key={idx}
          img={room.img}
          name={room.name}
          attender={room.attender}
        />
      ))}
    </ul>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array,
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
