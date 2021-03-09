//액션
//데이터 받아오기
export const GET_ROOM_DATA = 'GET_ROOM_DATA';
export const GET_ROOM_DATA_SUCCESS = 'GET_ROOM_DATA_SUCCESS';
export const GET_ROOM_DATA_ERROR = 'GET_ROOM_DATA_ERROR';

export const getRoomData = () => ({
  type: GET_ROOM_DATA,
});

const initialState = {
  result: [
    { id: '2131', img: '/room.jpg', name: 'hi~ hello~', attender: 14 },
    { id: '2424', img: '/room.jpg', name: 'hello~', attender: 27 },
  ],
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case GET_ROOM_DATA_SUCCESS:
    case GET_ROOM_DATA_ERROR:
      return { result: action.payload };

    default:
      return state;
  }
}
