//액션
//데이터 받아오기
export const GET_EVENT_DATA = 'GET_EVENT_DATA';
export const GET_EVENT_DATA_SUCCESS = 'GET_EVENT_DATA_SUCCESS';
export const GET_EVENT_DATA_ERROR = 'GET_EVENT_DATA_ERROR';

export const getEventData = () => ({
  type: GET_EVENT_DATA,
});

const initialState = {
  result: [
    { id: '1234', time: '04:00pm', info: '재미있는 일이 생겼다' },
    { id: '1222', time: '05:00pm', info: '재미있는 일이 생겼다' },
  ],
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT_DATA_SUCCESS:
    case GET_EVENT_DATA_ERROR:
      return { result: action.payload };

    default:
      return state;
  }
}
