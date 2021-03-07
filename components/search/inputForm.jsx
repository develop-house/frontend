import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';

const InputForm = ({ handleClickSearch }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    const word = inputRef.current.value;
    event.preventDefault();
    formRef.current.reset();

    //여기다가 받은 word를 바탕으로 search
    handleClickSearch(word);
  };

  const classes = useStyles();

  return (
    <Paper
      ref={formRef}
      onSubmit={handleSubmit}
      component="form"
      className={classes.root}
    >
      <IconButton className={classes.iconButton} aria-label="menu">
        <ArrowBackIosIcon />
      </IconButton>
      <InputBase
        inputRef={inputRef}
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

InputForm.propTypes = {
  handleClickSearch: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0.1rem 0.1rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default InputForm;
