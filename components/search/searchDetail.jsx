import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const SearchDetail = ({ resultData }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/profile.png" />
        </ListItemAvatar>
        <ListItemText
          primary={resultData.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {resultData.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

SearchDetail.propTypes = {
  resultData: PropTypes.object,
};

export default SearchDetail;
