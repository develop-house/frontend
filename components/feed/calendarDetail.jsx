import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const CalendarDetail = ({ time, info }) => {
  return (
    <ListItem>
      <ListItemText secondary={`${time}  ${info}`} />
    </ListItem>
  );
};

CalendarDetail.propTypes = {
  time: PropTypes.string,
  info: PropTypes.string,
};

export default CalendarDetail;
