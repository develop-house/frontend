import React, { useState } from 'react';
import CalendarList from '../components/feed/calendarList';
import Header from '../components/feed/header';
import RoomList from '../components/feed/roomList';

const Feed = () => {
  const [events, setEvents] = useState([
    { time: '04:00pm', info: '재미있는 일이 생겼다' },
    { time: '05:00pm', info: '재미있는 일이 생겼다' },
    { time: '06:00pm', info: '재미있는 일이 생겼다' },
    { time: '07:00pm', info: '재미있는 일이 생겼다' },
  ]);

  return (
    <>
      <Header />
      <CalendarList events={events} />
      <RoomList />
    </>
  );
};

export default Feed;
