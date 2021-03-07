import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CategoryBtn = ({ category, handleClickCategory }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        disabled={category === 'people'}
        size="small"
        className={classes.button}
        variant="contained"
        onClick={() => {
          handleClickCategory('people');
        }}
      >
        people
      </Button>
      <Button
        disabled={category === 'club'}
        size="small"
        className={classes.button}
        variant="contained"
        onClick={() => {
          handleClickCategory('club');
        }}
      >
        club
      </Button>
    </div>
  );
};

CategoryBtn.propTypes = {
  category: PropTypes.string,
  handleClickCategory: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    margin: theme.spacing(1),
    textTransform: 'none',
  },
}));

export default CategoryBtn;
