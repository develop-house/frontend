import React from 'react';
import PropTypes from 'prop-types';
import SearchDetail from './searchDetail';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const SearchList = ({ resultDatas }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {resultDatas.map((resultData) => (
        <SearchDetail key={resultData.id} resultData={resultData} />
      ))}
    </List>
  );
};

SearchList.propTypes = {
  resultDatas: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default SearchList;
