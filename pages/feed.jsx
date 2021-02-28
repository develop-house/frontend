import React, { useState } from 'react';
import Button from '../components/feed/button';
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

  const [rooms, setRooms] = useState([
    { img: '/room.jpg', name: 'hi~ hello~', attender: 14 },
    { img: '/room.jpg', name: 'hello~', attender: 27 },
    { img: '/room.jpg', name: 'home~', attender: 30 },
    { img: '/room.jpg', name: 'is good~', attender: 40 },
  ]);

  const handleClickCreateRoom = () => {
    console.log('handleClickCreateRoom');
  };

  return (
    <div>
      <Header />
      <CalendarList events={events} />
      <RoomList rooms={rooms} />
      <Button name={'Create'} handleClick={handleClickCreateRoom} />
    </div>
  );
};

export default Feed;
