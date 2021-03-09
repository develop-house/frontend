import React, { useEffect } from 'react';
import Button from '../components/feed/button';
import CalendarList from '../components/feed/calendarList';
import Header from '../components/feed/header';
import RoomList from '../components/feed/roomList';
import { useSelector, useDispatch } from 'react-redux';
import { getEventData } from '../reducers/event';
import { getRoomData } from '../reducers/room';

const Feed = () => {
  const { events, rooms } = useSelector((state) => ({
    events: state.event.result,
    rooms: state.room.result,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventData());
    dispatch(getRoomData());
  }, []);

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
