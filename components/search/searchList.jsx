import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import SearchDetail from './searchDetail';

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

const ulStyle = css`
  height: 80vh;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0;
  overflow-y: scroll;
`;

export default SearchList;
