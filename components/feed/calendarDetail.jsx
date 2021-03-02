import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const CalendarDetail = ({ time, info }) => {
  return (
    <li css={liStyle}>
      <span css={textStyle}>{time}</span>
      <span css={textStyle}>{info}</span>
    </li>
  );
};

CalendarDetail.propTypes = {
  time: PropTypes.string,
  info: PropTypes.string,
};

const liStyle = css`
  width: 90%;
  margin: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const textStyle = css`
  color: #636e72;
  margin-left: 1rem;
`;

export default CalendarDetail;
