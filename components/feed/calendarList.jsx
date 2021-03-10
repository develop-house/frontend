import React from 'react';
import PropTypes from 'prop-types';
import CalendarDetail from './calendarDetail';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const CalendarList = ({ events }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {events.map((event) => (
        <CalendarDetail key={event.id} time={event.time} info={event.info} />
      ))}
    </List>
  );
};

CalendarList.propTypes = {
  events: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    height: '10rem',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
  },
}));

export default CalendarList;
