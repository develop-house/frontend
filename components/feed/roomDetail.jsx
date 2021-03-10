import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

const RoomDetail = ({ img, name, attender }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/profile.png" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <PersonIcon />
                {attender}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
};

RoomDetail.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  attender: PropTypes.number,
};

const useStyles = makeStyles(() => ({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'gray',
  },
}));

export default RoomDetail;
