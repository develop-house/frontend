import React from 'react';
import Calendar from '../components/feed/calendar';
import Header from '../components/feed/header';
import RoomList from '../components/feed/roomList';

const Feed = (props) => {
  return (
    <>
      <Header />
      <Calendar />
      <RoomList />
    </>
  );
};

export default Feed;
