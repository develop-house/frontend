import React from 'react';
import PropTypes from 'prop-types';
import RoomDetail from './roomDetail';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const RoomList = ({ rooms }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {rooms.map((room) => (
        <RoomDetail
          key={room.id}
          img={room.img}
          name={room.name}
          attender={room.attender}
        />
      ))}
    </List>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: 'none',
    backgroundColor: '#babebf',
    width: '80%',
    height: '15rem',
    padding: '0',
    margin: 'auto',
    marginTop: theme.spacing(4),
    borderRadius: '0.1rem',
    overflowY: 'scroll',
  },
}));

export default RoomList;
