import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
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
});

export default rootReducer;