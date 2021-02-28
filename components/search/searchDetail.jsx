import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const SearchDetail = ({ resultData }) => {
  return (
    <li css={liStyle}>
      <img css={profileImg} src="/profile.png" alt="img" />
      <div css={infoStyle}>
        <h4 css={nameStyle}>{resultData.name}</h4>
        <div css={descriptionStyle}>{resultData.description}</div>
      </div>
    </li>
  );
};

SearchDetail.propTypes = {
  resultData: PropTypes.object,
};

const liStyle = css`
  background-color: #93b4bf;
  list-style: none;
  display: flex;
  margin: 0.1rem 1rem 0.2rem 1rem;
  border-radius: 0.1rem;
`;

const profileImg = css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 1rem;
`;

const nameStyle = css`
  margin: 1rem 0 0.3rem 0;
`;

const infoStyle = css`
  width: 100%;
`;

const descriptionStyle = css`
  width: 90%;
  padding: 0 5px;
  font-size: 0.8rem;
  border-top: 0.1rem solid;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default SearchDetail;
