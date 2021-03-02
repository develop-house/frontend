import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import CalendarDetail from './calendarDetail';

const CalendarList = ({ events }) => {
  return (
    <ul css={ulStyle}>
      {events.map((event) => (
        <CalendarDetail key={event.id} time={event.time} info={event.info} />
      ))}
    </ul>
  );
};

CalendarList.propTypes = {
  events: PropTypes.array,
};

const ulStyle = css`
  list-style: none;
  background-color: #93b4bf;
  width: 80%;
  height: 20vh;
  padding: 0;
  margin: auto;
  border-radius: 0.1rem;

  overflow-y: scroll;
`;

export default CalendarList;
