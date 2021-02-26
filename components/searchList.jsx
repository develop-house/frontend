import React from 'react';
import { jsx, css } from '@emotion/react';
import PropTypes from 'prop-types';

const liStyle = css`
  background-color: gray;
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

const descriptionStyle = css`
  width: 70%;
  padding: 0 5px;
  font-size: 0.8rem;
  border-top: 0.1rem solid;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SearchDetail = ({ resultData }) => {
  return (
    <li css={liStyle}>
      <img css={profileImg} src="/profile.png" alt="img" />
      <div>
        <h4 css={nameStyle}>{resultData.name}</h4>
        <div css={descriptionStyle}>{resultData.description}</div>
      </div>
    </li>
  );
};

SearchDetail.propTypes = {
  resultData: PropTypes.object,
};

const ulStyle = css`
  height: 80vh;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0;
  overflow-y: scroll;
`;

const SearchList = ({ resultDatas }) => {
  return (
    <ul css={ulStyle}>
      {resultDatas.map((resultData, idx) => (
        <SearchDetail key={idx} resultData={resultData} />
      ))}
    </ul>
  );
};

SearchList.propTypes = {
  resultDatas: PropTypes.array,
};

export default SearchList;
