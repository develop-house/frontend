import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import EventNoteIcon from '@material-ui/icons/EventNote';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
  const classes = useStyles();

  const handleClickSearch = () => {
    console.log('handleClickSearch');
    //=> search page로
  };

  const handleClickCalendar = () => {
    console.log('handleClickCalendar');
    //=> calendar page로
  };

  const handleClickAlarm = () => {
    console.log('handleClickAlarm');
    //=> alarm page로
  };

  const handleClickSetting = () => {
    console.log('handleClickSetting');
    //=> setting page로
  };

  const handleClickFriend = () => {
    console.log('handleClickFriend');
    //=> friend page로
  };

  const handleClickProfile = () => {
    console.log('handleClickProfile');
    //=> profile page로
  };

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton aria-label="event" className={classes.iconButton}>
        <EventNoteIcon />
      </IconButton>
      <IconButton aria-label="activity" className={classes.iconButton}>
        <NotificationsIcon />
      </IconButton>
      <IconButton aria-label="setting" className={classes.iconButton}>
        <SettingsIcon />
      </IconButton>
      <IconButton aria-label="firends" className={classes.iconButton}>
        <PeopleIcon />
      </IconButton>
      <IconButton aria-label="user" className={classes.iconButton}>
        <PersonIcon />
      </IconButton>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0.1rem 0.1rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    padding: 10,
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default Header;
