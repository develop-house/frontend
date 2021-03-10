import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import search from './search';
import event from './event';
import room from './room';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  search,
  event,
  room,
});

export default rootReducer;
