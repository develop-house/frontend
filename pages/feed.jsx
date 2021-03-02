import React, { useState } from 'react';
import Button from '../components/feed/button';
import CalendarList from '../components/feed/calendarList';
import Header from '../components/feed/header';
import RoomList from '../components/feed/roomList';

const Feed = () => {
  const [events, setEvents] = useState([
    { id: '1234', time: '04:00pm', info: '재미있는 일이 생겼다' },
    { id: '1222', time: '05:00pm', info: '재미있는 일이 생겼다' },
    { id: '1233', time: '06:00pm', info: '재미있는 일이 생겼다' },
    { id: '1255', time: '07:00pm', info: '재미있는 일이 생겼다' },
  ]);

  const [rooms, setRooms] = useState([
    { id: '2131', img: '/room.jpg', name: 'hi~ hello~', attender: 14 },
    { id: '2424', img: '/room.jpg', name: 'hello~', attender: 27 },
    { id: '2992', img: '/room.jpg', name: 'home~', attender: 30 },
    { id: '2444', img: '/room.jpg', name: 'is good~', attender: 40 },
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
